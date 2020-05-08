/* global fetch */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from '../../_widgets/Form/styles'
import { Formik } from 'formik'
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

// export default ({ widget }) => {
const BrochureBottom = ({ formName, buttonText, themeMode }) => {
  const classes = useStyles()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [email2, setEmail2] = React.useState('')
  const [isDisabled] = React.useState(true)
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  const resetForm = () => {
    setName('')
    setEmail('')
  }

  const submitForm = async data => {
    const stringData = encodeURIComponent(
      JSON.stringify(data)
        .replace('{', '')
        .replace('}', '')
    ).replace(/%22/g, '').replace(/%3A/g, '=').replace(/%2C/g, '&')
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
      'https://hook.integromat.com/ryiku0a9rnxb734uiyoa1wy1crlm2glt'
    fetch(url, requestOptions)
      .then(response => {
        // console.log('response: ', response)
        resetForm()
        handleClose()
        toast.success('Sent! We\'ll be in touch shortly.', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
    // .then(data => console.log(data))
  }

  const themeClass = themeMode === 'Dark' ? classes.darkTheme : '""'

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ name: '', email: '', email2: '' }}
        validate={values => {
          const errors = {}
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
          }
          if (!values.name) {
            errors.name = 'Required'
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
              name: values.name,
              email: values.email,
              email2: values.email2
            }
            handleToggle()
            submitForm(data)
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ values, errors, handleChange, touched, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
          <form onSubmit={handleSubmit} className={`${classes.form} ${themeClass}`}>
            <div className={`${classes.full} ${classes.inputWrap} `}>
              <label htmlFor={`${formName}_pipedrive_brochure_name`} className={`${classes.visuallyHidden}`}>First name:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_pipedrive_brochure_name`}
                type='text'
                placeholder='Name'
                // onChange={handleChange}
                onBlur={handleBlur}
                onChange={e => {
                  setFieldValue('name', e.target.value)
                  setName(e.target.value)
                }}
                value={name}
                name='name'
              />
              {errors.name && (
                <p className={`${classes.error}`}>{errors.name}</p>
              )}
            </div>
            <div className={`${classes.full} ${classes.inputWrap}`}>
              <label htmlFor={`${formName}_pipedrive_brochure_email`} className={`${classes.visuallyHidden}`}>Email:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_pipedrive_brochure_email`}
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
            <div className={classes.visuallyHidden}>
              <label htmlFor={`${formName}_pipedrive_register_email2`} className={`${classes.visuallyHidden}`}>Email 2:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_pipedrive_register_email2`}
                type='text'
                placeholder='Email2'
                // onChange={handleChange}
                onBlur={handleBlur}
                onChange={e => {
                  setFieldValue('email2', e.target.value)
                  setEmail2(e.target.value)
                }}
                value={email2}
                name='email2'
              />
            </div>
            <button
              className={`${classes.subButton} ${classes.full}`}
              type='submit'
              id={`${formName}_pipedrive_brochure_submit`}
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

export default BrochureBottom
