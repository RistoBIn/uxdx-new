import {
  white
} from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  card: {
    background: 'transparent',
    boxShadow: 'none'
  },
  content: {
    margin: '60px 20px',
    '& p': {
      fontSize: '55px',
      margin: '0',
      color: white,
      textAlign: 'right',
      fontFamily: HeadFont,
      textTransform: 'uppercase',
      fontWeight: '200',
      letterSpacing: '0.3px',
      lineHeight: '75px',
      position: 'relative',
      zIndex: '2'
    },

    '& strong': {
      fontWeight: '500',
      fontFamily: HeadFont
    }
  },
  overlay: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    background: 'rgba(184, 144, 255, 1)',
    mixBlendMode: 'multiply',
    top: '0',
    left: '0'
  }
}

export const mobileStyles = {
  content: {
    margin: '20px 0',
    width: '53%',
    paddingRight: '20px',
    '& p': {
      fontSize: '20px',
      lineHeight: '29px'
    },
    '& strong': {
      fontSize: '20px'
    }
  }
}

export const desktopStyles = {
  content: {
    margin: '6.5rem 1.1rem',
    '& p': {
      fontSize: '72px',
      lineHeight: '101px'
    },
    '& strong': {
      fontSize: '72px',
      lineHeight: '101px'
    }
  }
}
