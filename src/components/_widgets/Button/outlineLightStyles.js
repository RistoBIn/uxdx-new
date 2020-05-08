import { white, secondary } from 'src/_styles/colors'

export const commonStyles = {
  root: {
    color: white,
    padding: '0.95rem 2rem',
    backgroundColor: 'transparent',
    width: 'auto',
    minWidth: '410px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    lineHeight: '1rem',
    textTransform: 'uppercase',
    border: `2px solid ${white}`,
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: secondary,
      border: `2px solid ${secondary}`
    },
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(2px)',
    marginBottom: '1rem',
    marginTop: '1rem'
  }
}

export const mobileStyles = {
  root: {
    width: '95%',
    fontSize: '1rem',
    minWidth: 'auto',
    lineHeight: '1.5rem'
  }
}

export const desktopStyles = {}

export default {
  commonStyles,
  mobileStyles,
  desktopStyles
}
