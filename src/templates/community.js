import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from '../components/_core/Header'
import Body from '../components/_core/Body'
import Footer from '../components/_core/Footer'
import _ from 'lodash'
import moment from 'moment'

import '../_styles/post.css'

import Layout from '../components/_core/Layout'
import MetaData from '../components/_core/MetaData'

const Community = ({ data }) => {
  const pageElements = _.get(data, 'generic.nodes[0].elements')
  const headerData = _.get(pageElements, 'header_menu.linked_items')
  const footerData = _.get(pageElements, 'footer_menu.linked_items')
  const conferenceData = _.get(data, 'allAirtable.nodes[0].data')

  // Get the meta information
  const metaTitle = pageElements.meta_title.value + ' ' + conferenceData.Location + ' - ' + conferenceData.Year
  const metaDescription = pageElements.meta_description.value.replace('Community Generic', conferenceData.Location)
  // TODO: make this responsive everywhere it is used
  const headerImage = conferenceData.Conference_Header_Image.localFiles && conferenceData.Conference_Header_Image.localFiles[0] ? conferenceData.Conference_Header_Image.localFiles[0].childImageSharp.fluid.src : 'https://assets-us-01.kc-usercontent.com:443/dcc9fa52-512f-008a-e826-9b6aac7043ff/8d9049db-dc24-47bd-a014-edbab74f85ae/Conf-HeaderImg%20(1).jpg'

  // get the start time
  let subTitle = moment(conferenceData.Conference_Start_Date).format('dddd, Do MMM YYYY')
  const filteredSessions = conferenceData.Agenda.filter((agendaSessions) => {
    let match = false
    agendaSessions.data.Session.forEach((session) => {
      if (session.data.Session_Status === 'Published') match = true
    })
    return match
  })
  if (filteredSessions.length > 0) {
    const sortedSessions = _.orderBy(filteredSessions, data.Agenda_Session_Start_Time, 'asc')
    const firstSessionTime = sortedSessions[0].data.Agenda_Session_Start_Time
    const endSessionTime = sortedSessions.pop().data.Agenda_Session_End_Time
    subTitle += '<br>' + moment(firstSessionTime).format('h:mma') + ' - ' + moment(endSessionTime).format('h:mma')
  }

  // update header nav
  // add in the conference details
  headerData[0].elements.promoted_content.linked_items = [
    {
      __typename: 'kontent_item_application___content',
      id: '6c3b9e12-32c3-584f-95a6-ed3b5c406a8b',
      elements: {
        width_tablet: {
          value: [
            {
              codename: 'n3'
            }
          ]
        },
        width_mobile: {
          value: [
            {
              codename: 'n6'
            }
          ]
        },
        title: {
          value: pageElements.meta_title.value + ' ' + conferenceData.Location
        },
        sub_title: {
          value: moment(conferenceData.Conference_Start_Date).format('D MMM YYYY')
        },
        style: {
          value: [
            {
              codename: 'default'
            }
          ]
        },
        width_desktop: {
          value: [
            {
              codename: 'n3'
            }
          ]
        },
        content: {
          value: '<p><br></p>'
        }
      }
    }
  ]
  // replace the tickets button with the conference ticket button
  headerData[0].elements.menu_item.linked_items.forEach((menu) => {
    if (menu.elements.url_slug.value === 'europe/tickets') {
      menu.elements.menu_style.value[0].value = 'titoButton'
      menu.elements.menu_style.value[0].name = 'titoButton'
      menu.elements.conference = 'initiate/' + conferenceData.Conference_Id
    }
  })

  // ticketsButton.elements.releases = 'titoButton'

  // get the header details
  const headerSection = pageElements.sections.linked_items[0]
  headerSection.elements.columns.linked_items[0].elements.title.value = pageElements.meta_title.value + ' ' + conferenceData.Location
  headerSection.elements.columns.linked_items[0].elements.sub_title.value = '<p>' + subTitle + '</p>'
  headerSection.elements.background_image.value[0].url = headerImage
  if (headerSection.elements.columns.linked_items[0].elements.style.value[0].codename !== 'header') throw new Error('Missing header on Community page structure - check Kontent (Community -Generic)')

  const aboutSection = pageElements.sections.linked_items[1]
  const expectSection = pageElements.sections.linked_items[2]

  // get the speaker details
  const speakersSection = pageElements.sections.linked_items[3]
  speakersSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.conference.value = conferenceData.Conference_Id
  if (speakersSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.data_type.value[0].name !== 'Speakers') throw new Error('Missing speakers on Community page structure - check Kontent (Community -Generic)')

  // get the agenda details
  const agendaSection = pageElements.sections.linked_items[4]
  agendaSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.conference.value = conferenceData.Conference_Id
  if (agendaSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.data_type.value[0].name !== 'Sessions') throw new Error('Missing sessions on Community page structure - check Kontent (Community -Generic)')

  // get the tickets details
  let ticketsSection = null
  if (new Date().getTime() < new Date(conferenceData.Conference_Start_Date).getTime()) {
    ticketsSection = pageElements.sections.linked_items[5]
    const location = conferenceData.Location === 'Online' ? conferenceData.Location : 'in ' + conferenceData.Location
    ticketsSection.elements.title = 'Join us ' + location + ' and'
    ticketsSection.elements.sub_title = 'Rethink Product Delivery'
    ticketsSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.conference_id.value = 'initiate/' + conferenceData.Conference_Id
    if (ticketsSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].__typename !== 'kontent_item_widget___ticket_purchase') throw new Error('Missing ticketsWidget on Community page structure - check Kontent (Community -Generic)')
  }

  // get the venue details
  let venueSection
  if (conferenceData.Venues && conferenceData.Venues.length > 0) {
    venueSection = pageElements.sections.linked_items[6]
    venueSection.elements.columns.linked_items[0].elements.title.value = _.get(conferenceData, 'Venues[0].data.Venue_Name')
    venueSection.elements.columns.linked_items[0].elements.content.value = _.get(conferenceData, 'Venues[0].data.Venue_Description')
    venueSection.elements.columns.linked_items[0].elements.address = { value: _.get(conferenceData, 'Venues[0].data.Venue_Address') }
    venueSection.elements.columns.linked_items[0].elements.Venue_Map = { value: _.get(conferenceData, 'Venues[0].data.Venue_Map') }
    venueSection.elements.columns.linked_items[0].elements.Venue_Sponsor_Logo = { value: _.get(conferenceData, 'Venues[0].data.Venue_Sponsor_Logo') }
    // if a map widget exsits then update the lat and long
    if (venueSection.elements.columns.linked_items[0].elements.widgets.linked_items.length > 0) {
      venueSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.latitude = { value: _.get(conferenceData, 'Venues[0].data.Venue_Latitude') }
      venueSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.longitude = { value: _.get(conferenceData, 'Venues[0].data.Venue_Longitude') }
    }
  }
  // if (!venueSection) throw new Error('Missing venue on Community page structure - check Kontent (Community-Generic)')

  // get the partners details
  const partnersSection = pageElements.sections.linked_items[7]
  partnersSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.conference.value = conferenceData.Conference_Id
  if (partnersSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.data_type.value[0].name !== 'Partners') throw new Error('Missing partners on Community page structure - check Kontent (Community -Generic)')

  // get the subscribe details
  const subscribeSection = pageElements.sections.linked_items[8]
  if (subscribeSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].__typename !== 'kontent_item_widget___form') throw new Error('Missing subscribe on Community page structure - check Kontent (Community -Generic)')

  const sections = [
    headerSection,
    aboutSection,
    expectSection,
    speakersSection,
    agendaSection,
    ticketsSection,
    venueSection,
    partnersSection,
    subscribeSection
  ]

  return (
    <Layout>
      {/* TODO: Put the image back in <MetaData title={metaTitle} description={metaDescription} image={conferenceData.Speaker_Profile_Picture[0].thumbnails.small.url} /> */}
      <MetaData title={metaTitle} description={metaDescription} />
      {/* <Countdown data={countdownData} /> */}
      <Header data={headerData} />
      <Body data={sections} />
      <Footer data={footerData} />
    </Layout>
  )
}

Community.propTypes = {
  data: PropTypes.object.isRequired
}

export default Community

// TOOD: Make logos fixed width
export const postQuery = graphql`
  query($id: String!) {
    allAirtable(filter: {id: {eq: $id }, table: { eq: "Conference" }  }) {
      nodes {
        data {
          Conference_Id
          Location
          Year
          Conference_Start_Date
          Conference_End_Date
          Conference_Header_Image {
            localFiles {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920)  {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          Agenda {
            ...AgendaFragment
          }
          Venues {
            data {
              Venue_Name
              Venue_Description
              Venue_Address
              Venue_Latitude
              Venue_Longitude
              Venue_Map {
                raw {
                  url
                  type
                }
                localFiles {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1000)  {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              Venue_Sponsor_Logo {
                raw {
                  url
                  type
                }
                localFiles {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 600)  {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    generic: allKontentItemApplicationPages(filter: {elements: {url_slug: {value: {eq: "generic-community"}}}}) {
      nodes {
        elements {
          ...PageDataFragment
        }
      }
    }
  }
`
