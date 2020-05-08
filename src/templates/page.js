import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/_core/Layout'
import Body from '../components/_core/Body'
import Header from '../components/_core/Header'
import Footer from '../components/_core/Footer'
import Countdown from '../components/_airtableData/Countdown'
import MetaData from '../components/_core/MetaData'
import _ from 'lodash'

const Page = ({ data }) => {
  const mainElements = _.get(data, 'allKontentItemApplicationPages.nodes[0].elements')
  const headerData = _.get(mainElements, 'header_menu.linked_items')
  const countdownData = _.get(mainElements, 'widget__alert.linked_items')
  const bodyData = _.get(mainElements, 'sections.linked_items')
  const footerData = _.get(mainElements, 'footer_menu.linked_items')
  const metaTitle = _.get(mainElements, 'meta_title.value')
  const metaDescription = _.get(mainElements, 'meta_description.value')
  const metaImage = _.get(mainElements, 'meta_image')

  return (
    <Layout>
      <MetaData title={metaTitle} description={metaDescription} image={metaImage} />
      <Countdown data={countdownData} />
      <Header data={headerData} />
      <Body data={bodyData} />
      <Footer data={footerData} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired
}

export default Page

export const query = graphql`
  query pageData($id: String!) {
    allKontentItemApplicationPages(filter: {id: {eq: $id }}) {
      nodes {
        elements {
          ...PageDataFragment
        }
      }
    }
  }
`
