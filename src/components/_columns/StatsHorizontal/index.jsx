import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import Widget from '../../_widgets'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('md')]: mobileStyles,
  [theme.breakpoints.up('lg')]: desktopStyles
}))

const StatsHorizontal = ({ title, subTitle, content, image, widgets }) => {
  const classes = useStyles()

  const widgetComponents = widgets.map((widget, index) => {
    return <Widget key={widget.id} data={widget} index={index} ThemeStyle='horizontal' />
  })

  // console.log('widgetComponents', widgetComponents.length)

  const NoWrap = widgetComponents.length <= 3 ? 'NoWrap' : ''

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardInner}>
        <div className={classes.cardBody}>
          <div className={`statsInner ${NoWrap}`}>
            {widgetComponents}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default StatsHorizontal
