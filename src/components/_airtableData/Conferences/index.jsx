import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql, Link } from 'gatsby'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import BackgroundImage from 'gatsby-background-image'
import filterData from '../filterData'
import moment from 'moment'
import _ from 'lodash'
import Interval from 'react-interval-rerender'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const ConferenceCard = ({ conference, highlight }) => {
  const conferenceData = useStaticQuery(graphql`
    query conferenceData {
      conferences: allAirtable(filter: { table: { eq: "Conference" }, data: {Conference_Status: {eq: "Published"}, Type: {eq: "Community"}} }) {
        nodes {
          id
          data {
            Conference_Id
            Conference_Header_Image {
              localFiles {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920)  {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            Conference_Start_Date
            Location
            Year
            Continent
            Conference_Latitude
            Conference_Longitude
          }
        }
      }
    }
  `)

  const filteredData = filterData(conferenceData.conferences.nodes, highlight, conference)

  // get default headerimage
  const dublinConf = conferenceData.conferences.nodes.filter((conf) => {
    return conf.data.Location === 'Dublin'
  })[0]
  const defaultHeaderImage = dublinConf.data.Conference_Header_Image.localFiles[0].childImageSharp.fluid
  const classes = useStyles()

  // get all the events of year
  const Events = ({ events }) => {
    const allEvents = events.map((event) => {
      let imageData
      if (event.data.Conference_Header_Image && event.data.Conference_Header_Image.localFiles && event.data.Conference_Header_Image.localFiles[0]) {
        imageData = event.data.Conference_Header_Image.localFiles[0].childImageSharp.fluid
      } else {
        imageData = defaultHeaderImage
      }
      const url = '/' + event.data.Conference_Id.replace(/-/g, '/')
      return (
        <Link className={classes.communityLink} to={url} key={event.id}>
          <BackgroundImage
            Tag='section'
            className={classes.Event}
            fluid={imageData}
          >
            <p className={classes.Location}>{event.data.Location}</p>
            <p className={classes.Date}>{moment(event.data.Conference_Start_Date).format('Do MMMM YYYY')}</p>
            <div className={classes.DiscoverLink}>
              Discover More
            </div>
          </BackgroundImage>
        </Link>
      )
    })
    return allEvents
  }
  // get all the conferences by yearly
  const ConferenceYearly = ({ events }) => {
    // sorted by year
    const sortedEventsByYear = _(events)
      .groupBy(x => x.data.Year)
      .map((value, key) => ({ year: key, events: value }))
      .value()
    // get events by desc dates
    const allEvents = _.orderBy(sortedEventsByYear, ['year'], ['desc'])
    const conferences = allEvents.map((data, index) => {
      return (
        <ExpansionPanel className={classes.Accordian} key={index} defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id={'panel1a-header-' + index}
          >
            <h4 className={classes.heading}>{data.year}</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.EventsWrapper}>
              <Events events={data.events} />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })
    return conferences
  }
  // get all the conferences
  // const Conference = ({ events }) => {
  //   // sort by continent
  //   const sortedEventsByContinent = _(events)
  //     .groupBy(x => x.data.Continent)
  //     .map((value, key) => ({ continent: key, events: value }))
  //     .value()
  //   // get each event
  //   const conferences = sortedEventsByContinent.map((data, index) => {
  //     return (
  //       <div key={index}>
  //         <h2>{data.continent}</h2>
  //         <ConferenceYearly events={data.events} />
  //       </div>
  //     )
  //   })

  //   return (
  //     <div>
  //       {conferences}
  //     </div>
  //   )
  // }
  const communities = () => {
    // get filters by dates
    const currentDate = new Date()
    const upcomingFilters = filteredData.filter((item) => new Date(item.data.Conference_Start_Date) > currentDate)
    const pastFilters = filteredData.filter((item) => new Date(item.data.Conference_Start_Date) < currentDate)
    // get past events by desc dates
    const upcomingEvents = _.orderBy(upcomingFilters, ['data.Conference_Start_Date'], ['asc'])
    const pastEvents = _.orderBy(pastFilters, ['data.Conference_Start_Date'], ['desc'])

    return (
      <>
        {upcomingEvents.length > 0 &&
          <div>
            <h2>Upcoming Events</h2>
            <ConferenceYearly events={upcomingEvents} />
          </div>}
        {pastEvents.length > 0 &&
          <div>
            <h2>Past Events</h2>
            <ConferenceYearly events={pastEvents} />
          </div>}
      </>
    )
  }

  return (
    <div>
      <Interval delay={60000}>
        {() => {
          const communityCards = communities()
          return communityCards
        }}
      </Interval>
    </div>
  )
}

export default ConferenceCard
