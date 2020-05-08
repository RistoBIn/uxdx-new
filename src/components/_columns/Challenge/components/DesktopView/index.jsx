import React from 'react'
import classNames from 'classnames'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import LinkButton from 'src/components/_core/Link'
import { commonStyles } from './styles'
import DoubleArrowImg from 'src/images/arrows.svg';

const useStyles = makeStyles(theme => ({
  ...commonStyles
}))

export default function DesktopView ({ title, number, primaryDescription, secondaryDescription, otherComponents }) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const classes = useStyles()

  const handleChange = () => {
    setIsExpanded(!isExpanded)
  }

  const animationProps = useSpring({
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
    display: 'flex',
    justifyContent: 'center'
  })

  return (
    <div className={classes.container}>
      <div className={classes.header}>{title}</div>
      <div className={classNames(classes.content, isExpanded && classes.noBorderRadius)}>
        <span className={classes.number}>
          {number}
        </span>
        <span className={classes.primaryDescription}>
          {primaryDescription}
        </span>
      </div>
      <Collapse in={isExpanded} timeout='auto' unmountOnExit>
        <div className={classes.expandableContent}>
          <Typography className={classes.secondaryDescription}>
            {secondaryDescription}
          </Typography>
          {otherComponents ? <LinkButton className={classes.source} elements={otherComponents.elements} /> : null}
        </div>
      </Collapse>
      <div className={classes.buttonContainer}>
        <Fab color="primary" className={classes.fab} aria-label="add" onClick={() => handleChange()}>
          <animated.div style={animationProps}>
            <img src={DoubleArrowImg} alt=""/>
          </animated.div>
        </Fab>
      </div>
    </div>
  )
}
