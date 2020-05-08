import {
  secondaryDarkAccent
}
  from 'src/_styles/colors'

export const commonStyles = {
  root: {
    order: 1
  },
  card: {
    boxShadow: 'none',
    background: 'transparent'
  },
  cardInner: {
    // background: 'transparent'
  },
  statsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px 10px'
  },
  borderLine: {
    height: '1px',
    background: secondaryDarkAccent,
    width: '100%',
    order: '-1'
  }
}

export const mobileStyles = {
  borderLine: {
    margin: '15px 0'
  }
}

export const desktopStyles = {
  borderLine: {
    margin: '25px 0'
  }
}
