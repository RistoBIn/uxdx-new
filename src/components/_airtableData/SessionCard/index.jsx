/* global fetch */
import React, { useEffect, useRef } from 'react'
import { Remarkable } from 'remarkable'
import { makeStyles } from '@material-ui/core/styles'
// import { Typography } from '@material-ui/core'
// import { useStaticQuery, graphql } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import moment from 'moment'
// import filterData from '../filterData'
import _ from 'lodash'
import Collapse from '@material-ui/core/Collapse'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { commonStyles, blockStyles, desktopStyles, mobileStyles } from './styles'
import Fab from '@material-ui/core/Fab'
import DoubleArrowImg from 'src/images/arrows.svg'
import Img from 'gatsby-image'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import StarRatings from 'react-star-ratings'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'gatsby'

function SessionCard ({ width, time, sessionID, session, showSpeaker, cardView, conferenceId }) {
  const isBlockView = cardView === 'block'
  const md = new Remarkable()
  const useStyles = makeStyles(theme => ({
    ...commonStyles,
    [theme.breakpoints.down('sm')]: mobileStyles,
    [theme.breakpoints.up('md')]: isBlockView ? blockStyles : desktopStyles
  }))

  const settings = {
    dots: false,
    autoplay: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  function NextArrow (props) {
    const classes = useStyles()
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} ${classes.arrowNext}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <Fab color='primary' size='small' className={classes.fab} aria-label='add'>
          <img src={DoubleArrowImg} alt='' />
        </Fab>
      </div>
    )
  }

  function PrevArrow (props) {
    const classes = useStyles()
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} ${classes.arrowPrev}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <Fab color='primary' size='small' className={classes.fab} aria-label='add'>
          <img src={DoubleArrowImg} alt='' />
        </Fab>
      </div>
    )
  }

  function usePrevious (value) {
    const ref = useRef()

    useEffect(() => {
      ref.current = value
    }, [value]) // Only re-run if value changes

    return ref.current
  }

  const SpeakerCard = ({ speaker, isMultiple }) => {
    const classes = useStyles()
    const speakerLink = '/profile/' + speaker.speaker_url_slug
    return (
      <div className={isMultiple ? classes.proInfoMul : classes.proInfo}>
        {speaker.Speaker_Profile_Picture && speaker.Speaker_Profile_Picture.localFiles[0] && (
          <div className={classes.userImg}>
            {/* <img
            src={speaker.Speaker_Profile_Picture[0].thumbnails.large.url}
            width='200'
          /> */}
            <Link to={speakerLink}>
              <Img width='200' fluid={speaker.Speaker_Profile_Picture.localFiles[0].childImageSharp.fluid} alt={`${speaker.Speaker_First} ${speaker.Speaker_Last}`} />
            </Link>

          </div>
        )}
        <div className={`${classes.speakerInfo}`}>
          <p className={classes.speakerName}>
            <Link to={speakerLink}>{speaker.Speaker_First} {speaker.Speaker_Last}</Link>
          </p>
          <p className={classes.speakerCompName}>{speaker.Speaker_Job_Title}</p>
          {/* {speaker.Speaker_Company} */}
          {speaker.Speaker_Company_Logo && speaker.Speaker_Company_Logo[0] && (
            <img className={classes.Speaker_Company_Logo} src={speaker.Speaker_Company_Logo[0].url} width='99' />
          )}
        </div>
      </div>
    )
  }

  // const ConferenceID = session.Conference[0].data.Conference_Id
  const ModalSpeakerNames = session.Speakers && session.Speakers.map(speaker => {
    return speaker.data.Speaker_First + ' ' + speaker.data.Speaker_Last
  })
  const ModalSpeakerJobTitle = session.Speakers && session.Speakers.map(speaker => {
    return speaker.data.Speaker_Job_Title
  })
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [expandSpeaker, setExpandSpeaker] = React.useState('')
  const handleChange = (id) => {
    setIsExpanded(!isExpanded)
    setExpandSpeaker(id)
  }
  // if prevExpanded and currentExpanded same then toggle it.
  const prevExpanded = usePrevious(expandSpeaker)
  useEffect(() => {
    if (prevExpanded !== expandSpeaker) {
      setIsExpanded(true)
    }
  }, [expandSpeaker, prevExpanded])

  const classes = useStyles()
  let speakerCards
  if (session.Speakers) {
    speakerCards = session.Speakers.map(speaker => {
      return (
        <SpeakerCard
          key={speaker.id}
          speaker={speaker.data}
          isMultiple={session.Speakers.length > 1}
        />
      )
    })
  }
  function adjust (color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2))
  }
  // console.log(session)
  const stageName = _.get(session, 'Stage[0].data.Stage_Name')
  const stageColor = _.get(session, 'Stage[0].data.Stage_Colour')
  const stageColorLighter = adjust(`${stageColor}`, 80)
  const sessionType = _.get(session, 'Session_Type')
  const Workshop = sessionType === 'Workshop' ? classes.Workshop : ''
  const Break = sessionType === 'Introduction/Closing' || sessionType === 'Break' ? classes.Break : ''
  const Stage = stageName ? (
    <div className={classes[sessionType]}>{stageName}</div>
  ) : null

  const DesktopSpeakers = (speakerCards) => {
    if (speakerCards && speakerCards.length > 4) {
      return (
        <div className={`${classes.rhinfo} sliderWrapper`}>
          <Slider {...settings} slidesToShow={speakerCards.length > 4 ? 4.5 : speakerCards.length} slidesToScroll={speakerCards.length > 4 ? 4 : speakerCards.length} className={classes.slickSliderWrapper}>
            {speakerCards}
          </Slider>
        </div>
      )
    } else if (speakerCards && speakerCards.length === 1) {
      return (
        <>{speakerCards}</>
      )
    } else {
      return (
        <div className={`${classes.rhinfo} sliderWrapper`}>{speakerCards}</div>
      )
    }
  }

  const MobileSpeakers = (speakerCards) => {
    if (speakerCards && speakerCards.length > 1) {
      return (
        <div className={`${classes.rhinfo} sliderWrapper`}>
          <Slider {...settings} slidesToShow={speakerCards.length > 1 ? 1.5 : speakerCards.length} slidesToScroll={speakerCards.length > 1 ? 1 : speakerCards.length} intialSlide='1' className={classes.slickSliderWrapper}>
            {speakerCards}
          </Slider>
        </div>
      )
    } else {
      return (
        <>{speakerCards}</>
      )
    }
  }

  const SpeakerCardsSlider = useMediaQuery(theme => theme.breakpoints.up('md')) ? DesktopSpeakers(speakerCards) : MobileSpeakers(speakerCards)

  const description = md.render(session.Talk_Description)
  // if (session.Session_Type == sessionTabValue || sessionTabValue == 'All Sessions') {
  // console.log(session)
  const startTime = moment(session.Agenda_Session_Start_Time)
  const endTime = moment(session.Agenda_Session_End_Time)
  const duration = moment.duration(endTime.diff(startTime))
  const hours = duration.asHours() < 1 ? duration.asMinutes() + ' minutes' : duration.asHours() + ' hours'
  const matches = useMediaQuery('(min-width:1399px)')
  const timeClass = matches === false ? classes.timeStyleMobile : classes.timeStyleLg

  // only show feedback button on the day of the event and the day after
  const showFeedback = function (date) {
    if (conferenceId) {
      const dateTime = new Date(date).getTime()
      const now = new Date().getTime()
      if (dateTime > now && dateTime < now + 86400000) return true
      // TODO: remove this after testing
      // return false
      return true
    }
  }

  const [open, setOpen] = React.useState(false)
  const [speakerRating, setSpeakerRating] = React.useState(0)
  const [contentRating, setContentRating] = React.useState(0)
  const [comment, setComment] = React.useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const changeRating = (newRating, name) => {
    if (name === 'speakerRating') {
      setSpeakerRating(newRating)
    } else {
      setContentRating(newRating)
    }
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  }

  const submitFeedBack = () => {
    const data = {
      speaker: speakerRating,
      content: contentRating,
      comment: comment,
      timeStamp: Date.now()
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        /* "access-control-allow-origin": "*",
        'Content-Type': 'application/json' */
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(data)
    }

    const url = `https://socmov-45ba2.firebaseio.com/feedback/${ConferenceId}/${sessionID}/feedback.json`
    fetch(url, requestOptions)
      .then(response => {
        setOpen(false)
      })
  }

  // console.log('session', session)

  return (
    <>
      <div className={`${classes.sessionGroupStyle} sessionCard`}>
        {time && !isBlockView && (<h2 className={timeClass}>{time}</h2>)}
        <div className={`${classes.sessionStyle} ${Workshop} ${Break}`}>
          <div className={classes.svgs}>
            <svg className='svgone' width='20' height='46' viewBox='0 0 20 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M20 0L20 46L10 36L-1.03375e-07 46L1.90735e-06 -8.74228e-07L20 0Z' fill={stageColor} />
            </svg>
            <svg className='svgtwo' width='10' height='46' viewBox='0 0 10 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 0V36.5L10 45.5V0H0Z' fill={stageColorLighter} />
            </svg>
          </div>
          <svg className='workshop' width='30' height='20' viewBox='15 0 30 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 0L46 0L36 10L46 20L0 20L0 0Z' fill={stageColor} />
          </svg>
          {Stage &&
            <h6 className={`${classes.stage}`}>
              {Stage}
              {showFeedback(session.Agenda_Session_Start_Time) && <button onClick={handleOpen} className={classes.orangeBtn}>Give Feedback</button>}
            </h6>}
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
              <div className={`${classes.paper} ${classes.feedbackForm}`}>
                <h3>FEEDBACK</h3>
                <CloseIcon className={classes.CloseBtn} onClick={handleClose} />
                <p className='subtitle'>{session.Talk_Title}</p>
                <h6>{ModalSpeakerNames ? ModalSpeakerNames.toString() : ''}</h6>
                <p>{ModalSpeakerJobTitle ? ModalSpeakerJobTitle.toString() : ''}</p>
                <div className={classes.seprator} />
                <div className={classes.starColumn}>
                  {!Break &&
                    <div className={classes.starWrapper}>
                      <h4>Speaker</h4>
                      <StarRatings
                        rating={speakerRating}
                        starRatedColor='orange'
                        starHoverColor='orange'
                        changeRating={changeRating}
                        numberOfStars={5}
                        starDimension='35px'
                        name='speakerRating'
                      />
                    </div>}
                  <div className={classes.starWrapper}>
                    <h4>Content</h4>
                    <StarRatings
                      rating={contentRating}
                      starRatedColor='orange'
                      starHoverColor='orange'
                      changeRating={changeRating}
                      starDimension='35px'
                      numberOfStars={5}
                      name='contentRating'
                    />
                  </div>
                </div>
                <h4>Comment</h4>
                <p>Contructive feedback is always welcome</p>
                <textarea onChange={handleComment} value={comment} />
                <button className={classes.orangeBtn} style={useMediaQuery(theme => theme.breakpoints.down('sm')) ? { display: 'block', marginLeft: 'auto' } : {}} onClick={submitFeedBack}>Submit</button>
              </div>
            </Fade>
          </Modal>
          <div
            className={
              useMediaQuery(theme => theme.breakpoints.down('sm'))
                ? { ...classes.infoWithPro, ...classes.infoWithProRes }
                : speakerCards && speakerCards.length > 1
                  ? classes.infoWithProMul
                  : classes.infoWithPro
            }
          >
            <div className={classes.Info}>
              <p className={classes.sessionParaHeading}>
                {moment.utc(session.Agenda_Session_Start_Time).format('HH:mm')} -{' '}
                {moment.utc(session.Agenda_Session_End_Time).format('HH:mm')}
                <span className={classes.sessionHours}> ({hours})</span>
              </p>
              {session.Session_Type && session.Session_Type !== 'Introduction/Closing' &&
                <h5 className={`Session_type ${classes.Session_type}`}>{session.Session_Type}</h5>}
              <h3>{session.Talk_Title}</h3>
            </div>
            {!showSpeaker && isBlockView ? MobileSpeakers(speakerCards) : SpeakerCardsSlider}
            <div className={classes.InfoDescription}>
              {description &&
                <button className={classes.ReadMore} onClick={() => handleChange(sessionID)}>{sessionID === expandSpeaker && isExpanded ? 'Read Less' : 'Read More'}</button>}
              <Collapse in={sessionID === expandSpeaker ? isExpanded : false} timeout='auto' unmountOnExit>
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </Collapse>
              <div className={classes.highlights}>
                {session.Highlight && session.Highlight.map((tag) => (
                  <div className={classes.tag} key={tag.id}>#{tag.data.Highlight_Name}</div>
                ))}
              </div>
              <div className={classes.sessionLinks}>
                {(session.Video && session.Video !== 'null' && session.Video !== 'n/a') && <a className={classes.videoBtn} href={session.Video} target='_blank' rel='noopener noreferrer'>Watch Video</a>}
                {(session.Slideshare && session.Slideshare !== 'null' && session.Slideshare !== 'n/a') && <a className={classes.slideBtn} href={session.Slideshare} target='_blank' rel='noopener noreferrer'>View Slides</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionCard
