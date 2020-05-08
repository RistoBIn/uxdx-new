import {
  white,
  secondary,
  secondaryBackground
} from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  card: {
    backgroundColor: secondaryBackground,
    border: `1px solid ${secondary}`,
    boxShadow: '0px 3px 15px rgba(0,0,0,0.15)'
  },
  cardInner: {
    padding: '0 !important',
    height: '100%'
  },
  cardBody: {
    display: 'flex',
    textAlign: 'left'
  },
  title: {
    fontFamily: HeadFont,
    textAlign: 'center',
    textTransform: 'uppercase',
    // color: mainText,
    padding: '5px 0',
    backgroundColor: secondary,
    color: white
  }
}

export const mobileStyles = {
  title: {
    fontSize: '24px'
  },
  cardBody: {
    height: 'calc(100% - 46px)'
  }
}

export const desktopStyles = {
  title: {
    fontSize: '30px'
  },
  cardBody: {
    height: 'calc(100% - 55px)'
  },
  card: {
    marginTop: '40px',
    marginBottom: '30px',
    height: 'calc(100% - 70px)'
  }
}
