import { secondaryBackground } from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  container: {
    width: '90%',
    margin: 'auto'
  },
  header: {
    backgroundColor: '#0073B4',
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: HeadFont,
    fontSize: '1.5rem',
    textAlign: 'center',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    paddingTop: '0.4rem',
    paddingBottom: '0.4rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: secondaryBackground,
    justifyContent: 'space-around',
    borderTop: 'none',
    padding: '0.2rem 0rem',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  number: {
    fontWeight: 'bold',
    fontSize: '2.8rem',
    marginLeft: '1rem',
    marginRight: '0.75rem'
  },
  primaryDescription: {
    fontSize: '1.1rem',
    textAlign: 'left',
    lineHeight: '20px'
  },
  icon: {
    height: '2.31rem',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
    borderRadius: '50%'
  },
  expandableContent: {
    backgroundColor: secondaryBackground,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    fontSize: '1.1rem !important',
    textAlign: 'left'
  },
  secondaryDescription: {
    fontSize: '1.1rem',
    textAlign: 'left'
  },
  noBorderRadius: {
    borderRadius: 0
  },
  buttonContainer: {
    textAlign: 'center',
    padding: '1rem 0',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    margin: '0 1rem',
    '& > button': {
      backgroundColor: '#0073B4 !important'
    },
    '& > button:hover': {
      backgroundColor: '#056296 !important'
    }
  },
  source: {
    maxWidth: '185px',
    marginTop: '1em',
    marginBottom: '1em',
    fontSize: '1rem'
  }
}
