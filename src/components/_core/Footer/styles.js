export const commonStyles = {
  root: {
    backgroundColor: '#003464',
    position: 'relative',
    color: 'white'
  },
  menu: {
    listStyle: 'none',
    color: '#FFF',
    padding: '0'
  },
  menuContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  link: {
    textDecoration: 'none',
    color: '#FFF',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  logo: {
    position: 'relative'
  },
  text: {
    color: '#FFF'
  },
  noWrap: {
    '& li': {
      whiteSpace: 'nowrap'
    }
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  legals: {
    paddingTop: '1rem',
    color: '#ccc',
    margin: 'auto',
    '& ul': {
      listStyle: 'none'
    }
  }
}

export const mobileStyles = {
  root: {
    backgroundColor: '#003464'
  },
  logo: {
    maxWidth: '65px',
    marginTop: '-35px',
    marginLeft: '16px'
  },
  copyright: {
    display: 'none'
  },
  menu: {
    margin: '15px 10px'
  },
  menuContainer: {
    marginLeft: '0px',
    marginTop: '2rem',
    justifyContent: 'space-around',
    flexDirection: 'column',
    '& p': {
      margin: '0'
    }
  },
  menuHeader: {
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '21px',
    letterSpacing: '0.25px',
    '& p': {
      lineHeight: '1.4'
    }
  },
  menuItem: {
    fontWeight: '400',
    letterSpacing: '0.25px',
    marginBottom: '10px',
    fontSize: '16px',
    textDecoration: 'underline'
  },
  text: {
    marginBottom: '20px',
    marginLeft: '10px',
    fontSize: '12px',
    letterSpacing: '0.25px',
    color: '#FFF'
  },
  socialIcons: {
    position: 'absolute',
    right: '2rem',
    top: '-2.5rem',
    margin: 'auto',
    width: '11rem',
    '& img': {
      width: '30px'
    }
  }
}

export const desktopStyles = {
  root: {
    minHeight: '325px'
  },
  logoContainer: {},
  logo: {
    maxWidth: '150px',
    marginTop: '-55px'
  },
  copyright: {
    color: '#EEEEEE',
    fontSize: '12px',
    lineHeight: '23px',
    letterSpacing: '0.25px',
    marginTop: '150px'
  },
  menuContainer: {
    marginTop: '50px',
    justifyContent: 'flex-end'
  },
  menu: {
    margin: '1rem 0rem 2rem 4rem'
  },
  menuHeader: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: '1rem',
    marginBottom: '20px',
    letterSpacing: '0.25px'
  },
  menuItem: {
    fontWeight: '300',
    letterSpacing: '0.25px',
    marginBottom: '10px',
    lineHeight: '1rem'
  },
  text: {
    display: 'none'
  },
  link: {
    fontSize: '18px'
  },
  socialIcons: {
    width: '8.5rem',
    marginTop: '-2.5rem',
    marginLeft: 'auto'
  },
  legals: {
    color: '#ccc',
    margin: 'auto',
    fontSize: '0.6rem',
    '& ul': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginLeft: '-1px',
      listStyle: 'none',
      '& li': {
        borderLeft: '1px solid #ccc',
        flexBasis: 'auto',
        margin: '.25em 0',
        padding: '0 1em',
        textAlign: 'center'
      },
      '& li:first-child': {
        borderLeft: '0px'
      }
    }
  }
}
