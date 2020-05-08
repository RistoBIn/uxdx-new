import React from 'react'
// import { Remarkable } from 'remarkable'
import { makeStyles } from '@material-ui/core/styles'
// import { Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
// import useMediaQuery from '@material-ui/core/useMediaQuery'
import moment from 'moment'
import filterData from '../filterData'
import _ from 'lodash'
// import Collapse from '@material-ui/core/Collapse'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import Fab from '@material-ui/core/Fab'
import DoubleArrowImg from 'src/images/arrows.svg'
import SessionCard from '../SessionCard'

// const md = new Remarkable()
const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const getWorkshopCount = (props) => {
  let totalWorkshop = 0
  props.map(data => {
    data.times.map(item => {
      item.sessions.map(session => {
        if (session.data.Session[0].data.Session_Type === 'Workshop') {
          totalWorkshop++
        }
      })
    })
  })
  return totalWorkshop
}

const SessionPage = ({ conference, highlight, date }) => {
  const sessionsData = useStaticQuery(graphql`
  query sessionsData {
    sessions: allAirtable(filter: { table: { eq: "Agendas" } }) {
      nodes {
        ...AgendaFragment
      }
    }
  }
  `)

  const filteredData = filterData(
    sessionsData.sessions.nodes,
    highlight,
    conference,
    date
  )

  // remove the unpublished sessions
  const publishedSessions = filteredData.filter((agendaSessions) => {
    let match = false
    agendaSessions.data.Session.forEach((session) => {
      if (session.data.Session_Status === 'Published') match = true
    })
    return match
  })

  // copy details to the session for sessionCards
  publishedSessions.forEach((agendaSession) => {
    agendaSession.data.Session[0].data.Agenda_Session_Duration = agendaSession.data.Agenda_Session_Duration
    agendaSession.data.Session[0].data.Agenda_Session_End_Time = agendaSession.data.Agenda_Session_End_Time
    agendaSession.data.Session[0].data.Agenda_Session_Start_Time = agendaSession.data.Agenda_Session_Start_Time
    agendaSession.data.Session[0].data.Stage = agendaSession.data.Stage
  })

  // the agenda needs to be sorted by date, time and stage priority
  const sortedAgenda = _(publishedSessions)
    .groupBy(x => moment(x.data.Agenda_Session_Start_Time).format('YYYY-MM-DD'))
    .map((value, key) => {
      const timesArray = _(value)
        .groupBy(x => moment.utc(x.data.Agenda_Session_Start_Time).format('HH:mm'))
        .map((value, key) => {
          var arr = []
          value.map((e, i) => {
            arr.push(e)
          })
          return { time: key, sessions: arr }
        })
        .value()

      // sort the times
      const sortedTimes = timesArray.sort((a, b) => {
        return a.time.localeCompare(b.time)
      })

      // sort the stages
      const sortedStages = sortedTimes.map(e => {
        return {
          time: e.time,
          sessions: e.sessions.sort((a, b) => {
            const aStage = _.get(a, 'data.Stage[0].data.Stage_Priority')
            const bStage = _.get(b, 'data.Stage[0].data.Stage_Priority')
            return aStage - bStage
          })
        }
      })

      return { date: key, times: sortedStages }
    })
    .value()

  const [sessionTabValue, setSessionTabValue] = React.useState('All Sessions')
  const [cardView, setcardView] = React.useState('list')
  const classes = useStyles()

  const settings = {
    dots: false,
    autoplay: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    cssEase: 'linear',
    slidesToShow: 2.3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2
        }
      }
    ]
  }

  function NextArrow (props) {
    const classes = useStyles()
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} ${classes.arrowNext}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <Fab color='primary' size='small' className={classes.fab} aria-label='add'>
          <img src={DoubleArrowImg} alt='' />
        </Fab>
      </div>
    )
  }

  function PrevArrow (props) {
    const classes = useStyles()
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} ${classes.arrowPrev}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <Fab color='primary' size='small' className={classes.fab} aria-label='add'>
          <img src={DoubleArrowImg} alt='' />
        </Fab>
      </div>
    )
  }

  const handleFilterTabChange = (event, newValue) => {
    setSessionTabValue(newValue)
  }

  const handleSlideView = () => {
    setcardView('block')
  }

  const handleFullView = () => {
    setcardView('list')
  }

  // get workshop count
  const totalWorkshop = getWorkshopCount(sortedAgenda)

  // Agenda Section
  const AgendaDate = ({ date, times }) => {
    const timeSections = times.map(time => {
      return (
        <TimeSection
          key={time.time}
          time={time.time}
          sessions={time.sessions}
        />
      )
    })
    return (
      <div>
        <h2 className={classes.DateHeading} id={moment(date).format('dddd-Do')}>{moment(date).format('dddd Do MMMM YYYY')}</h2>
        <div className={classes.flexWrap}>
          {totalWorkshop > 0 &&
            <Tabs
              value={sessionTabValue}
              onChange={handleFilterTabChange}
              indicatorColor='primary'
              textColor='primary'
              className={classes.filterTabs}
              centered
            >
              <Tab className={classes.filterTab} value='All Sessions' label='All Sessions' />
              <Tab className={classes.filterTab} value='Talk' label='Talks' />
              <Tab className={classes.filterTab} value='Workshop' label='Workshops' />
            </Tabs>}

          <div className={classes.ChangeView}>
            <button onClick={handleFullView} role='button' value='list'>
              <svg width='25' height='25' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect y='0.0605469' width='30.6667' height='6.9697' rx='1' fill='#1CBBFF' />
                <rect y='11.2122' width='30.6667' height='6.9697' rx='1' fill='#1CBBFF' />
                <rect y='22.3635' width='30.6667' height='6.9697' rx='1' fill='#1CBBFF' />
              </svg>
            </button>
            <button onClick={handleSlideView} role='button' value='sideBySide'>
              <svg width='25' height='25' viewBox='0 0 31 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect x='0.333252' y='0.666504' width='13.9394' height='13.9394' rx='1' fill='#3B4F61' />
                <rect x='17.0605' y='0.666504' width='13.9394' height='13.9394' rx='1' fill='#3B4F61' />
                <rect x='17.0605' y='17.3938' width='13.9394' height='13.9394' rx='1' fill='#3B4F61' />
                <rect x='0.333252' y='17.3938' width='13.9394' height='13.9394' rx='1' fill='#3B4F61' />
              </svg>
            </button>
          </div>
        </div>
        {timeSections}
      </div>
    )
  }

  const isBlockView = cardView === 'block'

  // Time Section
  const TimeSection = ({ time, sessions }) => {
    // TODO - have different Session components based on the type / desktop / mobile
    // console.log('time', time)
    let totals = 0
    const sessionCards = sessions.map(agendaSession => {
      const session = agendaSession.data.Session[0]
      if (session.data.Session_Type === sessionTabValue || sessionTabValue === 'All Sessions') {
        totals++
        return <SessionCard key={session.id} time={time} sessionID={session.id} session={session.data} cardView={cardView} conferenceId={conference} />
      }
    })

    if (isBlockView && sessionCards.length > 2) {
      return (
        <div className={classes.sessionsCardGridWraper} data-time={time}>
          {time && isBlockView && totals > 0 && (<h2 className={classes.timeStyleLg}>{time}</h2>)}
          <Slider {...settings} className={classes.slickSliderWrapper}>
            {sessionCards}
          </Slider>
        </div>
      )
    }

    return (
      <div className={classes.sessionsCardGridWraper}>
        {time && isBlockView && (<h2 className={classes.timeStyleLg}>{time}</h2>)}
        {sessionCards}
      </div>
    )
  }

  const agenda = sortedAgenda.map((item, index) => {
    const { date, times } = item
    return <AgendaDate key={date} date={date} times={times} />
  })
  return (
    <div>
      {agenda}
    </div>
  )
}

export default SessionPage
