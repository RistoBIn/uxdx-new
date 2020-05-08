
/* global fetch */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from '../../_widgets/Form/styles'
import { Formik } from 'formik'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
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

// export default ({ widget }) => {
const Partner = ({ formName, buttonText, themeMode }) => {
  // const urlPage = typeof window !== 'undefined' ? window.location.href : ''

  // console.log(widget)
  const classes = useStyles()
  // const theme = useTheme()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email2, setEmail2] = React.useState('')
  // const [formChecked, setFormChecked] = React.useState(false)
  // const [isDisabled, setDisabled] = React.useState(true)
  // const [errors] = React.useState({})
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  // const handleFormChecked = () => {
  //   if (!formChecked) {
  //     delete errors.formChecked
  //   } else {
  //     errors.formChecked = 'Required'
  //   }
  //   setFormChecked(!formChecked)
  //   setDisabled(!isDisabled)
  // }

  const resetForm = () => {
    setName('')
    setEmail('')
    setCompany('')
    setPhone('')
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

    const url = 'https://hook.integromat.com/ryiku0a9rnxb734uiyoa1wy1crlm2glt' // integromat url
    // const url = 'https://hook.integromat.com/nsoret0nr1u6lip5n8ujgrhuec9hnn1b' // test url
    //   'https://pipedrivewebforms.com/form/bda0d5601a6053dd815e98309eb79da25355379'
    fetch(url, requestOptions)
      .then(response => {
        // console.log('response: ', response)
        resetForm()
        handleClose()
        toast.success('Form submitted - we\'ll be in touch shortly', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
      .then(data => console.log(data))
  }

  const themeClass = themeMode === 'Dark' ? classes.darkTheme : '""'
  // const darkCheckBox = themeMode == 'Dark' ? classes.darkCheckBox : '""'

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ name: '', email: '', phone: '', interests: [] }}
        validate={values => {
          const errors = {}
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
          }
          if (!values.name) {
            errors.name = 'Required'
          }
          if (!values.company) {
            errors.company = 'Required'
          }
          // console.log('errors: ', errors)
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          const data = {
            company: values.company,
            name: values.name,
            email: values.email,
            phone: values.phone,
            email2: values.email2
          }
          values.interests.forEach((interest, index) => {
            data['interest' + index] = interest
          })
          console.log('values: ', data)
          handleToggle()
          submitForm(data)
          setSubmitting(false)
        }}
      >
        {({ values, errors, handleChange, touched, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
          <form onSubmit={handleSubmit} className={`${classes.form} ${themeClass}`}>
            <div className={`${classes.half} ${classes.inputWrap} `}>
              <label htmlFor={`${formName}_pipedrive_register_first_name`} className={`${classes.visuallyHidden}`}>First name:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_pipedrive_register_first_name`}
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
            <div className={`${classes.half} ${classes.inputWrap} `}>
              <label htmlFor={`${formName}_pipedrive_register_company`} className={`${classes.visuallyHidden}`}>Company:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_pipedrive_register_company`}
                type='text'
                placeholder='Company'
                // onChange={handleChange}
                onBlur={handleBlur}
                onChange={e => {
                  setFieldValue('company', e.target.value)
                  setCompany(e.target.value)
                }}
                value={company}
                name='company'
              />
              {errors.company && (
                <p className={`${classes.error}`}>{errors.company}</p>
              )}
            </div>
            <div className={`${classes.half} ${classes.inputWrap}`}>
              <label htmlFor={`${formName}_pipedrive_register_email`} className={`${classes.visuallyHidden}`}>Email:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_pipedrive_register_email`}
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
            <div className={`${classes.half} ${classes.inputWrap} `}>
              <label htmlFor={`${formName}_pipedrive_register_phone`} className={`${classes.visuallyHidden}`}>Phone:</label>
              <input
                className={`${classes.formInput}`}
                id={`${formName}_pipedrive_register_phone`}
                type='text'
                placeholder='Phone'
                // onChange={handleChange}
                onBlur={handleBlur}
                onChange={e => {
                  setFieldValue('phone', e.target.value)
                  setPhone(e.target.value)
                }}
                value={phone}
                name='phone'
              />
              {errors.phone && (
                <p className={`${classes.error}`}>{errors.phone}</p>
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
            <div className={`${classes.full} ${classes.inputWrap} ${classes.MultichechBox}`}>
              <label htmlFor={`${formName}_pipedrive_register_interest`} className={classes.label}>What are your objectives?</label>
              <FormControl component='fieldset' className={classes.formControl}>
                <FormGroup id={`${formName}_pipedrive_register_interest`}>
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name='interests' value='424' />}
                    label='Lead Generation'
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name='interests' value='426' />}
                    label='Brand Awareness'
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name='interests' value='428' />}
                    label='Networking'
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name='interests' value='425' />}
                    label='Recruitment'
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name='interests' value='427' />}
                    label='Thought Leadership'
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleChange} name='interests' value='429' />}
                    label='Other'
                  />
                </FormGroup>
              </FormControl>
            </div>
            <button
              className={`${classes.subButton} ${classes.full}`}
              type='submit'
              id={`${formName}_pipedrive_register_submit`}
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

export default Partner
