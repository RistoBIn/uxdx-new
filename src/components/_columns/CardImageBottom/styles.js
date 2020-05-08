import { white, secondaryDarkAccent, backgroundColor, mainText } from 'src/_styles/colors'

export const commonStyles = {
  root: {
    backgroundColor: white,
    paddingTop: '2rem'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: mainText,
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '16px',
    color: secondaryDarkAccent,
    marginBottom: '10px'
  },
  description: {
    color: secondaryDarkAccent
  },
  linkContainer: {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  },
  link: {
    color: secondaryDarkAccent
  },
  card: {
    height: '100%',
    boxShadow: 'none',
    backgroundColor: backgroundColor,
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px'
  },
  image: {
    width: '90%',
    paddingTop: '1rem'
  }
}

export const mobileStyles = {
  title: {
    fontSize: '19px'
  },
  link: {
    marginTop: '20px'
  },
  description: {
    fontSize: '16px'
  }
}

export const desktopStyles = {
  title: {
    fontSize: '29px'
  },
  brands: {
    justifyContent: 'space-between'
  },
  description: {
    fontSize: '22px'
  }
}
