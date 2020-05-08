import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { NavContex } from 'src/_utils/contex'
import { HeadFont, BodyFont } from 'src/_styles/global'

const defaults = {
  primaryFont: HeadFont,
  secondaryFont: BodyFont
}

const styles = theme => ({
  '@global': {
    html: {
      fontSize: 16,
      [theme.breakpoints.up('md')]: {
        fontSize: 20
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 24
      }
    }
  }

})

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      BodyFont,
      'sans-serif'

    ].join(','),
    h1: {
      fontSize: '2.2rem',
      fontFamily: defaults.primaryFont,
      letterSpacing: '1px'
    },
    h2: {
      fontSize: '2rem',
      fontFamily: defaults.primaryFont,
      fontWeight: 'bold',
      letterSpacing: '0.5px'
    },
    h3: {
      fontSize: '1.8rem',
      fontFamily: defaults.secondaryFont
    },
    body1: {
      fontSize: '1rem',
      fontFamily: defaults.secondaryFont
    },
    body2: {
      fontFamily: defaults.secondaryFont,
      fontSize: '0.8rem'
    },
    button: {
      fontFamily: defaults.secondaryFont,
      fontSize: '0.8rem'
    }
  }
})

const Layout = ({ children }) => {
  const [mobileNavOpen, setmobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setmobileNavOpen(!mobileNavOpen)
  }

  useEffect(() => {
    if (mobileNavOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.scroll = 'no'
    } else {
      // document.documentElement.style.overflow = 'auto'
      document.body.scroll = 'yes'
    }
  }, [mobileNavOpen])

  return (
    <NavContex.Provider value={{ mobileNavOpen, toggleMobileNav }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NavContex.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired
}

export default withStyles(styles)(Layout)
