import React from 'react'
import Link from '@material-ui/core/Link'
import { cleanText } from 'src/_utils'
import _ from 'lodash'

const StyledLink = (props) => {
  const { elements } = props
  const title = cleanText(_.get(elements, 'text.value', ''))
  const urlLink = cleanText(_.get(elements, 'url_link.value', '#'))
  return <Link {...props} underline='always' variant='body1' color='textPrimary' target='_blank' rel='noopener noreferrer' href={urlLink}>{title}</Link>
}

export default StyledLink
