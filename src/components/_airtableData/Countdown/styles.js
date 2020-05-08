// import {
//   HeadFont,
//   BodyFont
// } from 'src/_styles/global'

export const commonStyles = {
  CountdownWidget: {
    background: '#fff3cd',
    width: '100%',
    textAlign: 'left',
    padding: '10px',
    '& p': {
      margin: 0,
      display: 'inline'
    },
    '& span:not(:first-child)': {
      // paddingLeft: '10px'
    }
  },
  Link: {
    padding: '0 10px',
    color: '#b890ff',
    textDecoration: 'underline',
    fontWeight: 'bold'
  }
}

export const mobileStyles = {
  CountdownWidget: {
    fontSize: '1rem'
  }
}

export const desktopStyles = {
  CountdownWidget: {
    fontSize: '0.8rem'
  },
  CountdownWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}
