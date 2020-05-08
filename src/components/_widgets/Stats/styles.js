// import {
//   secondaryDarkAccent,
//   secondary,
//   secondaryBackground
// } from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  statNameV: {
    color: '#B890FF',
    fontFamily: HeadFont,
    fontSize: '1.8rem',
    textTransform: 'uppercase',
    fontWeight: '200'
  },
  metricsV: {
    color: '#010101',
    fontFamily: HeadFont,
    fontSize: '4rem',
    lineHeight: '5rem',
    textTransform: 'uppercase'
  },
  statNameH: {
    fontWeight: 'normal',
    fontSize: '1.5rem',
    lineHeight: '1.8rem',
    color: '#1CBBFF',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  metricsH: {
    margin: 0,
    fontSize: '3rem',
    lineHeight: '4rem',
    color: '#003464',
    textAlign: 'center',
    fontWeight: '700'
  },
  statInnerH: {
    flexDirection: 'column',
    padding: '0 2rem',
    border: 'none',
    textAlign: 'center',
    borderRight: '#003464 solid 1px',
    '&:last-child': {
      borderRight: 'none'
    }
  },
  statInnerV: {
    display: 'flex',
    textAlign: 'left',
    '&:nth-child(1)': {
      width: '49%',
      flexDirection: 'column-reverse',
      order: '-3'
    },
    '&:nth-child(2)': {
      width: '51%',
      flexDirection: 'column',
      paddingLeft: '1.3rem',
      borderLeft: '0.5px solid #003464',
      order: '-2'
    },
    '&:nth-child(3)': {
      width: '49%',
      alignItems: 'center',
      '& span': {
        writingMode: 'vertical-lr',
        transform: 'rotate(-180deg)',
        fontWeight: '100'
      }
    },
    '&:nth-child(4)': {
      width: '51%',
      flexDirection: 'column-reverse',
      paddingLeft: '1.3rem',
      borderLeft: '0.5px solid #003464',
      '& span': {
        wordBreak: 'break-word',
        lineHeight: '2rem'
      }
    },
    '&:nth-child(5)': {
      width: '100%',
      alignItems: 'center',
      '& p': {
        fontSize: '3.2rem',
        fontWeight: 'bold'
      },
      '& span': {
        fontSize: '3.2rem',
        color: '#000',
        fontFamily: HeadFont,
        marginLeft: '5px',
        fontWeight: 'bold'
      }
    }
  }
}

export const mobileStyles = {
  statNameV: {
    color: '#B890FF',
    fontSize: '1.5rem'
  },
  metricsV: {
    color: '#001121',
    fontSize: '2rem',
    lineHeight: '2rem'
  },
  statNameH: {
    fontSize: '1.3rem'
  },
  metricsH: {
    fontSize: '2rem',
    lineHeight: '3rem'
  },
  statInnerH: {
    width: '50%',
    marginBottom: '1rem',
    '&:nth-child(2)': {
      borderRight: 'none'
    },
    '&:nth-child(4)': {
      borderRight: 'none'
    },
    '&:nth-child(5)': {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      display: 'flex'
    },
    '&:nth-child(5) p': {
      color: '#003464',
      fontSize: '1.8rem',
      fontFamily: HeadFont,
      fontWeight: 'bold',
      lineHeight: '1.8rem',
      paddingRight: '10px'
    },
    '&:nth-child(5) span': {
      color: '#003464',
      fontSize: '1.8rem',
      fontFamily: HeadFont,
      fontWeight: 'bold'
    }
  },
  statInnerV: {
    '&:nth-child(2)': {
      paddingLeft: '1rem',
      '& p': {
        marginTop: '1rem'
      }
    },
    '&:nth-child(4)': {
      paddingLeft: '1rem'
    },
    '&:nth-child(5)': {
      marginTop: '15px',
      '& p': {
        fontSize: '2rem',
        lineHeight: '3rem'
      },
      '& span': {
        fontSize: '2rem',
        color: '#000',
        lineHeight: '3rem'
      }
    }
  }
}

export const desktopStyles = {
  statNameV: {
    color: '#B890FF',
    fontSize: '1.8rem'
  },
  statInnerH: {
    '&:first-child': {
      paddingLeft: '0rem'
    }
  },
  metricsV: {
    color: '#010101',
    fontSize: '4rem',
    lineHeight: '5rem',
    fontWeight: '500'
  },
  statInnerV: {
    '&:nth-child(1)': {
      '& p': {
        lineHeight: '4.2rem'
      },
      '& span': {
        fontSize: '2.5rem'
      }
    },
    '&:nth-child(2)': {
      paddingLeft: '1rem',
      '& p': {
        lineHeight: '4rem',
        marginTop: '1rem'
      },
      '& span': {
        fontSize: '2.5rem'
      }
    },
    '&:nth-child(3)': {
      '& p': {
        fontSize: '4.5rem'
      },
      '& span': {
        fontSize: '2rem',
        paddingRight: '10px'
      }
    },
    '&:nth-child(4)': {
      paddingLeft: '1rem',
      '& p': {
        fontSize: '4.5rem'
      },
      '& span': {
        lineHeight: '2.2rem',
        fontSize: '2rem'
      }
    },
    '&:nth-child(5)': {
      '& p': {
        fontSize: '2.2rem',
        fontWeight: 'bold'

      },
      '& span': {
        fontSize: '2.2rem',
        color: '#000',
        fontWeight: 'bold',
        marginLeft: '10px'
      }
    }
  }
}
