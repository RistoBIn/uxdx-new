import { white, primary, secondary } from 'src/_styles/colors'

export const commonStyles = {
  root: {
    color: white,
    padding: '1rem 2rem',
    backgroundColor: primary,
    width: 'auto',
    // minWidth: '410px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    lineHeight: '1rem',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: secondary
    },
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '2rem',
    marginTop: '1rem'
  }
}

export const mobileStyles = {
  root: {
    width: '95%',
    minWidth: 'auto',
    fontSize: '1rem',
    lineHeight: '1.5rem'
  }
}

export const desktopStyles = {
}

export default {
  commonStyles,
  mobileStyles,
  desktopStyles
}
