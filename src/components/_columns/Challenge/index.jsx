import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MobileView from './components/MobileView'
import DesktopView from './components/DesktopView'

import _ from 'lodash'
import { cleanText } from 'src/_utils'

// TODO: MOVE TO DEFAULT STYLES
const Title = ({ firstPart, secondPart }) => (
  <>
    <span style={{ color: '#1CBBFF' }}>{firstPart}</span>{secondPart}
  </>
)

const ProductDevelopment = ({ title, subTitle, content, image, widgets }) => {
  const CardStyle = useMediaQuery(theme => theme.breakpoints.up('md')) ? DesktopView : MobileView
  // const classes = useStyles()
  const cardHeader = widgets.filter(widget => widget.internal.type === 'kontent_item_widget___card_header', [])[0]
  const cardButton = widgets.filter(widget => widget.internal.type === 'kontent_item_widget___button', [])[0]
  const titleOne = cleanText(_.get(cardHeader.elements, 'title___1.value', ''))
  const titleTwo = cleanText(_.get(cardHeader.elements, 'title___2.value', ''))
  return (
    <CardStyle
      title={<Title firstPart={titleOne} secondPart={titleTwo} />}
      number={title}
      primaryDescription={subTitle}
      secondaryDescription={content}
      otherComponents={cardButton}
    />
  )
}

export default ProductDevelopment
