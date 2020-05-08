import { white, secondaryDark, primary, secondary } from 'src/_styles/colors'

export const commonStyles = {
  scrolled: {
    backgroundColor: secondaryDark,
    top: '0 !important',
    position: 'fixed !important',
    paddingTop: '0 !important',
    transition: 'background-color 300ms linear, padding 300ms linear'
  },
  hidden: {
    display: 'none'
  }
}

export const mobileStyles = {
  root: {
    left: 0,
    right: 0,
    zIndex: 9,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '1rem',
    position: 'absolute',
    transition: 'padding 300ms linear, background-color 300ms linear'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentScrolled: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.3rem 0px'
  },
  logo: {
    height: '45px',
    width: '45px'
  },
  logoScrolled: {
    height: '36px',
    width: '36px'
  },
  divider: {
    marginTop: '8.9rem',
    width: '70%'
  },
  menuButton: {
    color: white
  },
  openedContainer: {
    top: 0,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0, 115, 180, 0.8)', // TODO: variable
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    overflow: 'auto',
    '& ul': {
      display: 'flex',
      margin: '0 auto',
      padding: 0,
      paddingTop: '6rem',
      flexDirection: 'column',
      // alignItems: 'center',
      listStyle: 'none',
      width: '60%',
      alignItems: 'flex-start',
      '& li': {
        marginTop: '2.5rem',
        '&:first-child': {
          marginTop: '0rem'
        },
        '& a': {
          textDecoration: 'none',
          color: white,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          '&:hover,:active,:focus': {
            borderBottom: '3px solid white',
            padding: '0 0 2px',
            textDecoration: 'none'
          }
        }
      }
    }
  },
  closeIcon: {
    top: '1.5rem',
    position: 'absolute',
    right: '1rem'
  },
  promotedContent: {
    borderTop: '1px solid #fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    margin: '2rem auto',
    paddingTop: '2rem',
    width: '80%',
    alignItems: 'flex-start',
    paddingLeft: '10%'
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: white,
    letterSpacing: '0.3px',
    paddingBottom: '5px'
  },
  description: {
    fontSize: '1.1rem',
    color: white
  },
  menuItemButton: {
    position: 'absolute',
    right: '4.5rem',
    '& a': {
      color: '#fff',
      background: '#F69400',
      fontSize: '15px',
      fontWeight: 'bold'
    },
    '& button': {
      color: '#fff',
      background: '#F69400',
      fontSize: '15px',
      fontWeight: 'bold',
      lineHeight: '0.5rem',
      margin: 'auto'
    }
  },
  button: {
    marginLeft: '5rem',
    padding: '0.6rem 1rem !important',
    minWidth: 'unset !important',
    borderRadius: '5px !important'
  }
}

export const desktopStyles = {
  root: {
    left: 0,
    right: 0,
    zIndex: 9,
    // top: '2rem',
    paddingLeft: '1rem',
    paddingRight: '2rem',
    paddingTop: '2rem',
    position: 'absolute',
    transition: 'padding 300ms linear, background-color 300ms linear'
  },
  leftMenu: {
    display: 'flex',
    alignItems: 'center'
  },
  promotedContent: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.1rem',
    marginLeft: '1.3rem',
    color: white
  },
  scrolledPromotedContent: {
    fontSize: '0.7rem'
  },
  promotedContentTitle: {
    fontWeight: 'bold'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoScrolled: {
    display: 'flex',
    width: '45px',
    height: '69px'
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    marginRight: '1rem',
    marginTop: '0px',
    marginBottom: '0px'

  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0rem',
    '& a': {
      fontSize: '20px'
    }
  },
  menuItemButton: {
    display: 'flex',
    padding: '0rem',
    alignItems: 'center',
    marginLeft: '1rem',
    '& button': {
      padding: '0.5rem 1rem',
      fontSize: '25px',
      width: 'auto',
      minWidth: 'auto',
      borderRadius: '5px',
      marginBottom: '0rem',
      marginTop: '0rem'
    },
    '& tito-button': {
      padding: '15px 23px',
      fontSize: '25px',
      width: 'auto',
      minWidth: 'auto',
      borderRadius: '5px',
      '& button': {
        color: '#FFF',
        width: 'auto',
        border: 'none',
        padding: '15px 23px',
        fontSize: '0.9rem',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
        fontWeight: 'bold',
        lineHeight: '1rem',
        textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        textTransform: 'uppercase',
        backgroundColor: primary,
        '&:hover': {
          backgroundColor: secondary
        }
      }
    }
  },
  titoButton: {
    display: 'flex',
    padding: '0.5rem 0rem',
    alignItems: 'center',
    marginLeft: '1rem',
    '& button': {
      padding: '15px 23px',
      fontSize: '25px',
      width: 'auto',
      minWidth: 'auto',
      borderRadius: '5px'
    }
  },
  menuLink: {
    padding: '0.4rem 0.8rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: white,
    '&:hover': {
      borderRadius: '5px !important',
      backgroundColor: '#0073B4',
      textDecoration: 'none',
      "& div[name='menuContent']": {
        display: 'block'
      }
    }
  },
  menuContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#0073B4',
    minWidth: '160px',
    textAlign: 'left',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    left: '0px',
    top: '43px',
    zIndex: 1,
    '& a': {
      color: white,
      '&:hover': {
        fontWeight: 'bold'
      }
    }
  },
  menuChildLink: {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block'
  },
  button: {
    padding: '0.6rem 1rem !important',
    minWidth: 'unset !important',
    borderRadius: '5px !important',
    fontSize: '0.8rem !important'
  }
}
