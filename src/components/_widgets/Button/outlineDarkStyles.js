import { white, darkGrey } from 'src/_styles/colors'

export const commonStyles = {
  root: {
    color: `${darkGrey}`,
    padding: '0.95rem 2rem',
    backgroundColor: 'transparent',
    width: 'auto',
    fontSize: '0.9rem',
    minWidth: '410px',
    fontWeight: 'bold',
    lineHeight: '1rem',
    textTransform: 'uppercase',
    border: `2px solid ${darkGrey}`,
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: darkGrey,
      border: `2px solid ${darkGrey}`,
      color: `${white}`
    },
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
    backdropFilter: 'blur(2px)',
    marginBottom: '1   rem',
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
