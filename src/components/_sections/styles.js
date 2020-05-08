import { HeadFont, BodyFont } from 'src/_styles/global'
export const commonStyles = {

  root: {
    backgroundImage: props => (`url('${props.backgroundUrl}')`),
    // backgroundColor: props => (`${props.backgroundColorRoot}`),
    textAlign: 'center',
    backgroundSize: 'cover',
    // paddingTop: '2.5rem',
    // paddingBottom: '3rem',
    padding: '0rem 1rem',
    width: '100%',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: props => (`${props.fontColor}`)
  },
  background: {
    position: 'absolute !important',
    width: '100%',
    height: '100%',
    zIndex: '-1'
  },
  header: {
    paddingTop: '0',
    paddingBottom: '0'
  },
  topOverlay: {
    width: '100%',
    position: 'absolute',
    height: '10rem',
    top: '-2px',
    left: '0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 100%'
  },
  headerOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom'
  },
  botttomOverlay: {
    width: '100%',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    height: '10rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 0'
  },
  reduced_top: {
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem'
  },
  container: {
    backgroundColor: props => (`${props.backgroundColorContainer}`),
    marginTop: '30px',
    marginBottom: '10px',
    borderRadius: '1rem'
  },
  fullWidthContainer: {
    padding: 0
  },
  title: {
    fontFamily: HeadFont,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: props => (`${props.fontColor}`),
    paddingBottom: '1rem',
    paddingTop: '3rem'
  },
  h3: {
    fontFamily: BodyFont,
    fontSize: '1.3rem',
    // paddingBottom: '2rem',
    color: props => (`${props.fontColor}`)
  },
  minHeight30: {
    minHeight: '30rem',
    '& .MuiGrid-root': {
      minHeight: '25rem',
      margin: '1.5rem 0'
    }
  }
}

export const mobileStyles = {
  root: {
    // backgroundImage: props => (`url('${props.backgroundMobile}')`)
  },
  header: {
    minHeight: '500px'
  },
  headerOverlay: {
    backgroundSize: '100%',
    backgroundPosition: 'center bottom -2px'
  },
  grid: {
    justifyContent: 'center'
  },
  topOverlay: {
    height: '6rem'
  },
  botttomOverlay: {
    height: '6rem'
  },
  title: {
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  reduced_top: {
    paddingTop: '0rem'
  }
}

export const desktopStyles = {
  root: {

  },
  header: {
    maxHeight: '100vh',
    minHeight: '33rem'
  },
  headerOverlay: {
    backgroundSize: '105%',
    backgroundPosition: 'center bottom -2px'
  },
  grid: {
    justifyContent: 'center'
  },
  justifyRight: {
    justifyContent: 'flex-end'
  },
  reduced_top: {
    marginTop: '-0.5rem'
  }
}
