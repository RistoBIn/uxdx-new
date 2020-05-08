import {
  secondaryDark
} from './node_modules/src/_styles/colors'
import {
  HeadFont
} from './node_modules/src/_styles/global'

export const commonStyles = {
  card: {
    height: '100%',
    boxShadow: 'none',
    backgroundColor: '#fafafa'
  },
  cardBody: {
    textAlign: 'center'
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
    color: secondaryDark
  },
  subtitle: {
    fontFamily: HeadFont,
    fontWeight: 'bold',
    fontSize: '28px',
    color: '#48B6E8',
    marginLeft: '5px'
  },
  description: {
    color: '#000',
    fontSize: '22px'
  },
  image: {
    width: '90%',
    maxWidth: '220px',
    paddingTop: '10px'
  }
}

export const mobileStyles = {
  title: {
    fontSize: '18px'
  },
  description: {
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '10px'
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
    gridTemplateColumns: '45% 55%',
    textAlign: 'left'
  },
  image: {
    paddingTop: '0',
    maxHeight: '100px',
    marginBottom: '0'
  }
}

export const TabStyles = {
  title: {
    fontSize: '26px'
  },
  subtitle: {
    fontSize: '26px'
  },
  image: {
    marginBottom: '10px'
  }
}

export const desktopStyles = {
  title: {
    fontSize: '40px'
  },
  subtitle: {
    fontSize: '40px'
  },
  description: {
    fontSize: '22px',
    lineHeight: '27px'
  },
  cardBody: {
    textAlign: 'left'
  },
  heading: {
    justifyContent: 'flex-start'
  },
  image: {
    marginBottom: '10px'
  }
}
