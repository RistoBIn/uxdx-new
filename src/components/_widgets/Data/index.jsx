import React from 'react'
import _ from 'lodash'
import getStyledComponent from './dataMapping.jsx'

export default ({ widget }) => {
  let dataType = _.get(widget, 'data_type.value[0].name', null)
  dataType = dataType.replace(/ /g, '_').toLowerCase() // need to convert strings to variable names

  const highlightName = _.get(widget, 'highlight.value', null)
  const conferenceID = _.get(widget, 'conference.value', null)
  const date = _.get(widget, 'date.value', null)
  const style = _.get(widget, 'style.value[0].name', 'Default')
  const title = _.get(widget, 'title.value', 'Default')
  const DataComponent = getStyledComponent(dataType, style)

  // TODO: NEED TO create styles for carousel or sliding list
  const containerStyle = _.get(widget, 'container_style.value[0].name', 'Default')

  if (DataComponent) {
    return (<DataComponent data={widget} dataType={dataType} date={date} highlight={highlightName} conference={conferenceID} title={title} />)
  } else {
    console.log('****** Didnt find the data component for ', dataType, style, widget)
    return null
  }
}
