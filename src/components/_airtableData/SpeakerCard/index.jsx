import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Card, CardContent, Typography } from '@material-ui/core'
import Img from 'gatsby-image'

import filterData from '../filterData'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const SpeakerCard = ({ conference, highlight }) => {
  const speakersData = useStaticQuery(graphql`
    query speakersData {
      speakers: allAirtable(filter: { table: { eq: "Speakers" }, data: {Speaker_Status: {eq: "Published"}} }) {
        nodes {
          ...SpeakerFragment
        }
      }
    }
  `)

  // if they have selected conference we actually need to filter on the session_status first
  let filteredSpeakers
  if (conference) {
    // find the speakers who have a confirmed conference based on session
    filteredSpeakers = speakersData.speakers.nodes.filter(speaker => {
      console.log(speaker.data)
      const confSessions = speaker.data.Sessions.filter(session => {
        if (['Published', 'Confirmed'].indexOf(session.data.Session_Status) !== -1) {
          let match = false
          if (session.data.Agenda) {
            session.data.Agenda.forEach((agenda) => {
              if (agenda.data.Conference[0].data.Conference_Id === conference) match = true
            })
          }
          return match
        }
      })
      return confSessions.length > 0
    })
  }

  const speakersList = filteredSpeakers || speakersData.speakers.nodes
  const filteredData = filterData(speakersList, highlight, conference)

  const classes = useStyles()

  const speakers = filteredData.map((item, index) => {
    const CustomCardContent = withStyles(theme => ({
      root: {
        '&:last-child': {
          paddingBottom: '2rem'
        }
      }
    }))(CardContent)

    const name = item.data.Speaker_First + ' ' + item.data.Speaker_Last
    const speakerLink = '/profile/' + item.data.speaker_url_slug

    const profilePic = item.data.Speaker_Profile_Picture && item.data.Speaker_Profile_Picture.localFiles && item.data.Speaker_Profile_Picture.localFiles[0] && item.data.Speaker_Profile_Picture.localFiles[0].childImageSharp ? <Img className={classes.image} fluid={item.data.Speaker_Profile_Picture.localFiles[0].childImageSharp.fluid} alt={name} /> : null
    const companyLogo = item.data.Speaker_Company_Logo ? <img src={item.data.Speaker_Company_Logo[0].url} alt={item.data.Speaker_Company} className={classes.logo} /> : null
    // console.log(item.data)

    const SpeakerCard = (
      <Link to={speakerLink} key={item.id}>
        <Card className={classes.container}>
          <div className={classes.avatar}>
            {profilePic}
          </div>
          <div className={classes.content}>
            <CustomCardContent className={classes.content_inner}>
              <Typography className={classes.name}>{name}</Typography>
              <Typography className={classes.role}>{item.data.Speaker_Job_Title}</Typography>
            </CustomCardContent>
            <div className={classes.cardFooter}>
              {companyLogo}
              {/* <a href="/speaker/{speaker_url_slug}" className={classes.viewMoreLink}>View More</a> */}
              <span className={classes.viewMoreLink}>View More</span>
            </div>
          </div>
        </Card>
      </Link>
    )
    return SpeakerCard
  })
  return (
    <div className={classes.speakerWrapper}>
      {speakers}
    </div>
  )
}

export default SpeakerCard
