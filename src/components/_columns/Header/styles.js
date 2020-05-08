import {
  white
} from 'src/_styles/colors'
import {
  HeadFont,
  BodyFont
} from 'src/_styles/global'

export const commonStyles = {
  infoContainer: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontFamily: HeadFont,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: white
  },
  subtitle: {
    fontFamily: BodyFont,
    color: white,
    paddingBottom: '2rem',
    lineHeight: '1.8rem'
  },
  buttons: {}
}

export const mobileStyles = {
  infoContainer: {
    minHeight: '36.62em'
  },
  title: {
    fontSize: '2.2rem',
    margin: '0 1rem',
    paddingTop: '4rem'
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: '0 2rem',
    paddingTop: '1.25rem',
    lineHeight: '2rem'
  },
  buttons: {
    paddingTop: '2.06rem'
  },
  button: {
    lineHeight: '27px',
    '&:last-child': {
      marginTop: '1rem'
    }
  }
}

export const desktopStyles = {
  infoContainer: {
    minHeight: '31rem'
  },
  title: {
    fontSize: '2.5rem'
    // paddingTop: '8.5rem'

  },
  subtitle: {
    fontSize: '1.25rem',
    paddingTop: '1rem'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    paddingTop: '3.16rem',
    margin: '0 auto'
  },
  button: {
    lineHeight: '27px !important',
    '&:last-child': {
      marginTop: '1rem'
    },
    '&:only-child': {
      marginTop: '0rem'
    }
  }
}
