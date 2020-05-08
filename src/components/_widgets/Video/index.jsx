import React from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import { Typography } from '@material-ui/core'
import whiteLogo from 'src/images/logo-white.svg'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

const Videos = ({ widget }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles()

  return (
    <div className={classes.VideoWrapper}>
      <Typography className={classes.videoTitle} component="div" dangerouslySetInnerHTML={{ __html: widget.title.value }} />
      <div className={classes.videoBtn} onClick={handleOpen}>
        <svg width='118' height='124' viewBox='0 0 118 124' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <ellipse cx='59' cy='62' rx='59' ry='62' fill='#D00000' />
          <path d='M86 62L39.5 89.7128L39.5 34.2872L86 62Z' fill='white' />
        </svg>
      </div>
      <img src={whiteLogo} className={classes.whiteLogo} alt='UXDX' />
      <br />
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <iframe
                width='100%' height='100%'
                src={widget.url.value} allow='autoplay'
              />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  )
}

export default Videos
