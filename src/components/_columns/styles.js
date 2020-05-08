import {
  HeadFont
  // BodyFont
} from 'src/_styles/global'

export const commonStyles = {
  middle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    '& h2': {
      fontFamily: HeadFont,
      fontWeight: '600',
      textTransform: 'uppercase',
      color: props => (`${props.font_color}`)
    },
    '& h3': {
      color: props => (`${props.font_color}`)
    }
  },
  textAlign: 'left'
}

export const mobileStyles = {
  middle: {
    marginBottom: '40px'
  }
}

export const desktopStyles = {

}
