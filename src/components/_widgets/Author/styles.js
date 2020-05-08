import {
  white
} from 'src/_styles/colors'

export const commonStyles = {
  authorName: {
    color: white,
    fontWeight: 'bold',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    margin: 0
  },
  authorProfile: {
    color: white,
    fontSize: '0.9rem',
    fontWeight: '300',
    fontStyle: 'italic'
  },
  companyName: {
    fontWeight: 'bold'
  }
}

export const mobileStyles = {
  authorProfile: {
    marginTop: '0',
    marginBottom: '0'
  }
}

export const desktopStyles = {
  authorProfile: {
    marginTop: '0px'
  }
}
