import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'
import Widget from '../../_widgets'
import Img from 'gatsby-image'

import { commonStyles, desktopStyles, mobileStyles } from './styles'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const Venue = (props) => {
  const classes = useStyles()

  const widgetComponents = props.widgets.map((widget, index) => {
    return <Widget key={widget.id} data={widget} index={index} />
  })

  // check Venue_Sponsor_Logo exist or not
  let venueLogo
  if (props.data.Venue_Sponsor_Logo && props.data.Venue_Sponsor_Logo.value) {
    venueLogo = props.data.Venue_Sponsor_Logo.value
  }
  let imageComponent
  if (venueLogo) {
    if (props.data.Venue_Sponsor_Logo.value.localFiles[0].childImageSharp && props.data.Venue_Sponsor_Logo.value.localFiles[0].childImageSharp.fluid) {
      imageComponent = (
        <div className={classes.venuelogo}>
          <Img fluid={props.data.Venue_Sponsor_Logo.value.localFiles[0].childImageSharp.fluid} alt={props.data.title.value} />
        </div>
      )
    } else if (props.data.Venue_Sponsor_Logo.value.raw[0].url) {
      imageComponent = (
        <div className={classes.venuelogo}>
          <img src={props.data.Venue_Sponsor_Logo.value.raw[0].url} alt={props.data.title.value} />
        </div>
      )
    }
  }
  let venueMapImg
  if (props.data.Venue_Map && props.data.Venue_Map.value) {
    venueMapImg = props.data.Venue_Map.value
  }
  if (venueMapImg) {
    if (props.data.Venue_Map.value.localFiles[0].childImageSharp && props.data.Venue_Map.value.localFiles[0].childImageSharp.fluid) {
      imageComponent = (
        <div className={classes.venuelogo}>
          <Img fluid={props.data.Venue_Map.value.localFiles[0].childImageSharp.fluid} alt={props.data.title.value} />
        </div>
      )
    } else if (props.data.Venue_Map.value.raw[0].url) {
      imageComponent = (
        <div className={classes.venuelogo}>
          <img src={props.data.Venue_Map.value.raw[0].url} alt={props.data.title.value} />
        </div>
      )
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.cardInner}>
          <div className={venueLogo ? classes.VenueContent70 : classes.VenueContent50}>
            <h4 className={classes.VenueTitle}>{props.data.title.value}</h4>
            <p>{props.data.address && props.data.address.value}</p>
            <p>{props.data.content && props.data.content.value}</p>
          </div>
          {imageComponent}
        </div>
        <div className={classes.Map}>
          {widgetComponents}
        </div>
      </CardContent>
    </Card>
  )
}

export default Venue
