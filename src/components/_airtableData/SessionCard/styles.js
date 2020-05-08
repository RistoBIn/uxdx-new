import { BodyFont } from 'src/_styles/global'

export const commonStyles = {
  dateTitle: {
    fontWeight: 'bold',
    fontSize: '3rem',
    lineHeight: '3.5rem',
    letterSpacing: '0.3px',
    color: '#000000',
    textAlign: 'left',
    borderBottom: '1px solid #D5D5D5',
    paddingBottom: '2rem',
    marginBottom: '2rem'
  },
  agendaWrapper: {
    display: 'flex',
    alignItems: 'flex-start'
  },

  timeStyleLg: {
    position: 'absolute',
    top: '0',
    margin: '0',
    color: '#fff',
    padding: '7px 14px',
    background: '#003464',
    borderRadius: '5px',
    left: '-4.5rem',
    fontSize: '1rem'
  },
  timeStyleMobile: {
    position: 'static',
    margin: '0',
    color: '#fff',
    padding: '10px 15px',
    background: '#003464',
    borderRadius: '5px',
    fontSize: '1rem',
    width: 'max-content',
    marginBottom: '15px'
  },
  sessionGroupStyle: {
    margin: '1rem 0',
    position: 'relative',
    width: '100%'
  },
  sessionStyle: {
    border: '2px solid #efecec',
    textAlign: 'left',
    padding: '1.5rem 2rem',
    borderRadius: '5px',
    marginBottom: '1rem',
    position: 'relative',
    backgroundColor: 'white',
    overflow: 'hidden',
    '& .workshop': {
      display: 'none',
      position: 'absolute',
      left: 0,
      zIndex: '3',
      top: '14px'
    }
  },
  svgs: {
    position: 'absolute',
    left: '1.5rem',
    top: '0',
    '& .svgone ': {
      position: 'absolute',
      right: 0
    },
    '& .svgtwo': {
      position: 'absolute',
      right: 0,
      zIndex: '3'
    }
  },
  Workshop: {
    background: 'rgba(28, 187, 255, 0.07)',
    border: '1px solid rgba(59, 79, 97, 0.07)',
    position: 'relative',
    '& .Session_type': {
      backgroundColor: '#0073B4',
      color: '#fff',
      padding: '0.2rem'
    },
    '& .svgone ': {
      display: 'none'
    },
    '& .svgtwo ': {
      display: 'none'
    },
    '& .workshop': {
      display: 'block'
    },
    '& .sliderWrapper::before': {
      boxShadow: 'inset 0 20px 20px 171px #eaf6fa',
      backgroundImage: 'linear-gradient(to right, #eaf6fa, #eaf6fad9)'
    },
    '& .sliderWrapper::after': {
      boxShadow: 'inset 0 20px 20px 171px #eaf6fa',
      backgroundImage: 'linear-gradient(to right, #eaf6fa, #eaf6fad9)'
    }
  },
  Break: {
    background: 'rgba(213, 213, 213, 0.2)',
    border: 'none !important'
  },
  Session_type: {
    display: 'inline-block',
    textTransform: 'uppercase'
  },
  sessionParaHeading: {
    color: '#000000',
    fontWeight: '700',
    margin: '0 0 0.5em'
  },
  stage: {
    fontSize: '1.1em',
    margin: ' -1rem 0px 1rem',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      background: 'transparent !important',
      border: 'none'
    }
  },
  orangeBtn: {
    color: '#FFF',
    width: 'auto',
    border: 'none',
    padding: '0.4rem 0.6rem',
    fontSize: '16px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
    // fontWeight: 'bold',
    outline: 'none',
    borderRadius: '3px',
    textTransform: 'uppercase',
    backgroundColor: '#F69400'
  },
  infoWithPro: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    fontSize: '1rem'
  },
  Info: {
    flex: '0 0 55%',
    '& h3': {
      fontWeight: 'bold',
      marginTop: '0',
      textAlign: 'left',
      fontSize: '1.2rem'
    },
    '& h5': {
      fontWeight: '300',
      marginTop: '0',
      textAlign: 'left',
      fontSize: '0.9rem'
    }
  },
  InfoDescription: {
    flex: '0 0 100%'
  },
  proInfo: {
    flex: '0 0 40%',
    display: 'flex',
    alignItems: 'flex-start'
  },
  ml5: {
    marginLeft: '10px'
  },
  speakerInfo: {
    flex: '0 0 50%',
    paddingLeft: '1rem'
  },
  speakerName: {
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '10px'
  },
  infoWithProRes: {
    flexDirection: 'column'
  },
  infoWithProMul: {
    display: 'flex',
    flexDirection: 'column'
  },
  rhinfo: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    order: '1',
    marginTop: '1rem',
    position: 'relative',
    '&::before': {
      top: '-28px',
      filter: 'blur(6px)',
      content: '""',
      zIndex: '3',
      right: '-37px',
      height: 'calc(100% + 28px)',
      width: '6%',
      position: 'absolute',
      boxShadow: 'inset 0 20px 20px 171px rgb(255, 255, 255)',
      backgroundImage: 'linear-gradient(to right, #ffffff, #ffffffd9)'
    },
    '&::after': {
      top: '-28px',
      filter: 'blur(6px)',
      content: '""',
      zIndex: '3',
      left: '-37px',
      height: 'calc(100% + 28px)',
      width: '5%',
      position: 'absolute',
      boxShadow: 'inset 0 20px 20px 171px rgb(255, 255, 255)',
      backgroundImage: 'linear-gradient(to right, #ffffff, #ffffffd9)'
    }
  },
  slickSliderWrapper: {
    width: '100%',
    '& .slick-disabled': {
      display: 'none !important'
    },
    '& .MuiFab-sizeSmall': {
      width: '32px',
      height: '32px'
    }
  },
  proInfoMul: {
    flex: '0 0 23%',
    marginRight: '1%',
    padding: '0 10px'
  },
  userImg: {
    flex: '0 0 50%',
    // paddingRight: '1rem',
    marginBottom: '1rem',
    '& img': {
      width: '100%'
    }
  },
  ReadMore: {
    border: '0',
    background: 'transparent',
    outline: 'none',
    boxShadow: 'none',
    padding: '0',
    borderBottom: 'solid 1px #000',
    marginBottom: '1rem'
  },
  Speaker_Company_Logo: {
    maxHeight: '50px',
    width: 'auto',
    maxWidth: '100px',
    objectFit: 'contain'
  },
  dateTabs: {
    '& .MuiTabs-indicator': {
      height: '5px',
      backgroundColor: '#1CBBFF'
    },
    '& .Mui-selected': {
      fontWeight: 'bold',
      color: '#003464'
    },
    '& .MuiTouchRipple-root': {
      display: 'none'
    }
  },
  dateTab: {
    fontSize: '1rem'
  },
  filterTabs: {
    marginTop: '2rem',
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 'auto',
    border: '1px solid #D5D5D5',
    borderRadius: '5px',
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .Mui-selected': {
      fontWeight: 'bold',
      backgroundColor: '#003464',
      color: '#fff'
    },
    '& .MuiTouchRipple-root': {
      display: 'none'
    }
  },
  filterTab: {
    fontSize: '16px',
    minWidth: 'auto',
    padding: '0.3rem 1rem',
    minHeight: 'auto'
  },
  highlights: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  sessionHours: {
    fontWeight: 'normal',
    marginLeft: '5px'
  },
  tag: {
    color: '#929292',
    fontStyle: 'italic',
    marginRight: '0.5rem'
  },
  arrowNext: {
    zIndex: '3',
    top: '30%',
    width: 'auto',
    height: 'auto',
    '&::before': {
      display: 'none'
    },
    '& button': {
      background: '#0073B4'
    },
    '& button:hover': {
      background: '#0073B4'
    },
    '& button:focus': {
      background: '#0073B4'
    },
    '& img': {
      transform: 'rotate(270deg)'
    }
  },
  arrowPrev: {
    zIndex: '5',
    top: '30%',
    width: 'auto',
    height: 'auto',
    '&::before': {
      display: 'none'
    },
    '& button': {
      background: '#0073B4'
    },
    '& button:hover': {
      background: '#0073B4'
    },
    '& button:focus': {
      background: '#0073B4'
    },
    '& img': {
      transform: 'rotate(-270deg)'
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '300px',
    boxShadow: 'none',
    padding: '30px 20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    outline: 'none',
    position: 'relative'
  },
  CloseBtn: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    cursor: 'pointer'
  },
  feedbackForm: {
    '& h3': {
      marginTop: '0'
    },
    '& h4': {
      marginTop: '0',
      marginBottom: '5px',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      fontFamily: BodyFont
    },
    '& h6': {
      marginBottom: '5px',
      fontSize: '1rem',
      fontFamily: BodyFont,
      fontWeight: 'bold',
      marginTop: '0.5rem'
    },
    '& p': {
      marginBottom: '0'
    },
    '& .subtitle': {
      fontSize: '1rem',
      lineHeight: '1.2rem'
    },
    '& .star-ratings': {
      marginBottom: '1rem'
    },
    '& textarea': {
      margin: '1rem 0',
      resize: 'none',
      width: '100%',
      height: '175px',
      border: 'solid #000 1px'
    }
  },
  seprator: {
    height: '1px',
    background: '#000',
    margin: '1rem 0'
  },
  sessionLinks: {
    marginTop: '1rem'
  },
  videoBtn: {
    background: '#F6000F',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
    color: '#fff',
    textTransform: 'uppercase',
    borderRadius: '3px',
    padding: '10px',
    fontSize: '16px',
    marginRight: '1rem',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  slideBtn: {
    background: '#FFC700',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
    color: '#4E4600',
    textTransform: 'uppercase',
    borderRadius: '3px',
    padding: '10px',
    fontSize: '16px',
    marginRight: '1rem',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}

export const mobileStyles = {
  sessionGroupStyle: {
    maxWidth: '350px',
    margin: '1rem 0.5rem 1rem 0.5rem'
  },
  p: {
    fontSize: '1rem'
  },
  userImg: {
    height: '125px',
    width: '125px !important',
    '& img': {
      minHeight: '125px',
      maxHeight: '125px',
      height: '125px',
      width: '125px !important',
      objectFit: 'cover',
      borderRadius: '5px'
    }
  },
  speakerCompName: {
    marginBottom: '10px',
    fontSize: '16px'
  },
  speakerName: {
    marginBottom: '5px',
    fontSize: '20px',
    lineHeight: '22px'
  },
  proInfo: {
    order: 1
  },
  proInfoMul: {
    flex: '0 0 49%',
    marginRight: '1%',
    marginBottom: '1rem',
    display: 'grid'
  },
  speakerInfo: {
    flex: '0 0 50%'
  },
  sessionStyle: {
    border: '2px solid #3B4F61',
    marginBottom: '2rem',
    '& .workshop': {
      top: '20px'
    }
  },
  sessionHours: {
    fontSize: '15px'
  },
  Info: {
    '& h3': {
      marginBottom: '1rem'
    },
    '& h5': {
      fontSize: '1.5rem'
    }
  },
  InfoDescription: {
    '& p': {
      marginBottom: '0',
      fontSize: '18px'
    }
  },
  rhinfo: {
    '&::before': {
      top: '-14px',
      right: '-24px',
      width: '50px',
      height: 'calc(100% + 14px)'
    },
    '&::after': {
      top: '-14px',
      left: '-32px',
      width: '50px',
      height: 'calc(100% + 14px)'
    }
  },
  svgs: {
    '& .svgone ': {
      width: '16px',
      height: '36px'
    },
    '& .svgtwo': {
      width: '16px',
      height: '36px',
      right: '-4px'
    }
  },
  Workshop: {
    border: '2px solid transparent',
    '& .workshop': {
      width: '30px',
      height: '14px'
    }
  },
  timeStyleMobile: {
    fontSize: '1.7rem'
  },
  filterTab: {
    fontSize: '1rem'
  },
  DateHeading: {
    fontSize: '1.6rem'
  },
  infoWithPro: {
    flexDirection: 'column'
  },
  paper: {
    margin: '0 2rem'
  },
  feedbackForm: {
    '& textarea': {
      height: '75px'
    }
  },
  tag: {
    fontSize: '18px'
  },
  highlights: {
    marginBottom: '1rem'
  },
  ReadMore: {
    fontSize: '18px'
  },
  sessionLinks: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  videoBtn: {
    marginBottom: '1rem',
    width: '7rem'
  },
  slideBtn: {
    marginBottom: '1rem',
    width: '7rem'
  }
}

export const blockStyles = {
  sessionGroupStyle: {
    maxWidth: '46%',
    margin: '1rem 0.5rem 1rem 0.5rem'
  },
  p: {
    fontSize: '1rem'
  },
  userImg: {
    height: '125px',
    width: '125px !important',
    flexBasis: 'auto',
    marginBottom: 0,
    '& img': {
      minHeight: '125px',
      maxHeight: '125px',
      height: '125px',
      width: '125px !important',
      objectFit: 'cover',
      borderRadius: '5px'
    }
  },
  speakerCompName: {
    marginBottom: '10px',
    fontSize: '16px'
  },
  speakerName: {
    marginBottom: '5px',
    fontSize: '20px',
    lineHeight: '22px'
  },
  proInfo: {
    order: 1,
    flexBasis: '100%',
    alignItems: 'flex-end'
  },
  proInfoMul: {
    flex: '0 0 49%',
    marginRight: '1%',
    marginBottom: '0',
    display: 'grid'
  },
  speakerInfo: {
    flex: '0 0 50%',
    flexBasis: 'auto'
  },
  sessionStyle: {
    border: '2px solid #3B4F61',
    marginBottom: '2rem',
    height: 'calc(100% - 2rem)',
    display: 'flex',
    flexDirection: 'column',
    '& .workshop': {
      top: '20px'
    }
  },
  sessionHours: {
    fontSize: '15px'
  },
  Info: {
    flex: 'auto',
    width: '100%',
    '& h3': {
      marginBottom: '1rem'
    }
  },
  InfoDescription: {
    flex: 'auto',
    '& p': {
      marginBottom: '0',
      fontSize: '18px'
    }
  },
  rhinfo: {
    '&::before': {
      top: '-14px',
      right: '-24px',
      width: '50px',
      height: 'calc(100% + 14px)'
    },
    '&::after': {
      top: '-14px',
      left: '-32px',
      width: '50px',
      height: 'calc(100% + 14px)'
    }
  },
  svgs: {
    '& .svgone ': {
      width: '16px',
      height: '36px'
    },
    '& .svgtwo': {
      width: '16px',
      height: '36px',
      right: '-4px'
    }
  },
  Workshop: {
    border: '2px solid transparent',
    '& .workshop': {
      width: '30px',
      height: '14px'
    }
  },
  timeStyleMobile: {
    fontSize: '1.7rem'
  },
  filterTab: {
    fontSize: '1rem'
  },
  DateHeading: {
    fontSize: '1.6rem'
  },
  infoWithPro: {
    height: '100%'
  },
  paper: {
    margin: '0 2rem',
    width: '800px'
  },
  starColumn: {
    display: 'flex'
  },
  starWrapper: {
    width: '50%'
  },
  feedbackForm: {
    '& textarea': {
      height: '75px'
    }
  },
  tag: {
    fontSize: '18px'
  },
  highlights: {
    marginBottom: '1rem'
  },
  ReadMore: {
    fontSize: '18px'
  },
  sessionLinks: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  videoBtn: {
    marginBottom: '1rem',
    width: '7rem'
  },
  slideBtn: {
    marginBottom: '1rem',
    width: '7rem'
  }
}

export const desktopStyles = {
  userImg: {
    '& img': {
      minHeight: '200px',
      objectFit: 'cover',
      borderRadius: '5px'
    }
  },
  sessionHours: {
    fontSize: '20px'
  },
  sessionParaHeading: {
    fontSize: '1.5em'
  },
  paper: {
    width: '800px'
  },
  starColumn: {
    display: 'flex'
  },
  starWrapper: {
    width: '50%'
  }
}
