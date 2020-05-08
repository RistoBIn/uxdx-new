import {
  secondaryDark, backgroundColor, blueText, mainText, primary
} from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  card: {
    height: '100%',
    boxShadow: 'none',
    backgroundColor: backgroundColor
  },
  cardBody: {
    textAlign: 'center'
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: HeadFont,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '28px',
    textTransform: 'uppercase',
    color: secondaryDark,
    paddingBottom: '0.5rem'
  },
  subtitle: {
    fontFamily: HeadFont,
    fontWeight: 'bold',
    fontSize: '20px',
    color: blueText
  },
  description: {
    color: mainText,
    fontSize: '22px',
    paddingTop: '1rem',
    '& p': {
      marginBottom: '0'
    },
    '& a': {
      color: primary,
      textDecoration: 'underline'
    }
  },
  image: {
    width: '90%',
    maxWidth: '220px',
    paddingTop: '10px',
    objectFit: 'contain'
  }
}

export const mobileStyles = {
  title: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '1rem'
  },
  description: {
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '10px',
    paddingTop: 0,
    textAlign: 'left'
  },
  subtitle: {
    fontSize: '18px'
  },
  heading: {
    justifyContent: 'flex-start'
  },
  cardInner: {
    paddingTop: '0',
    paddingBottom: '0 !important'
  },
  cardBody: {
    display: 'grid'
  },
  image: {
    paddingTop: '0',
    maxHeight: '100px',
    marginBottom: '0'
  }
}

export const desktopStyles = {
  card: {
    width: '80%',
    margin: '0 auto'
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: '32px',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '32px'
  },
  description: {
    fontSize: '22px',
    lineHeight: '27px',
    paddingTop: '10px'
  },
  heading: {
    justifyContent: 'flex-start'
  },
  image: {
    marginBottom: '10px',
    maxHeight: '200px'
  },
  cardLeft: {
    width: '30%'
  },
  cardRight: {
    width: '70%',
    textAlign: 'left',
    paddingLeft: '1rem'
  }
}
