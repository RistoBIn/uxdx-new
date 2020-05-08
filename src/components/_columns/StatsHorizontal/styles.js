// import {
//   white,
//   secondary,
//   secondaryBackground
// } from 'src/_styles/colors'
// import {
//   HeadFont
// } from 'src/_styles/global'

export const commonStyles = {
  card: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none'
  },
  cardInner: {
    padding: '0 !important',
    height: '100%'
  },
  cardBody: {
    display: 'flex',
    textAlign: 'left',
    '& .statsInner': {
      display: 'flex',
      margin: '0 auto',
      justifyContent: 'center'
    }
  }
}

export const mobileStyles = {
  cardBody: {
    '& .statsInner': {
      position: 'relative',
      flexWrap: 'wrap',
      maxWidth: '500px'
    },
    '& .statsInner.NoWrap': {
      flexWrap: 'nowrap'
    },
    '& .statsInner.NoWrap div': {
      padding: '0 0.8rem !important',
      borderRight: '#003464 solid 1px'
    },
    '& .statsInner.NoWrap div:last-child': {
      borderRight: 'none'
    },
    '& .statsInner::after': {
      position: 'absolute',
      content: '""',
      width: '80%',
      left: '10%',
      height: '1px',
      background: '#003464',
      top: '39%'
    },
    '& .statsInner.NoWrap::after': {
      display: 'none'
    }
  }
}

export const desktopStyles = {

}
