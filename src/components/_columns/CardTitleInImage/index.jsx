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

const CardTitleInImage = ({ title, subTitle, data, content, image, widgets }) => {
  const imageData = image.url
  const classes = useStyles({ imageData })

  const widgetComponents = widgets.map((widget, index) => {
    return <Widget key={widget.id} data={widget} index={index} />
  })

  const hasBackground = !!data.backgroundcolor.value.length

  const cardNobg = !hasBackground ? classes.cardNobg : ''

  const backgroundColor = hasBackground && data.backgroundcolor.value[0].name === 'tertiaryBackground' ? 'rgba(184, 144, 255, 0.07)'
    : hasBackground && data.backgroundcolor.value[0].name === 'secondaryBackground' ? 'rgba(28, 187, 255, 0.07)' : 'transparent'

  return (
    <Card className={` ${cardNobg} ${classes.card}`} style={{ backgroundColor: backgroundColor }}>
      <CardContent className={classes.cardInner}>
        <div className={classes.cardHeader}>
          <Typography className={classes.title}>{title}</Typography>
        </div>

        <Typography className={classes.subtitle}>{subTitle}</Typography>
        <div className={classes.content} component='div' dangerouslySetInnerHTML={{ __html: content }} />
        <div className={classes.cardBody}>
          {widgetComponents}
        </div>
      </CardContent>
    </Card>
  )
}

export default CardTitleInImage
