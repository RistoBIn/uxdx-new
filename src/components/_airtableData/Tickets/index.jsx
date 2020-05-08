import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import moment from 'moment'
import { Remarkable } from 'remarkable'
import filterData from '../filterData'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import Interval from 'react-interval-rerender'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const md = new Remarkable()
const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

// const fetchTickets = () => {
//   return ticketData
// }

const TicketCard = ({ conference, highlight }) => {
  const ticketData = useStaticQuery(graphql`
    query ticketData {
      tickets: allAirtable(filter: { table: { eq: "Tickets" } }) {
        nodes {
          id
          data {
            Ticket_Name
            Ticket_Type
            Ticket_Title
            Ticket_SubTitle
            Ticket_Includes
            Display_Start_Date
            Ticket_Start_Date
            Ticket_End_Date
            Display_Button_Text
            Sale_Button_Text
            Price
            Including_VAT
            Tito_Release
            Late_Ticket
            Ticket_Priority
            Conference{
              data{
                Conference_Id
              }
            }
          }
        }
      }
    }
  `)

  const focusInput = (e) => {
    e.preventDefault()
    document.getElementById('pre_sale_sendinblue_register_first_name').focus()
  }

  // useEffect(
  //   () => {
  //     setInterval(timer, 300000)
  //   },
  //   [tickets]
  // )

  const classes = useStyles()

  // filter tickets
  const filteredData = filterData(ticketData.tickets.nodes, highlight, conference)

  let onSaleTickets, lateTickets, today
  // fetch tickets in interval

  const matches = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const ticketsComponents = () => {
    today = new Date()
    onSaleTickets = filteredData.filter((item) => today > new Date(item.data.Display_Start_Date) && today < new Date(item.data.Ticket_End_Date))
    onSaleTickets = onSaleTickets.sort((a, b) => (a.data.Ticket_Priority > b.data.Ticket_Priority) ? 1 : (a.data.Ticket_Priority === b.data.Ticket_Priority) ? ((a.size > b.size) ? 1 : -1) : -1)
    lateTickets = filteredData.filter((item) => item.data.Late_Ticket)
    return onSaleTickets.map((item, index) => {
      // match the lateTicket to the onSaleTIcket based on the Ticket_Type
      const InpersonTicketClass = item.data.Ticket_Type === 'In-Person' ? classes.InpersonTicket : ''
      // get actutal price
      const prices = lateTickets.filter((lateTicket) => lateTicket.data.Ticket_Type === item.data.Ticket_Type)
      let actualPrice = 0
      if (today < new Date(prices[0].data.Display_Start_Date)) {
        actualPrice = prices[0].data.Price
      } else if (today > new Date(prices[0].data.Display_Start_Date) && today < new Date(prices[1].data.Display_Start_Date)) {
        actualPrice = prices[1].data.Price
      }

      const formatter = new Intl.NumberFormat('en-uk', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
      // get descripiton
      const description = md.render(item.data.Ticket_Includes)

      const showTito = today > new Date(item.data.Ticket_Start_Date) ? classes.show : classes.hide
      const showPre = today < new Date(item.data.Ticket_Start_Date) ? classes.show : classes.hide

      function MobileDescription () {
        const [openText, setOpenText] = React.useState(false)

        const handleTextChange = () => {
          setOpenText(!openText)
        }

        return (
          <>
            {
              openText &&
                <p className={classes.ticketIncludes} dangerouslySetInnerHTML={{ __html: description }} />
            }
            {
              matches &&
                <button className={classes.readMoreLink} onClick={handleTextChange}>{!openText ? 'View' : 'Hide'} Details</button>
            }
          </>
        )
      }

      return (
        <div className={`${classes.ticket} ${InpersonTicketClass}`} key={item.id}>
          <h3 className={classes.ticketName}>{item.data.Ticket_Title}</h3>
          {actualPrice > 0 &&
            <>
              <span className={classes.smallText}>Actual Value</span>
              <p className={classes.actualPrice}>{formatter.format(actualPrice)}</p>
            </>}
          <span className={classes.smallText}>until {moment(item.data.Ticket_End_Date).format('Do MMMM, YYYY')}</span>
          <p className={classes.Price}>{formatter.format(item.data.Price)}</p>
          <span className={classes.smallText}>{formatter.format(item.data.Including_VAT)} inc. VAT</span>
          <p className={`${classes.ticketIncludes} ${classes.hideMobile}`} dangerouslySetInnerHTML={{ __html: description }} />
          <MobileDescription />
          <button onClick={focusInput} className={`${classes.ticketBtn} ${showPre}`}>
            {item.data.Display_Button_Text}
          </button>
          <div className={`${classes.titoTicketButton} ${showTito}`}>
            <tito-button
              event={'/initiate/' + item.data.Conference[0].data.Conference_Id}
              releases={item.data.Tito_Release}
            >
              {item.data.Sale_Button_Text}
            </tito-button>
          </div>
        </div>
      )
    })
  }

  return (
    <div className={classes.ticketsWrapper}>
      <Interval delay={3600000}>
        {() => {
          const ticketCards = ticketsComponents()
          return ticketCards
        }}
      </Interval>
    </div>
  )
}

export default TicketCard
