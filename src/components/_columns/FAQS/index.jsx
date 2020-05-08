import React from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import { commonStyles, desktopStyles, mobileStyles } from './styles'
import DoubleArrowImg from 'src/images/arrows.svg'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.down('sm')]: mobileStyles,
  [theme.breakpoints.up('md')]: desktopStyles
}))

function FAQ ({ title, content, image }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const backgroundColorRoot = expanded ? '#fff' : 'rgba(0, 115, 180, 0.15)'

  const animationProps = useSpring({
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
    display: 'flex',
    justifyContent: 'center'
  })

  const FabSize = useMediaQuery(theme => theme.breakpoints.up('lg')) ? 'large' : 'medium'
  const classes = useStyles({ backgroundColorRoot })

  return (
    <ExpansionPanel square className={classes.container} expanded={expanded === `panel${title.length}`} onChange={handleChange(`panel${title.length}`)}>
      <ExpansionPanelSummary
        className={classes.panelSummary}
        aria-controls={`panel${title.length}bh-content`}
        id={`panel${title.length}bh-content`}
      >
        <div className={classes.faqTop}>
          <div className={classes.ImageContainer}>
            <img className={classes.Image} src={image.url} alt={image.description} />
          </div>
          <div className={classes.header}>{title}</div>
          <div className={classes.buttonContainer}>
            <Fab color='primary' size={FabSize} className={classes.fab} aria-label='add' onClick={() => handleChange(`panel${title.length}`)}>
              <animated.div style={animationProps}>
                <img src={DoubleArrowImg} alt='' />
              </animated.div>
            </Fab>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.secondaryDescription} component='div' dangerouslySetInnerHTML={{ __html: content }} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default FAQ
