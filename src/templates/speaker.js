import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from '../components/_core/Header'
import Body from '../components/_core/Body'
import Footer from '../components/_core/Footer'
import Countdown from '../components/_airtableData/Countdown'
import _ from 'lodash'

import '../_styles/post.css'

import Layout from '../components/_core/Layout'
import MetaData from '../components/_core/MetaData'

const Speaker = ({ data }) => {
  const pageElements = _.get(data, 'allKontentItemApplicationPages.nodes[0].elements')
  const headerData = _.get(pageElements, 'header_menu.linked_items')
  const footerData = _.get(pageElements, 'footer_menu.linked_items')
  const countdownData = _.get(pageElements, 'widget__alert.linked_items')
  const speakerData = _.get(data, 'allAirtable.nodes[0].data')

  // Get the meta information
  const speakerName = speakerData.Speaker_First + ' ' + speakerData.Speaker_Last
  const metaTitle = pageElements.meta_title.value + speakerName
  const metaDescription = pageElements.meta_description.value + speakerName
  // TODO: make this responsive everywhere it is used
  const headerImage = speakerData.Speaker_Header_Image && speakerData.Speaker_Header_Image[0] ? speakerData.Speaker_Header_Image[0].thumbnails.large.url : 'https://assets-us-01.kc-usercontent.com:443/dcc9fa52-512f-008a-e826-9b6aac7043ff/4a72b5fb-d63f-4978-80a6-01df067063f9/Home.jpg'

  // get the header details
  const headerSection = pageElements.sections.linked_items[0]
  headerSection.elements.columns.linked_items[0].elements.title.value = '<p>' + speakerName + '</p>'
  headerSection.elements.background_image.value[0].url = headerImage
  if (headerSection.elements.columns.linked_items[0].elements.style.value[0].codename !== 'header') throw new Error('Missing header on speaker page structure - check Kontent (Speaker -Generic)')

  // get the speakerDetails
  const speakerDetailsSection = pageElements.sections.linked_items[1]
  // if (!speakerData.Speaker_First) {
  //   console.log(speakerData)
  // }
  speakerDetailsSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements = speakerData
  speakerDetailsSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].id = speakerData.speaker_url_slug
  if (speakerDetailsSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].__typename !== 'kontent_item_widget___speaker_details') throw new Error('Missing speakerDetails on speaker page structure - check Kontent (Speaker -Generic)')

  // get the speakerSessions
  const speakerSessionsSection = pageElements.sections.linked_items[2]
  speakerSessionsSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.sessions = speakerData.Sessions

  // get the speakerArticles
  const speakerArticlesSection = pageElements.sections.linked_items[3]
  speakerArticlesSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.speaker = data.allAirtable.nodes[0].data.Ghost_Id
  if (speakerArticlesSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].elements.data_type.value[0].name !== 'Articles') throw new Error('Missing speakerArticles on speaker page structure - check Kontent (Speaker -Generic)')

  const subscribeSection = pageElements.sections.linked_items[4]
  if (subscribeSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].__typename !== 'kontent_item_widget___form') throw new Error('Missing subscribe on speaker page structure - check Kontent (Speaker -Generic)')

  const sections = [
    headerSection,
    speakerDetailsSection,
    speakerSessionsSection,
    speakerArticlesSection,
    // TODO: similar topics
    subscribeSection
  ]

  return (
    <Layout>
      <MetaData title={metaTitle} description={metaDescription} image={headerImage} />
      <Countdown data={countdownData} />
      <Header data={headerData} />
      <Body data={sections} />
      <Footer data={footerData} />
    </Layout>
  )
}

Speaker.propTypes = {
  data: PropTypes.object.isRequired
}

export default Speaker

export const postQuery = graphql`
  query($id: String!) {
    allAirtable(filter: {table: { in: "Speakers" },  id: {eq: $id }  }) {
      nodes {
        ...SpeakerFragment
      }
    }
    allKontentItemApplicationPages(filter: {elements: {url_slug: {value: {eq: "generic-speaker"}}}}) {
      nodes {
        elements {
          ...PageDataFragment
        }
      }
    }
  }
`
