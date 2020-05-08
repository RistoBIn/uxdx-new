import _ from 'lodash'

const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()

export const cleanText = (string) => {
  let returnString
  // remove html variables
  const htmlRemovedString = string ? string.replace(/<\/?[^>]+(>|$)/g, '') : ''

  // if this is blank then return blank
  if (string === '<p>' + htmlRemovedString + '</p>' || htmlRemovedString === '') {
    returnString = htmlRemovedString
  } else {
    // TODO: update this if we need to
    returnString = string
    // console.log(string, returnString)
  }

  // remove encoding
  return entities.decode(_.unescape(returnString)).trim()
}
