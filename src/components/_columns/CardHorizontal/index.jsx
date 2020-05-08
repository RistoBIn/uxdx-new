import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import Widget from '../../_widgets'

import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const CardHorizontal = ({ title, subTitle, content, image, widgets }) => {
  const widgetComponents = widgets.map(widget => {
    return <Widget key={widget.id} data={widget} />
  })
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardInner}>
        <div className={classes.cardBody}>
          <div className={classes.cardLeft}>
            <img src={image.url} alt={image.description} className={classes.image} />
          </div>
          <div className={classes.cardRight}>
            <Typography className={classes.title}> {title}</Typography>
            <Typography className={classes.subtitle}> {subTitle}</Typography> 
            <Typography className={classes.description} component="div" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        {widgetComponents}
      </CardContent>
    </Card>
  )
}

export default CardHorizontal
