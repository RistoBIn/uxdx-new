import React from 'react'
import getWidgetFromKontent from './widgetMapping'

const Widget = ({ data, index = null, ThemeStyle = null, horizontalView = null }) => {
  const widgetType = data.__typename
  const WidgetComponent = getWidgetFromKontent(widgetType)

  if (WidgetComponent) {
    return (<WidgetComponent key={data.id} widget={data.elements} data={data} index={index} ThemeStyle={ThemeStyle} horizontalView={horizontalView} />)
  } else {
    return null
  }
}

export default Widget
