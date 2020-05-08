export const commonStyles = {
  root: {
    color: '#0073B4',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    border: '2px solid #0073B4',
    padding: '0.68rem 2rem',
    minWidth: '410px',
    borderRadius: '8px',
    '&:hover': {}
  }
}

export const mobileStyles = {
  root: {
    minWidth: 'auto',
    width: '95%',
    lineHeight: '1.5rem'
  }
}

export const desktopStyles = {}

export default {
  commonStyles,
  mobileStyles,
  desktopStyles
}
