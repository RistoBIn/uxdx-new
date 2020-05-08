import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import Widget from '../../_widgets'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const Default = (props) => {
  const font_color = props.font_color
  const classes = useStyles({ font_color })
  const h1Title = props.title ? <Typography gutterBottom variant='h4' component='h2' className={classes.title} dangerouslySetInnerHTML={{ __html: props.title }} /> : null
  const h2Title = props.subTitle ? <Typography gutterBottom variant='h5' component='h3' className={classes.subTitle} dangerouslySetInnerHTML={{ __html: props.subTitle }} /> : null
  const contentParagraph = props.content ? <Typography variant='body2' className={classes.body} component='div' dangerouslySetInnerHTML={{ __html: props.content }} /> : null
  const imageSection = props.image ? <img className={classes.media} src={props.image.url} alt={props.image.description} /> : null
  const maxWidth = false

  const widgetComponents = props.widgets.map(widget => {
    return <Widget key={widget.id} data={widget} />
  })

  return (
    <Container maxWidth={maxWidth} className={classes.container}>
      {h1Title}
      {h2Title}
      {contentParagraph}
      {imageSection}
      {widgetComponents}
    </Container>
  )
}

export default Default
