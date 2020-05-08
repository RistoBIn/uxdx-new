// import {
//   secondaryDarkAccent,
//   secondary,
//   secondaryBackground
// } from 'src/_styles/colors'
import {
  // HeadFont,
  BodyFont
} from 'src/_styles/global'

export const commonStyles = {
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1.5rem 1.2rem',
    '& .MuiInput-underline::before': {
      display: 'none'
    },
    '& .MuiInput-underline::after': {
      display: 'none'
    },
    // paddingTop: '1rem',
    paddingBottom: '2rem'
  },
  multiSelect: {
    width: '100%',
    background: '#fff',
    borderRadius: '5px',
    '& .MuiSelect-select:focus': {
      background: '#fff'
    },
    '& label + .MuiInput-formControl': {
      margin: '0',
      height: '70px'
    },
    '& .MuiSelect-selectMenu': {
      opacity: '0',
      height: '100%'
    },
    '& .MuiInputLabel-formControl': {
      left: '1rem',
      transform: 'translate(0, 24px) scale(1)',
      transformOrigin: 'center',
      transition: 'none',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0, 24px) scale(1)',
      transformOrigin: 'center',
      transition: 'none',
      color: 'rgba(0, 0, 0, 0.54)'
    }
  },
  darkSelect: {
    '& label + .MuiInput-formControl': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) !important',
      border: '2px solid #BDBDBD'
    }
  },
  formInput: {
    width: '100%',
    height: '2.7rem',
    color: '#001121',
    padding: '1rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    outline: 'none',
    '& ::placeholder': {
      color: '#001121',
      opacity: '1'
    }
  },
  full: {
    gridColumn: 'span 2'
  },
  checkBox: {
    color: '#fff',
    fontSize: '16px',
    textAlign: 'left',
    '& .MuiSwitch-root': {
      marginRight: '1rem'
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#fff'
    },
    '& .MuiSwitch-colorPrimary.Mui-checked': {
      color: '#1CBBFF'
    },
    '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#1CBBFF'
    }
  },
  darkCheckBox: {
    color: '#001121'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    '& svg': {
      color: '#3B4F61'
    },
    '& svg:hover': {
      color: '#f29401'
    }
  },
  chip: {
    margin: '10px',
    backgroundColor: '#fff',
    color: '#000',
    '&:focus': {
      backgroundColor: '#fff'
    }
  },
  darkChips: {
    '& svg': {
      color: '#fff'
    },
    '& svg:hover': {
      color: '#fafafa'
    }
  },
  darkChip: {
    backgroundColor: '#1cbbff',
    color: '#fff',
    '&:focus': {
      backgroundColor: '#1cbbff'
    }
  },
  inputWrap: {
    position: 'relative'
  },
  error: {
    // color: 'red',
    margin: 0,
    position: 'absolute',
    left: '0px',
    bottom: '-1.3rem',
    fontSize: '0.7rem',
    color: 'rgba(156, 156, 156, 0.84)'

  },
  subButton: {
    width: '80%',
    height: '70px',
    margin: 'auto',
    background: '#f29401',
    fontSize: '1rem',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontFamily: BodyFont,
    '&:disabled': {
      opacity: '0.3'
    }
  },
  disabledButton: {
    opacity: '0.3'
  },
  darkTheme: {
    '& input': {
      border: '2px solid #3B4F61',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) !important'
    },
    '& input:focus': {
      border: '2px solid #1CBBFF !important'
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#ccc'
    },
    '& .makeStyles-error-326': {
      color: 'rgb(202, 16, 16)'
    },
    '& .MuiSwitch-colorPrimary': {
      color: 'darkgray'
    }
  },
  visuallyHidden: {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  },
  MultichechBox: {
    '& .MuiFormGroup-root': {
      flexDirection: 'row'
    },
    '& .MuiFormGroup-root label': {
      width: '50%',
      margin: 0
    },
    '& .MuiSvgIcon-root': {
      fill: '#003464'
    },
    '& .Mui-checked .MuiSvgIcon-root': {
      fill: '#1cbbff'
    }
  },
  label: {
    fontSize: '1.5rem'
  }
}

export const mobileStyles = {
  form: {
    padding: '0 1.5rem',
    width: '100%',
    maxWidth: '550px',
    margin: '5rem auto 0',
    paddingBottom: '4rem'
  },
  darkTheme: {
    marginTop: '0',
    '& .makeStyles-multiSelect-299 label + .MuiInput-formControl': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) !important',
      border: '2px solid #BDBDBD'
    },
    '& .makeStyles-multiSelect-299 label + .MuiInput-formControl:focus': {
      border: '2px solid #1CBBFF !important'
    },
    '& .makeStyles-checkBox-302': {
      color: '#001121'
    }
  },
  half: {
    gridColumn: 'span 2'
  },
  formInput: {
    height: '3.5rem'
  },
  multiSelect: {
    '& label + .MuiInput-formControl': {
      margin: '0',
      height: '60px'
    }
  },
  checkBox: {
    '& .MuiFormControlLabel-label': {
      fontSize: '0.8rem'
    }
  },
  subButton: {
    height: '45px',
    margin: '0 auto 3rem',
    width: '100%'
  },
  MultichechBox: {
    '& .MuiFormGroup-root label': {
      width: '100%'
    }
  }
}

export const desktopStyles = {
  form: {
    margin: '1rem auto 3.5rem',
    maxWidth: '550px'
  },
  formInput: {
    height: '2.7rem'
  },
  multiSelect: {
    background: '#fff',
    '& .MuiSelect-select:focus': {
      background: '#fff'
    },
    '& label + .MuiInput-formControl': {
      margin: '0',
      height: '70px'
    }
  }
}
