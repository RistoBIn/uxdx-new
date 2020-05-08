import {
  white,
  primary
} from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  card: {
    boxShadow: 'none',
    marginBottom: '1rem'
  },
  cardNobg: {
    border: '1px solid #3B4F61'
  },
  cardInner: {
    padding: '0 !important',
    height: '100%'
  },
  cardHeader: {
    backgroundImage: props => (`url('${props.imageData}')`),
    backgroundSize: 'cover',
    backgroundColor: '#ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    color: white,
    fontFamily: HeadFont,
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  subtitle: {
    fontFamily: HeadFont,
    fontSize: '1.4rem',
    fontWeight: '400',
    // paddingTop: '1rem',
    padding: '1rem 1rem 0rem 1rem'
  },
  content: {
    textAlign: 'left',
    padding: '2rem 1.5rem',
    '& a': {
      color: primary,
      textDecoration: 'underline'
    }
  }
}

export const mobileStyles = {
  cardHeader: {
    height: '212px'
  },
  title: {
    fontSize: '2.2rem',
    lineHeight: '3rem',
    width: '50%'
  }
}

export const desktopStyles = {
  cardHeader: {
    height: '480px'
  },
  title: {
    fontSize: '2rem'
  },
  card: {
    minHeight: 'calc(100% - 1rem)'
  }
}
