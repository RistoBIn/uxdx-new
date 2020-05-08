// import {
//   secondaryDarkAccent,
//   secondary,
//   secondaryBackground
// } from 'src/_styles/colors'
import { HeadFont } from 'src/_styles/global'

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
    position: 'relative'
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
    fontSize: '1.5em',
    margin: '0 0 0.5em'
  },
  stage: {
    fontSize: '1.1em',
    margin: ' -1rem 0px 1rem',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    '& div': {
      background: 'transparent !important',
      border: 'none'
    }
  },
  infoWithPro: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
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
    flex: '0 0 60%',
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
    flex: '0 0 40%',
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
  Speaker: {
    width: '80%',
    margin: 'auto',
    overflow: 'auto'
  },
  image: {
    width: '30%',
    objectFit: 'cover',
    maxHeight: '320px',
    float: 'left',
    marginRight: '1rem'
  },
  SpeakerDetails: {
    textAlign: 'justify'
  },
  name: {
    fontSize: '1.4rem',
    fontWeight: 'bold'
  },
  jobtitle: {
    fontSize: '1rem'
  },
  company: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  bio: {
    fontSize: '1rem',
    marginTop: '10px'
  },
  Conference: {
    border: '2px solid rgba(59, 79, 97, 0.2)',
    borderRadius: '5px',
    margin: '1rem 0',
    padding: '1.5rem',
    '& h3': {
      marginTop: '0',
      textAlign: 'left',
      textTransform: 'uppercase',
      fontSize: '1.4rem',
      fontWeight: 'bold'
    }
  },
  ConfernceWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& p': {
      margin: 0
    }
  },
  ConfernceVideo: {
    width: '40%',
    background: '#ececec',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ConfernceDetail: {
    width: '60%',
    textAlign: 'left',
    paddingLeft: '1rem'
  },
  ConfernceSessionType: {
    fontSize: '1.2rem',
    textTransform: 'uppercase'
  },
  ConfernceSessionTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  ConfernceSpeakerName: {
    marginBottom: '10px'
  },
  ConfernceDescription: {
    marginTop: '10px !important'
  },
  videoBtn: {
    width: '85px',
    '& svg': {
      width: '100%'
    }
  },
  readMoreLink: {
    background: 'none',
    border: 'none',
    outline: 'none',
    textDecoration: 'underline'
  },
  SocialLinks: {
    '& a': {
      marginRight: '10px'
    }
  },
  SessionHeading: {
    fontSize: '2.2rem',
    textAlign: 'left',
    fontFamily: HeadFont,
    textTransform: 'uppercase',
    margin: '2rem 0'
  },
  conferneceHeading: {
    textAlign: 'left',
    paddingBottom: '1rem',
    borderBottom: 'solid 1px #000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '1.2rem'
  }
}

export const mobileStyles = {
  userImg: {
    '& img': {
      minHeight: '125px',
      height: '125px',
      width: '125px',
      objectFit: 'cover',
      borderRadius: '5px'
    }
  },
  speakerCompName: {
    marginBottom: '10px'
  },
  speakerName: {
    marginBottom: '0',
    fontSize: '1.4rem',
    lineHeight: '22px'
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
      top: '8px'
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
      fontSize: '1.2rem'
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
    fontSize: '12px'
  },
  DateHeading: {
    fontSize: '1.6rem'
  },
  ConfernceWrap: {
    flexDirection: 'column'
  },
  ConfernceVideo: {
    width: '100%',
    minHeight: '140px'
  },
  videoBtn: {
    width: '60px'
  },
  ConfernceDetail: {
    width: '100%',
    marginTop: '1rem',
    paddingLeft: 0
  },
  image: {
    width: '40%',
    maxWidth: '40%',
    marginBottom: '1rem',
    maxHeight: '150px'
  },
  bio: {
    clear: 'both'
  },
  Speaker: {
    width: '100%',
    marginBottom: '2rem'
  },
  SocialLinks: {
    margin: '5px 0',
    '& svg': {
      width: '25px'
    }
  },
  SessionHeading: {
    fontSize: '2rem'
  },
  infoWithPro: {
    flexDirection: 'column'
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
  Speaker: {
    margin: '0 auto 6rem'
  },
  bio: {
    fontSize: '0.9rem'
  },
  SocialLinks: {
    margin: '10px 0'
  }
}
