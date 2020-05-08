import {
  BodyFont
} from 'src/_styles/global'

export const commonStyles = {
  speakerWrapper: {
    display: 'grid',
    gridGap: '25px',
    justifyContent: 'center',
    padding: '1rem 0 2rem'
  },
  container: {
    maxWidth: '400px',
    fontFamily: BodyFont,
    borderRadius: '10px',
    position: 'relative',
    display: 'grid',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.15)',
    transition: 'all 250ms ease-in-out'
  },
  content: {
    position: 'absolute',
    width: '60%',
    height: '100%',
    top: '0',
    left: '0',
    display: 'grid',

    '&::before': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 1)',
      position: 'absolute',
      transform: 'skewX(-7deg) translateX(-52px)',
      left: '0',
      zIndex: '1'
    }
  },
  name: {
    fontWeight: 'bold',
    color: '#000'
  },
  role: {
    fontWeight: '400',
    margin: '5px 0',
    lineHeight: '1.2em',
    letterSpacing: '0.7px',
    color: '#000'
  },
  company: {
    fontWeight: '500',
    letterSpacing: '0.5px',
    color: '#000'
  },
  viewMoreLink: {
    color: '#2f2f2f',
    display: 'block',
    fontWeight: 'normal',
    letterSpacing: '0.3px',
    borderBottom: 'solid 1px #2f2f2f',
    textDecoration: 'none',
    marginTop: '10px',
    lineHeight: '1',
    paddingBottom: '3px',
    '&:hover': {
      textDecoration: 'none',
      color: '#0073b4',
      borderColor: '#0073b4'
    }
  },
  image: {
    width: '62%',
    height: '100%',
    objectFit: 'cover',
    marginLeft: 'auto'
  },
  avatar: {
    backgroundColor: '#C4C4C4',
    textAlign: 'right',
    height: '100%'
  },
  content_inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    zIndex: 3,
    position: 'relative',
    padding: '16px 21px 0',
    width: '83%'
  },
  logo: {
    margin: '10px 0px',
    maxHeight: '52px'
  },
  cardFooter: {
    textAlign: 'left',
    display: 'flex',
    zIndex: 3,
    position: 'relative',
    padding: '0 20px 20px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }
}

export const mobileStyles = {
  speakerWrapper: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 320px))'
  },
  container: {
    height: '211px'
  },
  name: {
    fontSize: '19px',
    lineHeight: '20px'
  },
  role: {
    fontSize: '15px'
  },
  logo: {
    maxWidth: '80px',
    maxHeight: '30px'
  }
}

export const desktopStyles = {
  speakerWrapper: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(363px, 1fr))'
  },
  container: {
    height: '263px',
    '&:hover': {
      transform: 'scale(1.07)'
    }
  },
  name: {
    fontSize: '24px',
    lineHeight: '28px'
  },
  role: {
    fontSize: '16px'
  },
  viewMoreLink: {
    fontSize: '18px'
  },
  avatar: {
    backgroundColor: 'white'
  },
  logo: {
    maxWidth: '120px'
  }
}
