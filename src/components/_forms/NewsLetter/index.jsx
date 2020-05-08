/* global fetch */

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from '../../_widgets/Form/styles'
import { Formik } from 'formik'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
// import Input from '@material-ui/core/Input'
// import InputLabel from '@material-ui/core/InputLabel'
// import MenuItem from '@material-ui/core/MenuItem'
// import FormControl from '@material-ui/core/FormControl'
// import ListItemText from '@material-ui/core/ListItemText'
// import Select from '@material-ui/core/Select'
// import Checkbox from '@material-ui/core/Checkbox'
// import Chip from '@material-ui/core/Chip'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

// const ITEM_HEIGHT = 48
// const ITEM_PADDING_TOP = 8
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250
//     }
//   }
// }

// const interests = ['Product', 'UX', 'Design', 'Development', 'Project', 'Marketing', 'Change', 'Leadership']

// function getStyles (name, interestName, theme) {
//   return {
//     fontWeight:
//       interestName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium
//   }
// }

// export default ({ widget }) => {
const NewsLetter = ({ formName, buttonText, themeMode }) => {
  const urlPage = typeof window !== 'undefined' ? window.location.href : ''

  // console.log(widget)
  const classes = useStyles()
  // const theme = useTheme()
  const [firstName, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [interestName, setinterestName] = React.useState([])
  const [formChecked, setFormChecked] = React.useState(false)
  const [isDisabled, setDisabled] = React.useState(true)
  const [errors] = React.useState({})
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  // const selectChange = event => {
  //   const val = event.target.value
  //   setinterestName(val)
  //   // validateInterest(val)
  // }

  // const validateInterest = val => {
  //   if (!val.length) {
  //     errors.interestName = 'Please select at least one'
  //   } else {
  //     delete errors.interestName
  //   }
  // }

  const handleFormChecked = () => {
    if (!formChecked) {
      delete errors.formChecked
    } else {
      errors.formChecked = 'Required'
    }
    setFormChecked(!formChecked)
    setDisabled(!isDisabled)
  }

  // const deleteInterest = value => {
  //   const new_interest = interestName.filter(val => value != val)
  //   setinterestName(new_interest)
  //   // validateInterest(new_interest)
  // }

  const resetForm = () => {
    setName('')
    setEmail('')
    setSurname('')
    setinterestName([])
    setFormChecked(false)
  }

  const submitForm = async data => {
    try {
      const response = await fetch('https://jsonip.com', { mode: 'cors' })
      const resp = await response.json()
      // console.log(resp)

      data.IP_ADDRESS = resp.ip
    } catch (e) {
      console.log('e', e)
    }

    const stringData = encodeURIComponent(
      JSON.stringify(data)
        .replace('{', '')
        .replace('}', '')
    ).replace(/%22/g, '').replace(/%3A/g, '=').replace(/%2C/g, '&')
    // console.log(stringData)

    const requestOptions = {
      method: 'POST',
      headers: {
        /* "access-control-allow-origin": "*",
        'Content-Type': 'application/json' */
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: stringData
    }

    const url =
      'https://9c863001.sibforms.com/serve/MUIEAB3AViqiLyxDq27wrZx0F5Q7yORMmlo4dAK0LrKKPX1bFh05W8Vl-5wydNViQIUA7Rz3L91HZb3hFPlm24N9da-lVvi71zqEjIZsAeci3JHDSNdYb4h0Pu_n9ZqFKL9yZ69fc_UwP3V7de6HAKaV8M487E233jTy-m92mg-bLmjn1EKvIjGz3FuXzepywv3otKJ0fo-vs3iv'
    fetch(url, requestOptions)
      .then(response => {
        // console.log('response: ', response)
        resetForm()
        handleClose()
        toast.success('Sent! You\'ll receive a confirmation email shortly - please confirm your email to complete the subscription.', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
      // .then(data => console.log(data))
  }

  const themeClass = themeMode === 'Dark' ? classes.darkTheme : '""'
  const darkCheckBox = themeMode === 'Dark' ? classes.darkCheckBox : '""'
  // const darkSelect = themeMode === 'Dark' ? classes.darkSelect : '""'
  // const darkChips = themeMode === 'Dark' ? classes.darkChips : '""'
  // const darkChip = themeMode === 'Dark' ? classes.darkChip : '""'

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ firstName: '', email: '', surname: '' }}
        validate={values => {
          const errors = {}
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
          }
          if (!values.firstName) {
            errors.firstName = 'Required'
          }
          if (!values.surname) {
            errors.surname = 'Required'
          }
          if (!formChecked) {
            errors.formChecked = 'Required'
          }
          // if (!interestName.length) {
          //   errors.interestName = 'Please select at least one'
          // }
          return errors
          // setErrors(errors)
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const data = {
              FIRSTNAME: values.firstName,
              LASTNAME: values.surname,
              EMAIL: values.email,
              SOURCE: formName,
              SUBSCRIBE__PAGE: urlPage,
              GDPR: formChecked,
              INTERESTS: interestName.join(' '),
              email_address_check: '',
              locale: 'en',
              html_type: 'simple',
              IP_ADDRESS: ''
            }
            handleToggle()
            submitForm(data)
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ values, errors, handleChange, touched, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
          <form onSubmit={handleSubmit} className={`${classes.form} ${themeClass}`}>
            <div className={`${classes.half} ${classes.inputWrap} `}>
              <label htmlFor={`${formName}_sendinblue_register_first_name`} className={`${classes.visuallyHidden}`}>First name:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_sendinblue_register_first_name`}
                type='text'
                placeholder='First Name'
                // onChange={handleChange}
                onBlur={handleBlur}
                onChange={e => {
                  setFieldValue('firstName', e.target.value)
                  setName(e.target.value)
                }}
                value={firstName}
                name='firstName'
              />
              {errors.firstName && (
                <p className={`${classes.error}`}>{errors.firstName}</p>
              )}
            </div>
            <div className={`${classes.half} ${classes.inputWrap}`}>
              <label htmlFor={`${formName}_sendinblue_register_last_name`} className={`${classes.visuallyHidden}`}>Last name:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_sendinblue_register_last_name`}
                type='text'
                placeholder='Surname'
                // onChange={handleChange}
                onChange={e => {
                  setFieldValue('surname', e.target.value)
                  setSurname(e.target.value)
                }}
                onBlur={handleBlur}
                value={surname}
                name='surname'
              />
              {errors.surname && (
                <p className={`${classes.error}`}>{errors.surname}</p>
              )}
            </div>
            <div className={`${classes.full} ${classes.inputWrap}`}>
              <label htmlFor={`${formName}_sendinblue_register_email`} className={`${classes.visuallyHidden}`}>Email:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_sendinblue_register_email`}
                type='email'
                placeholder='Email'
                // onChange={handleChange}
                onChange={e => {
                  setFieldValue('email', e.target.value)
                  setEmail(e.target.value)
                }}
                onBlur={handleBlur}
                value={email}
                name='email'
              />
              {errors.email && (
                <p className={`${classes.error}`}>{errors.email}</p>
              )}
            </div>
            {/* <div className={`${classes.full} ${classes.inputWrap}`}>
              <FormControl className={`${classes.multiSelect} ${darkSelect}`}>
                <InputLabel id={`${formName}_sendinblue_register_interest_label`}>
                  Areas of interests
                </InputLabel>
                <Select
                  labelId={`${formName}_sendinblue_register_interest_label`}
                  id={`${formName}_sendinblue_register_interest`}
                  multiple
                  value={interestName}
                  onChange={selectChange}
                  input={<Input />}
                  renderValue={selected => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {interests.map(name => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={interestName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.interestName && (
                <p className={`${classes.error}`}>{errors.interestName}</p>
              )}
            </div>
            <div className={`${classes.chips} ${classes.full} ${darkChips}`}>
              {interestName &&
                interestName.map((value, index) => (
                  <Chip
                    className={`${classes.chip} ${darkChip}`}
                    label={value}
                    onDelete={() => {
                      deleteInterest(value)
                    }}
                    color='primary'
                    key={`chip${index}`}
                  />
                ))}
            </div> */}
            <div className={`${classes.full} ${classes.inputWrap}`}>
              <FormControlLabel
                className={`${classes.checkBox} ${darkCheckBox}`}
                control={
                  <Switch
                    checked={formChecked}
                    onChange={handleFormChecked}
                    value={formChecked}
                    color='primary'
                  />
                }
                label='I agree to receive emails from UXDX, including promotion, discounts, conference news, and access to exclusive invite-only events and that I have read and agreed to the Privacy Policy.'
              />
            </div>
            <button
              className={`${classes.subButton} ${classes.full}`}
              type='submit'
              id={`${formName}_sendinblue_register_submit`}
              disabled={isSubmitting}
              style={isDisabled ? { backgroundColor: 'rgba(128, 128, 128, 0.61)', cursor: 'not-allowed', pointerEvents: 'none' } : {}}
            >
              {buttonText}
            </button>
            <Backdrop className={classes.backdrop} open={open}>
              <CircularProgress color='inherit' />
            </Backdrop>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default NewsLetter
