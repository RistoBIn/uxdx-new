// import { white, secondary, secondaryBackground } from 'src/_styles/colors'

export const commonStyles = {
  container: {
    width: '100%',
    borderRadius: '4px 4px 0px 0px !important',
    backgroundColor: props => (`${props.backgroundColorRoot}`),
    transition: 'all 300ms ease-in-out',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.15)'
  },
  header: {
    fontSize: '1.1rem',
    textAlign: 'left',
    width: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    color: '#001F3C',
    flex: '1',
    marginRight: '1rem',
    marginLeft: '1rem'
  },
  panelSummary: {
    '& .MuiExpansionPanelSummary-content': {
      margin: '20px 0',
      minHeight: 'auto'
    }
  },
  ImageContainer: {
    width: '65px',
    height: '65px'
  },
  Image: {
    maxWidth: '65px',
    maxHeight: '65px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderTop: 'none'
  },
  primaryDescription: {
    fontSize: '1.04rem',
    margin: '0.5rem 3.5rem',
    lineHeight: '24px',
    textAlign: 'left'
  },
  expandableContent: {
    padding: '1rem 0',
    fontSize: '0.91rem !important',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  secondaryDescription: {
    fontSize: '0.91rem !important',
    textAlign: 'left',
    '& p': {
      margin: 0
    },
    '& figure': {
      margin: 0
    },
    '& img': {
      width: '100%'
    }
  },
  noBorderRadius: {
    borderRadius: 0
  },
  buttonContainer: {
    '& > button': {
      backgroundColor: '#0073B4 !important'
    },
    '& > button:hover': {
      backgroundColor: '#056296 !important'
    }
  },
  icon: {
    height: '2.34rem'
  },
  source: {
    maxWidth: '185px',
    margin: '0 auto',
    marginTop: '1em',
    fontSize: '1rem'
  },
  faqTop: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  }
}

export const mobileStyles = {
  container: {
    padding: '0'
  }
}

export const desktopStyles = {
  container: {
    padding: '0 2rem'
  }
}
