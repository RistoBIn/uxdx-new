import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  VideoWrapper: {
    padding: '50px 0'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '60%',
    height: '600px',
    boxShadow: 0,
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    outline: 'none',
    '& iframe': {
      border: 'none'
    }
  },
  videoTitle: {
    color: '#fff',
    textTransform: 'uppercase',
    margin: '0 auto',
    fontFamily: HeadFont,
    fontWeight: '500',
    '& p': {
      margin: '0'
    }
  },
  videoBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    cursor: 'pointer'
  },
  whiteLogo: {
    margin: '20px 0'
  },
  viewMore: {
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: '300'
  }
}

export const mobileStyles = {
  videoTitle: {
    fontSize: '60px',
    lineHeight: '80px',
    width: '80%'
  },
  paper: {
    width: '80%',
    height: '300px'
  },
  videoBtn: {
    top: '40%',
    '& svg': {
      width: '60px',
      height: 'auto'
    }
  },
  whiteLogo: {
    width: '60px'
  }
}

export const desktopStyles = {
  videoWrapper: {
    minHeight: '750px'
  },
  videoTitle: {
    fontSize: '8rem',
    letterSpacing: '0.3px',
    lineHeight: '10rem',
    width: '50%'
  },
  whiteLogo: {
    width: '100px'
  }
}
