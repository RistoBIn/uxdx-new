import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/_core/Layout'
import Body from '../components/_core/Body'
import Header from '../components/_core/Header'
import Footer from '../components/_core/Footer'
import MetaData from '../components/_core/MetaData'
import _ from 'lodash'

const Four0Four = ({ data }) => {
  const mainElements = _.get(data, 'allKontentItemApplicationPages.nodes[0].elements')
  const headerData = _.get(mainElements, 'header_menu.linked_items')
  const footerData = _.get(mainElements, 'footer_menu.linked_items')

  // set these for 404
  const metaTitle = 'Whoops - This doesn\'t exist'
  const metaDescription = 'UXDX - 404'

  // get the header details
  const headerSection = mainElements.sections.linked_items[0]
  headerSection.elements.columns.linked_items[0].elements.title.value = '<p>Whoops</p>'
  headerSection.elements.columns.linked_items[0].elements.sub_title.value = '<p>We can\'t find that page!</p>'
  headerSection.elements.backgroundcolor.value = [{ name: 'four0fourbackground' }]
  headerSection.elements.columns.linked_items[0].elements.widgets.linked_items = []
  if (headerSection.elements.columns.linked_items[0].elements.style.value[0].codename !== 'header') throw new Error('Missing header on speaker page structure - check Kontent (Speaker -Generic)')

  const sorrySection = (
    <section style={{ backgroundColor: '#d4dfe8', minHeight: '20rem', textAlign: 'center' }}>
      <div class='container'>
        {/* <h2 style={{ paddingTop: '3rem' }}>Maybe have a look at some of the links to find what you're looking for</h2> */}
        <img src='/img/internet_browsing.svg' width='600' style={{ paddingBottom: '3rem' }} />
      </div>
    </section>
  )
  // const subscribeSection = mainElements.sections.linked_items[mainElements.sections.linked_items.length - 1]
  // if (subscribeSection.elements.columns.linked_items[0].elements.widgets.linked_items[0].__typename !== 'kontent_item_widget_form') throw new Error('Missing subscribe on speaker page structure - check Kontent (Speaker -Generic)')

  const sections = [
    headerSection

  ]

  return (
    <Layout>
      <MetaData title={metaTitle} description={metaDescription} />
      <Header data={headerData} />
      <Body data={sections} />
      {sorrySection}
      <Footer data={footerData} />
    </Layout>
  )
}

Four0Four.propTypes = {
  data: PropTypes.object.isRequired
}

export default Four0Four

export const query = graphql`
  query four0four {
    allKontentItemApplicationPages(filter: {elements: {url_slug: {value: {eq: "home"}}}}) {
      nodes {
        elements {
          ...PageDataFragment
        }
      }
    }
  }
`
