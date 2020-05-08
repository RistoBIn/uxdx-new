import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import Widget from '../../_widgets'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const ProjectToProduct = ({ title, subTitle, content, image, widgets }) => {
  const classes = useStyles()

  const widgetComponents = widgets.map((widget, index) => {
    return <Widget key={widget.id} data={widget} index={index}/>
  })
  
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardInner}>
        <Typography className={classes.title}>{title}</Typography>
        <div className={classes.cardBody}>
          {widgetComponents}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectToProduct
