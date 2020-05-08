import {
  HeadFont
  // BodyFont
} from 'src/_styles/global'

import {
  white,
  mainText
} from 'src/_styles/colors'

export const commonStyles = {
  ticketsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  ticket: {
    maxWidth: '300px',
    margin: '20px 0',
    border: '1px solid #D5D5D5',
    background: white,
    borderTop: '10px solid #1CBBFF',
    padding: '1rem 1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& h3': {
      marginTop: 0
    },
    '& span': {
      width: '100%'
    }
  },
  InpersonTicket: {
    background: '#0073B4',
    borderTop: '10px solid #fafafa',
    '& h3': {
      color: white
    },
    '& p': {
      color: white
    },
    '& button': {
      color: white
    },
    '& span': {
      color: white
    }
  },
  ticketName: {
    fontFamily: HeadFont,
    fontSize: '1.2rem'
  },
  Price: {
    fontSize: '3rem',
    lineHeight: '4rem',
    color: mainText,
    margin: 0,
    fontWeight: 'bold'
  },
  actualPrice: {
    fontSize: '1.5rem',
    margin: 0,
    fontWeight: 'bold',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '135%',
      left: '-10px',
      top: '50%',
      height: '3px',
      background: 'red',
      transform: 'rotate(-15deg)'
    }
  },
  smallText: {
    color: '#3B4F61',
    fontSize: '16px'
  },
  ticketIncludes: {
    margin: '1rem 0',
    lineHeight: '1.5rem',
    fontSize: '0.9rem',
    '& ul': {
      padding: 0,
      listStyleType: 'none'
    },
    '& li': {
      lineHeight: '1rem',
      marginBottom: '1rem'
    }
  },
  ticketBtn: {
    color: white,
    border: 'none',
    display: 'inline-block',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    fontSize: '0.7rem',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    textTransform: 'uppercase',
    backgroundColor: '#F69400',
    marginTop: 'auto',
    '&:hover': {
      backgroundColor: '#0073B4'
    }
  },
  titoTicketButton: {
    marginTop: 'auto',
    '& button': {
      color: white,
      border: 'none',
      display: 'inline-block',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      fontSize: '0.7rem',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
      fontWeight: 'bold',
      textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '5px',
      textTransform: 'uppercase',
      backgroundColor: '#F69400',
      marginTop: 'auto',
      '&:hover': {
        backgroundColor: '#0073B4'
      }
    }
  },
  show: {
    display: ''
  },
  hide: {
    display: 'none'
  }
}

export const mobileStyles = {
  ticketsWrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  readMoreLink: {
    display: 'inline-block',
    marginTop: '1rem',
    background: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    outline: 'none'
  },
  hideMobile: {
    display: 'none'
  },
  ticket: {
    border: '2px solid #1CBBFF',
    width: '100%'
  },
  InpersonTicket: {
    border: '2px solid #0073B4'
  },
  ticketBtn: {
    marginTop: '1rem',
    fontSize: '1rem'
  },
  ticketName: {
    fontSize: '1.6rem'
  }
}

export const desktopStyles = {
  ticket: {
    width: '30%',
    marginBottom: '3rem'
  }
}
