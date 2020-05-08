import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

export default function ProjectToProduct ({ widget, index }) {
  const classes = useStyles()

  const widgetClass = index % 2 === 0 ? classes.cardLeft : classes.cardRight

  return (
    <div className={widgetClass}>
      <div>
        <img src={widget.image.value[0].url} alt={widget.image.value[0].description} className={classes.image} />
      </div>
      <Typography className={classes.description}>{widget.content.value}</Typography>
      <Typography className={classes.subtitle}>{widget.title.value}</Typography>
    </div>
  )
}
