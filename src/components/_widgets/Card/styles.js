import {
  secondaryDarkAccent
} from 'src/_styles/colors'
import { HeadFont } from 'src/_styles/global'

export const commonStyles = {
  title: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontFamily: HeadFont,
    color: '#000'
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: HeadFont,
    color: secondaryDarkAccent
  },
  description: {
    color: '#000',
    marginTop: '10px',
    '& p': {
      margin: 0
    },
    textAlign: 'left'
  },
  image: {
    width: '90% !important',
    objectFit: 'contain'
  },
  cardWidget: {
    background: props => (`${props.BgColor}`),
    padding: '1rem 1.2rem',
    borderRadius: '5px'
  }
}

export const mobileStyles = {
  description: {
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '10px'
  },
  title: {
    fontSize: '18px'
  },
  cardWidget: {
    textAlign: 'center'
  },
  image: {
    width: '90%',
    maxHeight: '100px',
    paddingTop: '0px'
  }
}

export const desktopStyles = {
  title: {
    fontSize: '1.2rem',
    lineHeight: '1.5rem'
  },
  description: {
    fontSize: '22px',
    lineHeight: '27px',
    marginBottom: '30px',
    minHeight: '140px'
  },
  cardWidget: {
    textAlign: 'left'
  },
  image: {
    maxHeight: '180px',
    paddingTop: '10px',
    margin: '1rem 0 2rem'
  }
}
