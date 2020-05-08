
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RoomIcon from '@material-ui/icons/Room'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GoogleMapReact from 'google-map-react'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const Maps = ({ widget, width }) => {
  const classes = useStyles()
  // console.log('Mapwidget', widget)

  const AnyReactComponent = () => <div><RoomIcon className={classes.mapIcon} /></div>

  const MapCoordinates = {
    center: {
      lat: parseFloat(widget.latitude.value),
      lng: parseFloat(widget.longitude.value)
    },
    zoom: Number(widget.zoom.value)
  }
  if (widget.latitude.value) {
    return (
      <div style={{ height: useMediaQuery(theme => theme.breakpoints.down('sm')) ? '200px' : '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCPtcZILQvhUSmIGfm04e7tUj8RUmKbccQ' }}
          defaultCenter={MapCoordinates.center}
          defaultZoom={MapCoordinates.zoom}
        >
          <AnyReactComponent
            lat={parseFloat(widget.latitude.value)}
            lng={parseFloat(widget.longitude.value)}
          />
        </GoogleMapReact>
      </div>
    )
  }
  return null
}

export default Maps
