import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import Widget from '../../_widgets'
import Img from 'gatsby-image'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

function a11yProps (index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  }
}

const SimpleTabs = ({ widgets }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [isHorizontal, setisHorizontal] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const horizontalView = () => {
    setisHorizontal(true)
  }

  return (
    <Card className={classes.Tabs}>
      <AppBar position='static' className={classes.Appbar}>
        <Tabs value={value} onChange={handleChange} aria-label='scrollable auto tabs example' scrollButtons='on' variant='scrollable'>
          {widgets.map((widget, index) => {
            return <Tab key={index} label={widget.elements.tab_name.value} {...a11yProps(index)} />
          })}
        </Tabs>
      </AppBar>
      {widgets.map((widget, index) => {
        // console.log(widget)
        const isHorizontalClass = isHorizontal ? classes.HorizontalTabs : ''
        return (
          <TabPanel value={value} index={index} key={index} className={`${classes.TabPanel} ${isHorizontalClass}`}>

            {widget.elements.widgets.linked_items.map((item, key) => {
              const image = item.elements.image.value[0]
              let imageNode
              if (image) {
                // if it is svg then use the url
                if (image.fixed && image.fixed.height) {
                  imageNode = (<Img fixed={image.fixed} alt={image.description} />)
                } else if (image.url) {
                  imageNode = (<img src={image.url} alt={image.description} className={classes.image} />)
                }
              }

              return (
                <Widget key={item.id} data={item} horizontalView={horizontalView} index={key} />
              )
            })}
          </TabPanel>
        )
      })}
    </Card>
  )
}

export default SimpleTabs
