import React from 'react'
import { Grid } from '@material-ui/core'
import { cleanText } from 'src/_utils'
import _ from 'lodash'
import getComponentFromStyle from './StylesMapping'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'

const Column = ({ data, fullWidth, font_color }) => {
  const elements = data.elements
  const desktopCols = elements.width_desktop.value[0].name
  const tabCols = elements.width_tablet.value[0].name
  const mobileCols = elements.width_mobile.value[0].name

  const style = _.get(elements, 'style.value[0].name', 'Default')
  const ColumnComponent = getComponentFromStyle(style)

  const componentId = data.id
  const title = cleanText(_.get(elements, 'title.value', ''))
  const subTitle = cleanText(_.get(elements, 'sub_title.value', ''))
  const content = cleanText(_.get(elements, 'content.value', ''))
  const image = _.get(elements, 'image.value[0]', '')
  const widgets = _.get(elements, 'widgets.linked_items', [])
  const verticalAlign = _.get(elements, 'vertical_align.value[0].codename', '')
  const textAlign = _.get(elements, 'text_align.value[0].codename', '')

  const useStyles = makeStyles(theme => ({
    ...commonStyles,
    [theme.breakpoints.down('sm')]: mobileStyles,
    [theme.breakpoints.up('md')]: desktopStyles
  }))

  const classes = useStyles({ font_color })
  const alignClass = verticalAlign === 'middle' ? classes.middle : ''

  let component
  if (!ColumnComponent) {
    console.log('MISSING COLUMN STYLES FOR ', style)
  } else {
    component = <ColumnComponent key={componentId} data={elements} title={title} subTitle={subTitle} content={content} image={image} widgets={widgets} verticalAlign={verticalAlign} fullWidth={fullWidth} textAlign={textAlign} font_color={font_color} />
  }

  const columnComp = ColumnComponent ? component : null
  return (
    <Grid item xs={parseInt(mobileCols)} md={parseInt(tabCols)} lg={parseInt(desktopCols)} className={alignClass}>
      {columnComp}
    </Grid>
  )
}

export default Column
