
import { primary } from 'src/_styles/colors'

export const commonStyles = {
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // paddingbottom: '1rem'
  },
  container: {
    paddingBottom: '1.5rem',
    color: props => (`${props.fontColor}`),
    '& p': {
      color: props => (`${props.fontColor}`)
    },
    '& div': {
      color: props => (`${props.fontColor}`)
    },
    textAlign: 'center'
  },
  body: {
    fontSize: '1rem',
    '& a': {
      color: primary
    },
    paddingBottom: '1rem'
  },
  fullWidthContainer: {
    padding: 0
  },
  subTitle: {
    paddingBottom: '2rem'
  },
  left: {
    textAlign: 'left'
  }
}

export const mobileStyles = {
}

export const desktopStyles = {
  // brands: {
  //   justifyContent: 'space-between'
  // }
}
