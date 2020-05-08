import {
  white
} from 'src/_styles/colors'
// import {
//   HeadFont,
//   BodyFont
// } from 'src/_styles/global'

export const commonStyles = {
  card: {
    background: 'transparent',
    boxShadow: 'none',
    width: '75%',
    marginRight: 'auto',
    textAlign: 'left'
  },
  quote: {
    color: white,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    lineHeight: '1.3rem',
    fontStyle: 'italic'
  }
}

export const mobileStyles = {
  card: {
    width: '90%',
    margin: '1rem auto'
  },
  cardInner: {
    minHeight: '260px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

export const desktopStyles = {
  card: {
    width: '75%',
    marginTop: '8rem',
    marginBottom: '8rem'
  },
  quote: {
    fontSize: '1.5rem',
    lineHeight: '1.8rem',
    marginBottom: '40px'
  }
}
