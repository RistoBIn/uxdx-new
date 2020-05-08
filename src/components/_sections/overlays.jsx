

import React from 'react'
import { EllipseLeftToRightTop, EllipseLeftToRightBottom, EllipseRightToLeftTop, EllipseRightToLeftBottom, ReduceLeftToRightTop, ReduceLeftToRightBottom, ReduceRightToLeftTop, ReduceRightToLeftBottom, HeaderOverlay1, HeaderOverlay2 } from 'src/images/overlays/overlays'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))
const Overlays = ({ overlay, color, topColor}) => {
  const classes = useStyles()
  if (!overlay) {
    return null
  }
  return (
    <>
      {
        overlay == 'ellipselefttoright' && (
          <>
            <div className={classes.topOverlay} style={{ backgroundImage: EllipseLeftToRightTop(color, topColor) }}></div>
            <div className={classes.botttomOverlay} style={{ backgroundImage: EllipseLeftToRightBottom(color) }}></div>
          </>
        )
      }
      {
        overlay == 'ellipserighttoleft' && (
          <>
            <div className={classes.topOverlay} style={{ backgroundImage: EllipseRightToLeftTop(color, topColor) }}>
            </div>
            <div className={classes.botttomOverlay} style={{ backgroundImage: EllipseRightToLeftBottom(color) }}>
            </div>
          </>
        )
      }
      {
        overlay == 'reducelefttoright' && (
          <>
            <div className={classes.topOverlay} style={{ backgroundImage: ReduceLeftToRightTop(color, topColor) }}>
            </div>
            <div className={classes.botttomOverlay} style={{ backgroundImage: ReduceLeftToRightBottom(color) }}>
            </div>
          </>
        )
      }
      {
        overlay == 'reducerighttoleft' && (
          <>
            <div className={classes.topOverlay} style={{ backgroundImage: ReduceRightToLeftTop(color, topColor) }}>
            </div>
            <div className={classes.botttomOverlay} style={{ backgroundImage: ReduceRightToLeftBottom(color) }}>
            </div>
          </>
        )
      }
      {
        overlay == 'header1' && (
          <div className={classes.headerOverlay} style={{ backgroundImage: HeaderOverlay1(color) }}>
          </div>
        )
      }
      {
        overlay == 'header2' && (
          <div className={classes.headerOverlay} style={{ backgroundImage: HeaderOverlay2(color) }}>
          </div>
        )
      }

    </>
  )
}

export default Overlays