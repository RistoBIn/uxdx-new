import {
  secondaryDarkAccent,
  secondary,
  secondaryBackground
} from 'src/_styles/colors'
import { HeadFont } from 'src/_styles/global'

export const commonStyles = {
  cardLeft: {
    padding: '10px 20px',
    borderRight: `1px solid ${secondary}`,
    position: 'relative',
    width: '45%',
    display: 'grid',
    '&::before': {
      content: '""',
      width: 0,
      height: 0,
      borderTop: '19px solid transparent',
      borderBottom: '19px solid transparent',
      borderLeft: `19px solid ${secondaryBackground}`,
      position: 'absolute',
      right: '-19px',
      top: '50%',
      transform: 'translate(0, -50% )',
      zIndex: 2
    },
    '&::after': {
      content: '""',
      width: 0,
      height: 0,
      borderTop: '21px solid transparent',
      borderBottom: '21px solid transparent',
      borderLeft: `21px solid ${secondary}`,
      position: 'absolute',
      right: '-21px',
      top: '50%',
      transform: 'translate(0, -50% )'
    }
  },
  cardRight: {
    padding: '10px 30px',
    width: '55%',
    display: 'grid',
    backgroundColor: '#fff',
    '& p': {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    fontSize: '14px',
    textTransform: 'uppercase',
    fontFamily: HeadFont,
    color: secondaryDarkAccent,
    marginBottom: '10px'
  },
  description: {
    color: secondaryDarkAccent,
    marginTop: '10px'
  },
  image: {
    width: '90%',
    maxHeight: '90px',
    paddingTop: '10px'
  }
}

export const mobileStyles = {
  description: {
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '18px'
  }
}

export const desktopStyles = {
  subtitle: {
    fontSize: '24px'
  },
  description: {
    fontSize: '22px',
    lineHeight: '27px',
    marginBottom: '30px'
  }
}
