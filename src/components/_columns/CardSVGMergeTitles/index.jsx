import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import Widget from '../../_widgets'

import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('lg')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const CardSVGMergeTitles = ({ title, subTitle, content, image, widgets }) => {
  const widgetComponents = widgets.map(widget => {
    return <Widget key={widget.id} data={widget} />
  })
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardInner}>
        <div className={classes.cardBody}>
          <div>
            <img src={image.url} alt={image.description} className={classes.image} />
          </div>
          <div>
            <div className={classes.heading}>
              <p className={classes.title}>
                {title}<span className={classes.subtitle}>{subTitle}</span>
              </p>
            </div>
            <Typography className={classes.description}>{content}</Typography>
          </div>
        </div>
        {widgetComponents}
      </CardContent>
    </Card>
  )
}

export default CardSVGMergeTitles
