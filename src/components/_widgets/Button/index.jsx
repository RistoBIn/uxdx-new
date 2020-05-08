import React from 'react'
import MuiButton from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { cleanText } from 'src/_utils'
import { navigate } from 'gatsby'

import primaryStyles from './primaryStyles'
import outlineLightStyles from './outlineLightStyles'
import outlineDarkStyles from './outlineDarkStyles'
import textStyles from './textStyles'

const styles = {
  primary: {
    commonStyles: primaryStyles.commonStyles,
    mobileStyles: primaryStyles.mobileStyles,
    desktopStyles: primaryStyles.desktopStyles
  },
  outline_light: {
    commonStyles: outlineLightStyles.commonStyles,
    mobileStyles: outlineLightStyles.mobileStyles,
    desktopStyles: outlineLightStyles.desktopStyles
  },
  outline___dark: {
    commonStyles: outlineDarkStyles.commonStyles,
    mobileStyles: outlineDarkStyles.mobileStyles,
    desktopStyles: outlineDarkStyles.desktopStyles
  },
  text: {
    commonStyles: textStyles.commonStyles,
    mobileStyles: textStyles.mobileStyles,
    desktopStyles: textStyles.desktopStyles
  }
}

export default function Button ({ widget, style, className, text, size, href }) {
  // console.log(widget, href, text)
  const buttonText = widget ? cleanText(widget.text.value) : text
  const buttonStyle = widget ? widget.style.value[0].codename : style

  // button can either link to a page or to an external link
  let buttonLink, target
  if (widget) {
    if (widget.page.linked_items && widget.page.linked_items[0]) {
      buttonLink = widget.page.linked_items[0].elements.url_slug.value
    } else if (widget.url_link) {
      target = '_blank'
      buttonLink = widget.url_link.value
    } else {
      buttonLink = href
    }
  } else if (href) {
    buttonLink = href
  }
  // const buttonClass = className // TODO: should we set a class here?

  const buttonStyles = styles[buttonStyle]
  // console.log('BUTTON VALUES', buttonStyle, buttonStyles, buttonLink, size, buttonText, widget)
  if (buttonStyles) {
    // console.log(buttonText)
    const CustomButton = withStyles(theme => {
      return ({
        ...buttonStyles.commonStyles,
        [theme.breakpoints.down('sm')]: buttonStyles.mobileStyles,
        [theme.breakpoints.up('md')]: buttonStyles.desktopStyles
      })
    })(MuiButton)
    if (target) return <CustomButton href={buttonLink} size={size} target={target}>{buttonText}</CustomButton> // TODO: small isn't working - styles are overwriting small value
    return <CustomButton onClick={() => navigate(buttonLink)} size={size}>{buttonText}</CustomButton> // TODO: small isn't working - styles are overwriting small value
  } else {
    console.log('FAILED BUTTON STYLE', widget, style, className, text, size, href)
  }

  return <MuiButton href={buttonLink} size={size} target={target}>{buttonText}</MuiButton>
}
