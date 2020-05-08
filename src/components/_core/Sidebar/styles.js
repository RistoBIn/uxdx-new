import { HeadFont } from 'src/_styles/global'
export const commonStyles = {
  Heading: {
    fontSize: '1.6rem',
    marginTop: '0',
    marginBottom: '1rem',
    fontFamily: HeadFont,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  recentPost: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '0.5px',
      background: 'black',
      bottom: '-1rem'
    },
    '&:last-child::after': {
      display: 'none'
    },
    '&:last-child': {
      marginBottom: '0rem'
    }
  },
  postImage: {
    width: '200px',
    height: '132px',
    marginRight: '1rem'
  },
  postContent: {
    flex: 1
  },
  postTitle: {
    fontSize: '20px',
    lineHeight: '1.2rem',
    marginTop: '0',
    fontFamily: HeadFont,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  Date: {
    color: '#3B4F61',
    margin: 0,
    textTransform: 'uppercase'
  },
  ReadingTime: {
    marginBottom: 0
  },
  sideBarSpeaker: {
    borderRadius: '50%',
    marginRight: '10px'
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& p': {
      margin: 0
    }
  }
}

export const mobileStyles = {
  postImage: {
    width: '120px',
    height: '92px',
    marginRight: '1rem'
  },
  postTitle: {
    lineHeight: '1.4rem'
  },
  recentPost: {
    '&:last-child': {
      marginBottom: '4rem'
    }
  },
  sideBarSpeaker: {
    width: '30px',
    height: '30px'
  }
}

export const desktopStyles = {
  PostWrapper: {
    padding: '1.5rem 0 1.5rem 1.5rem'
  },
  sideBarSpeaker: {
    width: '40px',
    height: '40px'
  }
}
