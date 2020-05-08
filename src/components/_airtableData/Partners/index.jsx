import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import filterData from '../filterData'
// import MobileView from './components/MobileView'
// import DesktopView from './components/DesktopView'

// import { commonStyles, desktopStyles, mobileStyles } from './styles'

// const useStyles = makeStyles(theme => ({
//   ...commonStyles,
//   [theme.breakpoints.down('sm')]: mobileStyles,
//   [theme.breakpoints.up('md')]: desktopStyles
// }))

const PartnerCard = ({ conference, highlight }) => {
  const partnerData = useStaticQuery(graphql`
    query partnerData {
      partners: allAirtable(filter: { table: { eq: "Partners" } }) {
        nodes {
          id
          data {
            Partner_Name,
            Level
            Partner_Url
            Partner_Description
            Partner_Twitter
            Partner_Linkedin
            Partner_Priority
            partner_url_slug
            Partner_Logo {
              url,
              thumbnails {
                full {
                  url,
                  width,
                  height
                },
                large {
                  url,
                  width,
                  height
                },
                small {
                  url,
                  width,
                  height
                }
              }
            }
            Highlight {
              data {
                Highlight_Name
              }
            }
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

  const filteredData = filterData(partnerData.partners.nodes, highlight, conference)

  // const classes = useStyles()
  const matches = useMediaQuery(theme => theme.breakpoints.up('md'))

  const partners = filteredData.map((item, index) => {
    if (matches) {
      return true
    } else {
      return true
    }
  })
  return partners
}

export default PartnerCard
