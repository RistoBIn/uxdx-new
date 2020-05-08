import {
  HeadFont,
  BodyFont
} from 'src/_styles/global'

export const commonStyles = {
  card: {
    padding: '0 10px',
    background: 'transparent',
    boxShadow: 'none',
    textAlign: 'left',
    outline: '0',
    height: 'inherit',
    maxWidth: '600px'
  },
  cardInner: {
    padding: '0 !important',
    border: 'solid 1px #3B4F61',
    borderRadius: '5px',
    height: '100%'
  },
  cardBody:{
    height: '100%'
  },
  SectionHeading:{
    marginBottom: '2rem',
    textTransform: 'uppercase',
    textAlign: 'left'
  },
  slickSliderWrapper: {
    width: '100%',
    marginBottom: '1rem',
    '& .slick-disabled': {
      display: 'none !important',
    },
    '& .MuiFab-sizeSmall': {
      width: '36px',
      height: '36px',
    },
    '& .slick-track': {
      display: 'flex !important',
      marginLeft: '0'
    },
    '& .slick-slide':{
      height: 'inherit !important'
    },
    '& .slick-slide>div': {
      position: 'relative',
      height: '100% !important'
    },
    // '& .slick-slide div::after': {
    //     top: '0',
    //     filter: 'blur(6px)',
    //     content: '""',
    //     zIndex: '9999',
    //     position: 'absolute',
    //     boxShadow: 'inset 0 20px 20px 171px rgba(250, 250, 250, 0.25)',
    //     backgroundImage: 'linear-gradient(to right, #fafafa87, #fafafad9)',
    //     right: '0px',
    //     width: '100%',
    //     height: '100%',
    //     opacity: '0.3'
    // },
    // '& .slick-slide.slick-center div::after': {
    //     display: 'none'
    // },
  },
  arrowNext: {
    zIndex: '3',
    top: '45%',
    width: 'auto',
    height: 'auto',
    right: '-10px',
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
    top: '45%',
    width: 'auto',
    height: 'auto',
    left: '-10px',
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
  FeatureImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  },
  title: {
    fontFamily: HeadFont,
    fontSize: '1.2rem',
    lineHeight: '1.4rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '10px',
    '& a': {
      textDecoration: 'none'
    },
    '& a:hover': {
      textDecoration: 'none'
    }
  },
  subtitle: {
    color: '#3B4F61'
  },
  cardContent: {
    padding: '1.5rem',
    height: 'calc(100% - 250px)',
    display: 'flex',
    flexDirection:'column'
  },
  highlights: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom:'1rem'
  },
  tag: {
    color: '#3B4F61',
    fontSize: '18px',
    marginRight: '0.5rem'
  },
  cardFoot:{
    marginTop: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ReadingTime:{
    color: '#3B4F61',
    fontSize: '18px',
    textTransform: 'uppercase'
  },
  Author: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  AuthorName: {
    color: '#3B4F61',
    fontSize: '16px',
    fontStyle: 'italic',
    textTransform: 'capitalize',
    paddingLeft: '5px'
  },
  publishDate:{
    color: '#3B4F61',
    fontSize: '16px',
    fontStyle: 'italic',
    textTransform: 'capitalize',
    paddingLeft: '5px'
  },
  ArticlesWrapper:{
    marginBottom: '2rem',
  },
  sliderWrapper:{
    display: 'flex'
  },
  excerpt:{
    fontSize: '0.8rem',
    marginBottom: '10px',
    '& a':{
      textDecoration: 'underline',
      color: '#f59300'
    }
  }
}


export const mobileStyles = {
  tag: {
    fontSize: '16px',
  },
  FeatureImage: {
    height: '150px',
  },
  title: {
    fontSize: '1rem'
  },
  cardContent: {
    height: 'calc(100% - 150px)',
  },
  Author:{
    display: 'none'
  },
  ReadingTime: {
    fontSize: '16px'
  },
}

export const desktopStyles = {
  tag: {
    fontSize: '18px',
  },
  FeatureImage: {
    height: '250px',
  },
  title: {
    fontSize: '1.2rem'
  },
  cardContent: {
    height: 'calc(100% - 250px)',
  },
}