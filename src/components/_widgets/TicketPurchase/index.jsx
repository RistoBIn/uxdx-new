import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('md')]: mobileStyles,
  [theme.breakpoints.up('lg')]: desktopStyles
}))

const TicketPurchase = ({ widget }) => {
  // console.log('widget', widget)
  const classes = useStyles()

  const releases = widget.releases.value

  return (
    <div className={classes.wrapper}>
      <tito-widget event={widget.conference_id.value} releases={releases} className={classes.TitoWidget} />
    </div>
  )
}

export default TicketPurchase
