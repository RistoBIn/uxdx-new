import { white, secondary, secondaryBackground } from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  container: {
    // width: '14.9rem',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.15)',
    marginBottom: '1rem'
  },
  header: {
    color: white,
    // fontWeight: 'bold',
    fontFamily: HeadFont,
    fontSize: '1.25rem',
    backgroundColor: secondary,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: secondaryBackground,
    borderTop: 'none'
  },
  number: {
    marginTop: '1.5rem',
    fontWeight: 'bold',
    fontSize: '3.33rem',
    lineHeight: '2.6rem',
    marginBottom: '0.5rem'
  },
  primaryDescription: {
    fontSize: '1.04rem',
    margin: '0.5rem 3.5rem',
    lineHeight: '24px',
    textAlign: 'center'
  },
  expandableContent: {
    backgroundColor: secondaryBackground,
    padding: '1rem 1.29rem',
    fontSize: '0.91rem !important',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  secondaryDescription: {
    fontSize: '0.91rem !important',
    textAlign: 'center'
  },
  noBorderRadius: {
    borderRadius: 0
  },
  buttonContainer: {
    backgroundColor: secondaryBackground,
    textAlign: 'center',
    padding: '1rem 0',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    '& > button': {
      backgroundColor: '#0073B4 !important'
    },
    '& > button:hover': {
      backgroundColor: '#056296 !important'
    }
  },
  icon: {
    height: '2.34rem'
  },
  source: {
    maxWidth: '185px',
    margin: '0 auto',
    marginTop: '1em',
    fontSize: '1rem'
  }
}
