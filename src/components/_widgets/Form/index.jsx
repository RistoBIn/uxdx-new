import React from 'react'
import _ from 'lodash'
import getForm from './formMapping.js'

export default ({ widget }) => {
  const formType = _.get(widget, 'form_type.value[0].codename', null)
  const formName = _.get(widget, 'form_name.value', null)
  const buttonText = _.get(widget, 'button_text.value', null)
  const themeMode = _.get(widget, 'theme.value[0].name', null)
  const Form = getForm(formType)

  if (Form) {
    return (<Form formName={formName} buttonText={buttonText} themeMode={themeMode} />)
  } else {
    console.log('****** Didnt find the form component for ', formName)
    return null
  }
}
