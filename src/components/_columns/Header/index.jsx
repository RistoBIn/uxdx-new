import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import Widget from '../../_widgets'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

export default function HeroSection (props) {
  const classes = useStyles(props)

  const widgetComponents = props.widgets.map(widget => {
    return <Widget key={widget.id} data={widget} />
  })

  return (
    <Container className={classes.infoContainer}>
      <Typography variant='h1' className={classes.title}>
        {props.title}
      </Typography>
      <Typography variant='h3' className={classes.subtitle} gutterBottom dangerouslySetInnerHTML={{ __html: props.subTitle }} />
      {widgetComponents}
    </Container>
  )
}
