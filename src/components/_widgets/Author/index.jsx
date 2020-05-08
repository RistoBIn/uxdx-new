import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('md')]: mobileStyles,
  [theme.breakpoints.up('lg')]: desktopStyles
}))

const Author = ({ widget }) => {
  // console.log('widget', widget)
  const classes = useStyles()

  return (
    <div className={classes.AuthorWrapper}>
      <p className={classes.authorName}>{widget.name.value}</p>
      <p className={classes.authorProfile}>{widget.job_title.value}, <span className={classes.companyName}>{widget.company.value}</span></p>
    </div>
  )
}

export default Author
