import React from 'react'
import Navbar from 'src/components/_core/NavBar'
import _ from 'lodash'

const Header = ({ data }) => {
  const headerContent = data[0].elements
  const promotedContentElememnt = _.get(headerContent, 'promoted_content.linked_items[0].elements', {
    title: '',
    sub_title: ''
  })

  const promotedContentData = {
    title: promotedContentElememnt.title,
    subTitle: promotedContentElememnt.sub_title
  }

  const menuItems = _.get(headerContent, 'menu_item.linked_items', []).map(item => ({
    title: item.elements.menu_title.value,
    url: item.elements.url_slug.value,
    style: _.get(item, 'elements.menu_style.value[0].name', ''),
    conference: _.get(item, 'elements.conference', ''),
    releases: _.get(item, 'elements.releases', '')
  }))

  return (
    <Navbar menuItems={menuItems} promotedContentData={promotedContentData} />
  )
}

export default Header
