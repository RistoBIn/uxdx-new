import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('md')]: mobileStyles,
  [theme.breakpoints.up('lg')]: desktopStyles
}))

const Stats = (props) => {
  const classes = useStyles()

  if (props.ThemeStyle == 'vertical'){   
    return (
        <div className={classes.statInnerV}>
          <Typography className={classes.metricsV}>{props.widget.metric.value}</Typography>
          <span className={classes.statNameV}>{props.widget.item.value}</span>
        </div>
    )
  }
  else if (props.ThemeStyle == 'horizontal'){
    return(
      <div className={classes.statInnerH}>
        <Typography className={classes.metricsH}>{props.widget.metric.value}</Typography>
        <span className={classes.statNameH}>{props.widget.item.value}</span>
      </div>
    )
  }
  
  return null
  
}

export default Stats
