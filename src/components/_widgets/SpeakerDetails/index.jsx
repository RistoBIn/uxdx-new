
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import { Typography } from '@material-ui/core'
// import Modal from '@material-ui/core/Modal'
// import Backdrop from '@material-ui/core/Backdrop'
// import Fade from '@material-ui/core/Fade'
import Img from 'gatsby-image'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('xs')]: mobileStyles,
  [theme.breakpoints.up('sm')]: desktopStyles
}))

export default function SpeakerDetails ({ widget, data }) {
  const [openText, setOpenText] = React.useState(false)

  const handleTextChange = () => {
    setOpenText(!openText)
  }

  // console.log('widget', widget)
  const classes = useStyles()

  // check if picture exists - otehrwise use the default picture
  if (!widget) {
    console.log('Something strange here', data)
    return (<></>)
  } else {
    // check if picture exists - otehrwise use the default picture
    let component
    if (widget && widget.Speaker_Profile_Picture && widget.Speaker_Profile_Picture.localFiles && widget.Speaker_Profile_Picture.localFiles[0]) {
      component = (<Img className={classes.image} fluid={widget.Speaker_Profile_Picture.localFiles[0].childImageSharp.fluid} alt={`${widget.Speaker_First} ${widget.Speaker_Last}`} />
      )
    }
    // console.log(widget, data, widget.Speaker_First)

    return (
      <div key={widget.Speaker_First}>
        <div className={classes.Speaker}>
          {/* <img src={widget.Speaker_Profile_Picture[0].url} className={classes.image} /> */}
          {component}
          <div className={classes.SpeakerDetails}>
            <Typography className={classes.name}>{widget.Speaker_First} {widget.Speaker_Last}</Typography>
            <Typography className={classes.jobtitle}>{widget.Speaker_Job_Title}</Typography>
            <Typography className={classes.company}>{widget.Speaker_Company}</Typography>
            <div className={classes.SocialLinks}>
              {
                widget.Speaker_Instagram && (
                  <a href={widget.Speaker_Instagram} target='_blank' rel='noopener noreferrer'>
                    <svg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M18.7225 35.9997C8.63411 35.9159 0.521046 27.8424 0.606132 17.9703C0.691218 8.0506 8.91696 0.0541357 18.9364 0.149278C28.9949 0.24442 37.1034 8.36095 36.9999 18.2353C36.8987 28.0893 28.6753 36.0835 18.7225 35.9997ZM6.89329 17.968C6.89329 19.778 6.86799 21.5902 6.89788 23.4002C6.96227 27.0654 9.65744 29.7453 13.3759 29.7928C16.9748 29.8382 20.576 29.8359 24.1749 29.7951C27.9026 29.7543 30.6415 27.0926 30.6943 23.4432C30.7472 19.8596 30.7495 16.2759 30.692 12.6944C30.6346 9.08584 27.9325 6.41507 24.2761 6.35843C20.6404 6.3018 17.0001 6.30633 13.3644 6.35843C9.64824 6.41054 6.95769 9.10849 6.8956 12.7647C6.868 14.4976 6.89329 16.2328 6.89329 17.968Z' fill='#001121' />
                      <path d='M18.7913 27.82C17.0689 27.82 15.3442 27.8449 13.6218 27.8154C10.7472 27.7656 8.95353 26.0372 8.91904 23.2146C8.87534 19.7827 8.87764 16.3508 8.91673 12.9189C8.94893 10.1711 10.7518 8.37247 13.5275 8.33622C17.0482 8.28865 20.5735 8.28412 24.0942 8.33622C26.817 8.37473 28.6383 10.1462 28.6843 12.826C28.7441 16.3327 28.7464 19.8416 28.6843 23.3483C28.6383 26.0213 26.8032 27.7565 24.0735 27.8154C22.3143 27.8494 20.5505 27.82 18.7913 27.82ZM24.8669 18.1245C24.8853 14.8285 22.1855 12.1238 18.8511 12.0966C15.5235 12.0694 12.7548 14.7493 12.7249 18.0226C12.695 21.2869 15.4316 24.0279 18.7499 24.0551C22.0752 24.0845 24.8485 21.3956 24.8669 18.1245ZM25.2073 10.2368C24.4415 10.307 23.9057 10.7646 23.9034 11.6617C23.9011 12.5044 24.4047 12.9801 25.2463 13.0526C26.0558 13.1228 26.7273 12.4908 26.7503 11.6934C26.771 10.8915 26.1455 10.2481 25.2073 10.2368Z' fill='#001121' />
                      <path d='M22.8256 18.1219C22.8026 20.3102 21.0044 22.0522 18.7829 22.0431C16.5615 22.0318 14.7747 20.2694 14.7724 18.0857C14.7701 15.8498 16.6029 14.0761 18.8772 14.1124C21.0917 14.1441 22.8486 15.9291 22.8256 18.1219Z' fill='#001121' />
                    </svg>
                  </a>
                )
              }
              {
                widget.Speaker_Twitter && (
                  <a href={widget.Speaker_Twitter} target='_blank' rel='noopener noreferrer'>
                    <svg width='36' height='35' viewBox='0 0 36 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M35.4855 17.7812C35.4743 27.3148 27.7376 35.0113 18.1859 34.9916C8.65938 34.972 0.863721 27.183 0.91702 17.6466C0.970319 7.86611 8.90063 0.416477 18.2307 0.430501C27.7264 0.450135 35.5669 8.32329 35.4855 17.7812ZM7.29886 25.4243C7.85148 25.8479 8.44338 26.162 9.06614 26.4229C11.2374 27.3288 13.4927 27.6514 15.8323 27.413C19.3332 27.054 22.2843 25.5954 24.5677 22.9084C26.8006 20.2803 27.9171 17.2062 27.9255 13.7478C27.9255 13.386 28.0686 13.1785 28.3239 12.9428C28.9017 12.4071 29.4319 11.8153 29.9761 11.2403C30.0519 11.159 30.0827 11.0384 30.1697 10.8645C29.7237 11.0103 29.373 11.1309 29.0139 11.2403C28.3856 11.4282 28.3239 11.4338 27.9199 11.3441C28.6829 10.7158 29.2832 9.99778 29.6002 8.95718C29.3506 9.07218 29.2047 9.14791 29.0532 9.20681C28.3828 9.45925 27.7123 9.70607 27.0419 9.95851C26.767 10.0623 26.5622 10.0006 26.3322 9.79583C24.7837 8.42146 22.7163 8.16342 20.9013 9.09182C19.1621 9.98095 18.1859 11.8041 18.3598 13.8376C18.3738 14.0003 18.3822 14.1629 18.3962 14.3901C16.4522 14.306 14.6794 13.7983 12.9934 12.9428C11.3075 12.0902 9.88806 10.9037 8.62853 9.44523C8.1292 10.2081 7.9665 10.9991 7.9693 11.8125C7.97491 13.3692 8.62291 14.6482 9.79268 15.7056C9.46728 15.7056 9.17835 15.6748 8.90063 15.5962C8.60047 15.5121 8.31154 15.3831 7.93564 15.2428C8.06188 17.6494 9.27653 19.1443 11.459 19.9409C11.4365 19.9774 11.4169 20.0166 11.3945 20.0531C10.839 20.0531 10.2836 20.0531 9.72817 20.0531C9.87965 21.5649 11.5207 22.886 13.9444 23.4301C11.9303 24.9363 9.73658 25.5141 7.29886 25.4243Z' fill='#001121' />
                    </svg>
                  </a>
                )
              }
              {
                widget.Speaker_Linkedin && (
                  <a href={widget.Speaker_Linkedin} target='_blank' rel='noopener noreferrer'>
                    <svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M34.9944 18.0897C34.8261 27.413 27.0865 35.1795 17.3749 34.9972C7.94943 34.8205 0.20988 27.0567 0.406244 17.3689C0.602608 7.65292 8.60865 0.304267 17.9444 0.427679C27.44 0.556701 35.2132 8.47474 34.9944 18.0897ZM28.4639 27.671C28.4639 27.427 28.4639 27.225 28.4639 27.0231C28.4611 24.74 28.4695 22.454 28.4527 20.1709C28.4471 19.4164 28.4106 18.6619 28.3433 17.9102C28.2619 16.9818 28.0347 16.0871 27.5802 15.2624C27.1539 14.4911 26.5395 13.9301 25.726 13.5879C24.6348 13.128 23.4903 13.0158 22.3373 13.1756C21.0806 13.3523 19.9978 13.8909 19.2123 14.9343C19.1422 15.0296 19.0468 15.1054 18.8953 15.2568C18.8729 14.6089 18.8561 14.0592 18.8364 13.5234C17.9051 13.4112 15.055 13.4505 14.6511 13.5683C14.6511 18.258 14.6511 22.9505 14.6511 27.7019C16.1378 27.7243 17.5769 27.7271 19.058 27.6934C19.058 27.4073 19.058 27.1998 19.058 26.995C19.0608 24.7287 19.0468 22.4624 19.0777 20.1989C19.0861 19.6408 19.1843 19.0658 19.3526 18.5329C19.6836 17.4979 20.6205 16.9622 21.8071 17.0323C22.9348 17.0996 23.5828 17.6101 23.8129 18.7488C23.9447 19.3911 23.9728 20.0587 23.9812 20.7178C24.0064 22.8327 24.0008 24.9475 24.0092 27.0624C24.0092 27.2615 24.0345 27.4606 24.0485 27.671C25.5409 27.671 26.9631 27.671 28.4639 27.671ZM11.7982 27.671C11.8178 27.5532 11.8431 27.4803 11.8431 27.4045C11.8431 22.8747 11.8374 18.3449 11.8346 13.8151C11.8346 13.7422 11.815 13.6665 11.801 13.5936C11.7982 13.5767 11.7813 13.5627 11.7701 13.5487C11.7561 13.5347 11.7421 13.5234 11.7365 13.515C10.3058 13.515 8.88076 13.515 7.43608 13.515C7.43608 18.2496 7.43608 22.9393 7.43608 27.6682C8.91162 27.671 10.3535 27.671 11.7982 27.671ZM9.56242 11.5404C10.9903 11.5629 12.1488 10.4606 12.1797 9.04692C12.2133 7.58561 11.1109 6.43282 9.65219 6.41038C8.2019 6.38794 7.0686 7.4678 7.04055 8.89827C7.0153 10.3792 8.10091 11.5208 9.56242 11.5404Z' fill='#001121' />
                    </svg>
                  </a>
                )
              }
            </div>
            {!openText && widget.Speaker_Bio && (
              <Typography className={classes.bio}>{widget.Speaker_Bio.length > 240 ? (
                <>
                  {widget.Speaker_Bio.substr(0, 240)}... <button className={classes.readMoreLink} onClick={handleTextChange}>Read More</button>
                </>
              ) : widget.Speaker_Bio}
              </Typography>
            )}
            {openText &&
              <Typography className={classes.bio}>{widget.Speaker_Bio} <button className={classes.readMoreLink} onClick={handleTextChange}>Read Less</button></Typography>}
          </div>
        </div>
      </div>
    )
  }
}
