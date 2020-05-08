import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Interval from 'react-interval-rerender'
import filterData from '../filterData'
import moment from 'moment'
import humanizeDuration from 'humanize-duration'
import { Remarkable } from 'remarkable'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const md = new Remarkable()

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const CountdownWidget = ({ data }) => {
  if (data && data[0]) {
    const countdownData = useStaticQuery(graphql`
      query countdownData {
        countdowns: allAirtable(filter: { table: { eq: "Countdown" } }) {
          nodes {
            id
            data {
              Name
              Countdown_Start_Date
              Countdown_End_Date
              Pre_Text
              Post_Text
              Button_Text
              Button_Link
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
    const conference = data[0].elements.conference.value
    const highlight = data[0].elements.highlight.value
    const filteredData = filterData(countdownData.countdowns.nodes, highlight, conference)

    const calculateCountdown = function () {
      const today = new Date()
      const currentCountdown = filteredData.filter((item) => today > new Date(item.data.Countdown_Start_Date) && today < new Date(item.data.Countdown_End_Date[0]))

      // there wont always be an active countdown
      if (currentCountdown[0]) {
        let timeRemaining = new Date(currentCountdown[0].data.Countdown_End_Date) - today
        timeRemaining = Math.round(timeRemaining / 1000) * 1000
        const humanDiff = humanizeDuration(timeRemaining, { units: ['d', 'h', 'm', 's'] })
        return countdownComponent(currentCountdown[0].data, humanDiff)
      }
      return true
    }

    const classes = useStyles()

    const countdownComponent = function (countdown, timeRemaining) {
      const url = '/' + countdown.Button_Link

      const Pre_Text = md.render(countdown.Pre_Text)
      const Post_Text = md.render(countdown.Post_Text)

      return (
        <div className={classes.CountdownWidget}>
          <div className={classes.CountdownWrapper}>
            <span dangerouslySetInnerHTML={{ __html: Pre_Text }} /> &nbsp;
            <span> {timeRemaining} </span> &nbsp;
            <span dangerouslySetInnerHTML={{ __html: Post_Text }} />
            <Link to={url} className={classes.Link}>
              {countdown.Button_Text}
            </Link>
          </div>
        </div>
      )
    }

    return (
      <>
        <Interval delay={1000}>
          {() => {
            const countDown = calculateCountdown()
            return countDown
          }}
        </Interval>
      </>
    )
  } else {
    return (<></>)
  }
}

export default CountdownWidget
