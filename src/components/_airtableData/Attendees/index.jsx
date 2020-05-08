import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'

import filterData from '../filterData'
// import MobileView from './components/MobileView'
// import DesktopView from './components/DesktopView'

// import { commonStyles, desktopStyles, mobileStyles } from './styles'

// const useStyles = makeStyles(theme => ({
//   ...commonStyles,
//   [theme.breakpoints.down('sm')]: mobileStyles,
//   [theme.breakpoints.up('md')]: desktopStyles
// }))

const AttendeeCard = ({ width, conference, highlight }) => {
  // const attendeeData = useStaticQuery(graphql`
  //   query attendeeData {
  //     attendees: allAirtable(filter: { table: { eq: "Purchased Tickets" } }) {
  //       nodes {
  //         data {
  //           Ticket_Email {
  //             data {
  //               Job_Title
  //             }
  //           }
  //           Ticket_Full_Name {
  //             data {
  //               Person_First
  //               Person_Full_Name
  //               Person_Last
  //               Person_Twitter
  //               Linkedin_Profile
  //               Person_Profile_Picture {
  //                 id
  //                 url
  //                 thumbnails {
  //                   full {
  //                     height
  //                     url
  //                     width
  //                   }
  //                   large {
  //                     height
  //                     url
  //                     width
  //                   }
  //                   small {
  //                     height
  //                     url
  //                     width
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //           Ticket_Company {
  //             data {
  //               Company_Name
  //               Company_Logo {
  //                 id
  //                 url
  //                 thumbnails {
  //                   full {
  //                     height
  //                     url
  //                     width
  //                   }
  //                   large {
  //                     height
  //                     url
  //                     width
  //                   }
  //                   small {
  //                     height
  //                     url
  //                     width
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const filteredData = filterData(attendeeData.attendees.nodes, highlight, conference)

  // // const classes = useStyles()

  // const attendees = filteredData.map((item, index) => {
  //   if (isWidthUp('md', width)) {
  //     return true
  //   } else {
  //     return true
  //   }
  // })
  // return attendees
  return true
}

export default AttendeeCard
