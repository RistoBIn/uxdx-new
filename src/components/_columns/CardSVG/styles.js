import {
  secondaryDark, backgroundColor, blueText, mainText
} from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  card: {
    height: '100%',
    boxShadow: 'none',
    backgroundColor: backgroundColor
  },
  cardBody: {
    textAlign: 'left',
    paddingBottom: '1rem'
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: HeadFont,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '28px',
    textTransform: 'uppercase',
    color: secondaryDark,
    paddingBottom: '0'
  },
  subtitle: {
    fontFamily: HeadFont,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '20px',
    color: blueText,
    textAlign: 'center'
  },
  description: {
    color: mainText,
    fontSize: '22px',
    paddingTop: '1rem'
  },
  image: {
    width: '100%',
    // maxWidth: '220px',
    maxHeight: '150px',
    paddingTop: '10px',
    objectFit: 'contain'
  }
}

export const mobileStyles = {
  title: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '1rem'
  },
  description: {
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '10px',
    textAlign: 'left'
  },
  subtitle: {
    fontSize: '18px'
  },
  heading: {
    justifyContent: 'flex-start'
  },
  cardInner: {
    paddingTop: '0',
    paddingBottom: '0 !important'
  },
  cardBody: {
    display: 'grid',
    padding: '1rem'
  },
  image: {
    paddingTop: '0',
    maxHeight: '150px',
    marginBottom: '0'
  }
}

export const TabStyles = {
  title: {
    fontSize: '26px',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '20px'
  },
  image: {
    marginBottom: '10px'
  }
}

export const desktopStyles = {
  title: {
    fontSize: '30px',
    lineHeight: '1.2'
    // textAlign: 'left'
  },
  subtitle: {
    fontSize: '24px'
  },
  description: {
    fontSize: '22px',
    lineHeight: '27px',
    paddingTop: '10px',
    minHeight: '170px'
  },
  cardBody: {
    textAlign: 'left'
  },
  heading: {
    justifyContent: 'flex-start'
  },
  image: {
    marginBottom: '10px',
    height: '200px'
  }
}
