import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import * as colors from 'src/_styles/colors'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import Column from '../_columns'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import { cleanText } from 'src/_utils'
import Overlays from './overlays'
import MobileOverlays from './mobileOverlays'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const Section = ({ data }) => {
  if (data && data.elements) {
    const sectionElements = data.elements
    const isFullWidth = sectionElements.full_width.value.length > 0
    const backgroundColorVal = _.get(sectionElements, 'backgroundcolor.value[0].name')
    const fontColorVal = _.get(sectionElements, 'fontcolor.value[0].name')
    const overlayTopBackgroundColor = _.get(sectionElements, 'overlaytopbackgroundcolor.value[0].name')
    const fontColor = fontColorVal ? colors[fontColorVal] : colors.mainText
    const overlayColor = overlayTopBackgroundColor ? colors[overlayTopBackgroundColor] : colors[backgroundColorVal]
    const backgroundColorRoot = isFullWidth ? colors[backgroundColorVal] : 'transparent'
    const backgroundColorContainer = !isFullWidth ? colors[backgroundColorVal] : 'transparent'

    // console.log(sectionElements, backgroundColorVal, fontColorVal, overlayTopBackgroundColor, fontColor, overlayColor, backgroundColorRoot, backgroundColorContainer)
    // if (!fontColor || !overlayColor || !backgroundColorRoot || !backgroundColorContainer) {
    //   console.log('WRONG TYPE OF COLOR', data)
    //   console.log('FontColor', fontColorVal)
    //   console.log('Background', backgroundColorVal)
    //   console.log('Overlay', overlayTopBackgroundColor)
    // }

    // const fontColor = colors.mainText
    // const backgroundColorRoot = colors.backgroundColor
    // const backgroundColorContainer = colors.backgroundColor
    // const overlayColor = colors.backgroundColor

    const bgImg = _.get(sectionElements, 'background_image.value[0].fluid')
    const backgroundUrl = _.get(sectionElements, 'background_image.value[0].url')
    // const backgroundMobileUrl = _.get(sectionElements, 'background_image___mobile.value[0].url', '')
    // const backgroundMobile = backgroundMobileUrl || backgroundUrl
    const backgroundMobile = backgroundUrl
    const OverlayName = _.get(sectionElements, 'overlay.value[0].codename', '')
    const classes = useStyles({ backgroundColorRoot, backgroundColorContainer, backgroundUrl, backgroundMobile, fontColor })

    const title = cleanText(_.get(sectionElements, 'title.value', ''))
    const subTitle = cleanText(_.get(sectionElements, 'sub_title.value', ''))
    const h1Title = title ? <Typography variant='h2' className={classes.title} dangerouslySetInnerHTML={{ __html: title }} /> : null
    const h2Title = subTitle ? <Typography variant='h3' className={classes.subTitle} dangerouslySetInnerHTML={{ __html: subTitle }} /> : null
    const fullWidth = _.get(sectionElements, 'full_width.value[0].codename', '')
    const fullWidthClass = fullWidth === 'full_width' ? classes.fullWidthContainer : ''
    const columnsList = _.get(sectionElements, 'columns.linked_items')
    const columns = columnsList.map(column => {
      return <Column key={column.id} data={column} fullWidth={fullWidth} font_color={fontColor} />
    })

    const marginValue = _.get(sectionElements, 'margins.value[0].codename', '')
    const marginClass = marginValue === 'reduced_top' ? classes.reduced_top : ''

    const headerValue = _.get(sectionElements, 'overlay.value[0].codename', '')
    const headerClass = headerValue === 'header1' ? classes.header : ''

    const minHeightValue = _.get(sectionElements, 'min_height.value[0].codename', '')
    const minHeightClass = minHeightValue === 'n20rem' ? classes.minHeight30 : ''

    const justifyValue = _.get(sectionElements, 'align.value[0].codename', '')
    const justifyClass = justifyValue === 'right' ? classes.justifyRight : ''

    let maxWidth = 'lg'
    if (sectionElements.full_width.value.length > 0) maxWidth = false

    const section = (
      <section className={`${classes.root} ${marginClass} ${headerClass} ${minHeightClass}`} font_color={fontColor} key={data.id}>
        <BackgroundImage
          Tag='section'
          fluid={bgImg}
          className={classes.background}
        />
        {useMediaQuery(theme => theme.breakpoints.up('md')) ? <Overlays overlay={OverlayName} color={colors[backgroundColorVal]} topColor={overlayColor} /> : <MobileOverlays overlay={OverlayName} color={colors[backgroundColorVal]} topColor={overlayColor} />}
        {h1Title}
        {h2Title}
        <Container maxWidth={maxWidth} className={`${classes.container} ${fullWidthClass}`}>
          {/* TODO - make spacign related to the section variable - spacing */}
          <Grid container spacing={3} className={`${classes.grid} ${justifyClass}`}>
            {columns}
          </Grid>
        </Container>
      </section>
    )

    return (section)
  } else return null
}

Section.propTypes = {
  data: PropTypes.object.isRequired
}

export default Section
