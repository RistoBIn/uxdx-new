import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const CardImageBottom = ({ title, subTitle, content, image, widgets }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.subtitle}>{subTitle}</Typography>
        <Typography className={classes.description}>{content}</Typography>
        <div>
          <img src={image.url} alt={image.description} className={classes.image} />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardImageBottom
