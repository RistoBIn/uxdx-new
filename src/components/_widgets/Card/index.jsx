import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import { Typography } from '@material-ui/core'
import Img from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

export default function Card ({ widget, horizontalView }) {
  const BgColor = widget.background_color.value
  const classes = useStyles({ BgColor })

  if (widget.style && widget.style.value.length && widget.style.value[0].codename == 'horizontal') {
    horizontalView()
  }

  const isHorizontal = !!(widget.style && widget.style.value.length && widget.style.value[0].codename == 'horizontal')

  // get the image type
  const image = widget.image.value[0]
  let imageNode
  if (image) {
    // if it is svg then use the url
    if (image.fixed && image.fixed.height) {
      imageNode = (<Img fixed={image.fixed} alt={image.description} className={classes.image} />)
    } else if (image.url) {
      imageNode = (<img src={image.url} alt={image.description} className={classes.image} />)
    }
  }

  if (isHorizontal) {
    return (
      <div className={`${classes.cardWidget} tabstyle`}>
        <div className='desc'>
          <Typography className={`${classes.title} title`}>{widget.title.value}</Typography>
          <Typography className={classes.subtitle}>{widget.sub_title.value}</Typography>
          <Typography className={`${classes.description}`} component='div' dangerouslySetInnerHTML={{ __html: widget.content.value }} />
        </div>
        {imageNode && (
          <div className='imageWrapper'>
            {imageNode}
          </div>
        )}
      </div>
    )
  }
  return (
    <div className={`${classes.cardWidget}`}>
      <Typography className={`${classes.title} `}>{widget.title.value}</Typography>
      <Typography className={classes.subtitle}>{widget.sub_title.value}</Typography>
      <Typography className={`${classes.description}`} component='div' dangerouslySetInnerHTML={{ __html: widget.content.value }} />
      {imageNode && (
        <div className='imageWrapper'>
          {imageNode}
        </div>
      )}
    </div>
  )
}
