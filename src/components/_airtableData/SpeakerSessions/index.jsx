import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import { Link } from 'gatsby'
// import { Card, CardContent, Typography } from '@material-ui/core'
import moment from 'moment'
import _ from 'lodash'
import SessionCard from '../../_airtableData/SessionCard'
import { Link } from 'gatsby'
import defaultVideo from 'src/images/defaultVideo.jpg'
import Img from 'gatsby-image'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const conferenceName = function (conference) {
  let name = 'UXDX '
  conference.Type === 'Community' ? name += 'Community ' : name += ''
  name += conference.Location + ' ' + conference.Year
  return name
}

const SpeakerSessions = ({ data }) => {
  if (data.sessions) {
    const classes = useStyles()

    // filter to the published sessions
    const publishedSessions = data.sessions.filter((session) => {
      return session.data.Session_Status === 'Published' && ['Break', 'Introduction/Closing'].indexOf(session.data.Session_Type) === -1
    })

    const currentDate = new Date()
    const upcomingSessions = publishedSessions.filter((item) => {
      let match = false
      if (item.data.Agenda && item.data.Agenda.length > 0) {
        item.data.Agenda.forEach((agenda) => {
          if (new Date(agenda.data.Agenda_Session_Start_Time) > currentDate) match = true
        })
      }
      return match
    })
    upcomingSessions.forEach((agendaSession) => {
      const sortedAgendas = _.orderBy(agendaSession.data.Agenda, ['data.Agenda_Session_Start_Time'], ['asc']) // Use Lodash to sort array by 'name'
      let earliestConf
      sortedAgendas.forEach((agenda, index) => {
        if (new Date(agenda.data.Agenda_Session_Start_Time) > currentDate && !earliestConf) earliestConf = agenda
      })
      agendaSession.data.Agenda_Session_Start_Time = earliestConf.data.Agenda_Session_Start_Time
      agendaSession.data.Agenda_Session_End_Time = earliestConf.data.Agenda_Session_End_Time
      agendaSession.data.Conference = earliestConf.data.Conference
    })
    const pastSessions = publishedSessions.filter((item) => {
      let match = false
      if (item.data.Agenda && item.data.Agenda.length > 0) {
        item.data.Agenda.forEach((agenda) => {
          if (new Date(agenda.data.Agenda_Session_Start_Time) < currentDate) match = true
        })
      }
      return match
    }).filter((item) => item.data.Video && item.data.Video !== 'n/a')
    pastSessions.forEach((agendaSession) => {
      const sortedAgendas = _.orderBy(agendaSession.data.Agenda, ['data.Agenda_Session_Start_Time'], ['asc']) // Use Lodash to sort array by 'name'
      let earliestConf, mainConf
      // check if the talk was given at a main conference
      sortedAgendas.forEach((agenda, index) => {
        if (agenda.data.Conference && agenda.data.Conference[0] && agenda.data.Conference[0].data.Type === 'Conference' && !mainConf) mainConf = agenda
        if (new Date(agenda.data.Agenda_Session_Start_Time) < currentDate && !earliestConf) earliestConf = agenda
      })
      const bestConf = mainConf || earliestConf
      console.log('bestConf', bestConf)
      agendaSession.data.Agenda_Session_Start_Time = bestConf.data.Agenda_Session_Start_Time
      agendaSession.data.Agenda_Session_End_Time = bestConf.data.Agenda_Session_End_Time
      agendaSession.data.Conference = bestConf.data.Conference
    })

    console.log(publishedSessions, upcomingSessions, pastSessions)
    const UpcomingSessions = ({ sessions }) => {
      const sortedByConference = _(sessions)
        .groupBy(x => x.data.Conference[0].data.Conference_Id)
        .map((value, key) => ({ conference: key, events: value, data: value[0].data.Conference[0].data, date: moment.utc(value[0].data.Session_Start_Time).format('YYYY-MM-DD') }))
        .value()
      // date ascending order
      const sortedByDate = _.orderBy(sortedByConference, ['date'], ['asc'])
      return (
        <>
          <Sessions sessions={sortedByDate} showSpeaker='false' />
        </>
      )
    }

    const Sessions = ({ sessions }) => {
      // console.log('sessions: ', sessions);
      const allSessions = sessions.map((data, index) => {
        // Group by date
        const grpByDate = _(data.events)
          .groupBy(x => moment.utc(x.data.Session_Start_Time).format('YYYY-MM-DD'))
          .map((value, key) => ({ date: key, events: value }))
          .value()
        // sort by date
        const sortedByDate = _.orderBy(grpByDate, ['date'], ['asc'])
        // get each date sessions
        const sessionCards = sortedByDate.map((events) => {
          // sort by time
          const sortedByTime = _.orderBy(events.events, ['data.Agenda[0].data.Agenda_Session_Start_Time'], ['asc'])
          return sortedByTime.map((session) => {
            return <SessionCard width='lg' key={session.id} sessionID={session.id} session={session.data} showSpeaker='false' />
          })
        })
        const classes = useStyles()

        const location = (data.data.Location).toLowerCase()
        return (
          <div key={index}>
            <h5 className={classes.conferneceHeading}>
              {conferenceName(data.data)}
              <span>{moment.utc(data.events[0].data.Agenda[0].data.Agenda_Session_Start_Time).format('dddd Do MMMM')}</span>
            </h5>
            {sessionCards}
            <>
              {data.data.Type === 'Community' ? (
                <Link to={`/community/${location}/${data.data.Year}`} className={classes.communityLink}>UXDX COMMUNITY {location} {data.data.Year}</Link>
              )
                : (<Link to={location + '/agenda'} className={classes.communityLink}>UXDX {location} {data.data.Year}</Link>)}
            </>
          </div>
        )
      })
      return allSessions
    }

    const PastSessionCard = ({ session, conference }) => {
      const classes = useStyles()
      const [open, setOpen] = React.useState(false)
      const handleOpen = () => {
        setOpen(!open)
      }

      // get the video image
      // TODO - convert this into a background url for the div
      const alt = 'Watch ' + session.data.Talk_Title

      return (
        <div className={`${classes.Conference}`} key={session.id}>
          <h3>{conferenceName(conference)}</h3>
          <div className={classes.ConfernceWrap}>
            <div className={classes.ConfernceVideo}>
              {session.data.Video_Image && session.data.Video_Image.localFiles.length
                ? (<Img className={classes.videoImage} fixed={session.data.Video_Image.localFiles[0].childImageSharp.fixed} alt={alt} />)
                : (<img src={defaultVideo} alt={alt} className={classes.videoImage} />)}
              <a className={classes.videoBtn} href={session.data.Video} target='_blank' rel='noopener noreferrer'>
                <svg width='118' height='124' viewBox='0 0 118 124' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <ellipse cx='59' cy='62' rx='59' ry='62' fill='#D00000' />
                  <path d='M86 62L39.5 89.7128L39.5 34.2872L86 62Z' fill='white' />
                </svg>
              </a>
            </div>
            <div className={classes.ConfernceDetail}>
              <p className={classes.ConfernceSessionType}>{session.data.Session_Type}</p>
              <p className={classes.ConfernceSessionTitle}>{session.data.Talk_Title}</p>
              <p className={classes.ConfernceSpeakerName}>{session.data.Speakers[0].data.Speaker_First} {session.data.Speakers[0].data.Speaker_Last}</p>
              <p className={classes.ConfernceSpeakerCompany}>{session.data.Speakers[0].data.Speaker_Job_Title} <strong>{session.data.Speakers[0].data.Speaker_Company}</strong></p>
              {!open && session.data.Talk_Description && (
                <p className={classes.ConfernceDescription}>
                  {session.data.Talk_Description.length > 240 ? (
                    <>
                      {session.data.Talk_Description.substr(0, 240)}... <button className={classes.readMoreLink} onClick={handleOpen}>Read More</button>
                    </>
                  ) : session.data.Talk_Description}
                </p>
              )}
              {open &&
                <p className={classes.ConfernceDescription}>{session.data.Talk_Description} <button className={classes.readMoreLink} onClick={handleOpen}>Read Less</button></p>}
            </div>
          </div>
        </div>
      )
    }

    const PastSessions = ({ sessions }) => {
      // sort sessions which have videos
      sessions = sessions.filter((item) => item.data.Video && item.data.Video !== 'n/a')
      // sort sessions by date most recent
      sessions = _.orderBy(sessions, ['data.Agenda[0].data.Agenda_Session_Start_Time'], ['desc'])
      return (
        sessions.map((session, index) => (
          <PastSessionCard session={session} conference={session.data.Conference[0].data} key={index} />
        )
        )
      )
    }

    const SpeakerSessions = (
      <div>
        {upcomingSessions.length > 0 && (
          <>
            <h3 className={classes.SessionHeading}>Upcoming Sessions</h3>
            <UpcomingSessions sessions={upcomingSessions} />
          </>
        )}
        {pastSessions.length > 0 && (
          <>
            <h3 className={classes.SessionHeading}>Past Sessions</h3>
            <PastSessions sessions={pastSessions} />
          </>
        )}
      </div>
    )
    return SpeakerSessions
  } else {
    return (<></>)
  }
}

export default SpeakerSessions
