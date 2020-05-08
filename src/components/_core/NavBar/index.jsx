import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import NavBarMobileView from './components/NavBarMobileView'
import NavBarDesktopView from './components/NavBarDesktopView'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const NavBar = ({ ...restProps }) => {
  const classes = useStyles()

  const commonProps = {
    classes,
    ...restProps
  }


  const matches = useMediaQuery(theme => theme.breakpoints.up('md'))

  if (matches) return <NavBarDesktopView {...commonProps} />

  return <NavBarMobileView {...commonProps} />
}

export default NavBar
