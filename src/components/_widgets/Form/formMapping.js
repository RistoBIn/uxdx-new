import NewsLetter from '../../_forms/NewsLetter'
import BrochureBottom from '../../_forms/brochureBottom'
import partner from '../../_forms/partner'

const getForm = (formName) => {
  const forms = {
    sendinbluesignup: NewsLetter,
    downloadbrochure: BrochureBottom,
    partner: partner
  }
  if (!formName || !forms[formName]) {
    // console.log("asdas");
    return null
  }

  return forms[formName]
}

export default getForm
