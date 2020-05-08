import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import Widget from '../../_widgets'
import Img from 'gatsby-image'

import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('lg')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const CardSVG = ({ title, subTitle, content, image, widgets }) => {
  const widgetComponents = widgets.map(widget => {
    return <Widget key={widget.id} data={widget} />
  })
  const classes = useStyles()

  let imageNode
  if (image.fixed && image.fixed.height) {
    imageNode = (<Img fixed={image.fixed} alt={image.description} className={classes.image} />)
  } else if (image.url) {
    imageNode = (<img src={image.url} alt={image.description} className={classes.image} />)
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardInner}>
        <div className={classes.cardBody}>
          <div>
            {imageNode}
          </div>
          <div>
            <Typography className={classes.title}> {title}</Typography>
            <Typography className={classes.subtitle}> {subTitle}</Typography>
            <Typography className={classes.description}>{content}</Typography>
          </div>
        </div>
        {widgetComponents}
      </CardContent>
    </Card>
  )
}

export default CardSVG
