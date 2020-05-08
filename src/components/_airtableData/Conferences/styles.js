import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  EventsWrapper: {
    display: 'grid',
    gridGap: '1rem',
    width: '100%',
    margin: '2rem 0'
  },
  Event: {
    padding: '1rem 2rem',
    color: '#fff',
    display: 'grid',
    borderRadius: '5px',
    minHeight: '11rem',
    overflow: 'hidden'
  },
  Location: {
    fontFamily: HeadFont,
    fontSize: '2rem',
    textTransform: 'uppercase',
    marginBottom: '10px'
  },
  Date: {
    fontSize: '1.2rem'
  },
  DiscoverLink: {
    textDecoration: 'underline'
  },
  Accordian: {
    boxShadow: 'none',
    background: 'none',
    border: 'none',
    '&::before': {
      display: 'none'
    }
  },
  communityLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}

export const mobileStyles = {
  EventsWrapper: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
  }
}

export const desktopStyles = {
  EventsWrapper: {
    gridTemplateColumns: 'repeat(3, 1fr )',
    marginTop: '0rem'
  }
}
