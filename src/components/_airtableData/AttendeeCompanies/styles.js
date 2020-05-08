// import { FormHelperText, Hidden } from '@material-ui/core'

export const commonStyles = {
  root: {
    paddingLeft: 0
  },
  square: {
    maxWidth: '120px',
    maxHeight: '50px',
    height: '100%',
    width: 'auto',
    // paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  long: {
    maxWidth: '128px',
    maxHeight: '50px',
    height: 'auto',
    width: '100%',
    // paddingLeft: '1rem',
    paddingRight: '1rem',
    objectFit: 'contain'
  },
  box: {
    display: 'flex',
    alignItems: 'center'
  },
  container: {
    marginTop: '-1.8rem',
    // marginBottom: '-2rem',
    textAlign: 'left',
    minHeight: '5rem'
  },
  h2: {
    fontWeight: '400',
    fontSize: '15px',
    marginBottom: '30px'
  },
  slickSliderWrapper: {
    position: 'relative',
    '&::before , &::after': {
      content: '""',
      position: 'absolute',
      top: '-28px',
      zIndex: '3',
      backgroundImage: 'linear-gradient(to right, #fafafa, #fafafad9)',
      boxShadow: 'inset 0 20px 20px 171px rgb(250, 250, 250)',
      filter: 'blur(6px)'
    },
    '&::before': {
      left: '-23px'
    },
    '&::after': {
      right: '-23px'
    },
    '& img': {
      objectFit: 'contain !important'
    }

  }

}

export const mobileStyles = {
  slickSliderWrapper: {
    '&::before , &::after': {
      height: '125px',
      width: '35px'
    }
  }
}

export const desktopStyles = {
  brands: {
    justifyContent: 'space-between'
  },
  slickSliderWrapper: {
    marginLeft: '-40px',
    '&::before , &::after': {
      height: '275px',
      width: '100px'
    },
    '&::before': {
      left: '-52px'
    },
    '&::after': {
      right: '-52px'
    }
  }
}
