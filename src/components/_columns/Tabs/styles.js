// import {
//   white,
//   secondary,
//   secondaryBackground
// } from 'src/_styles/colors'
import {
  HeadFont
} from 'src/_styles/global'

export const commonStyles = {
  card: {
    boxShadow: 'none'
  },
  cardInner: {
    padding: '0 !important',
    height: '100%'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontFamily: HeadFont,
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  Tabs: {
    // background: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '2rem'
  },
  TabPanel: {
    '& .MuiBox-root': {
      display: 'grid',
      gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )',
      gridGap: '1rem',
      placeContent: 'center'
      // padding: '0'
    },
    '& .MuiBox-root .tabstyle': {
      // boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
      // border: 'solid 3px black',
      display: 'flex',
      flexDirection: 'column'
    },
    '& .MuiBox-root .tabstyle .desc': {
      order: 1
    },
    '& a': {
      textDecoration: 'underline',
      color: '#ef9000'
    }
  },
  Appbar: {
    background: 'none',
    color: '#000',
    zIndex: '1',
    boxShadow: 'none',
    '& button': {
      background: '#0073B4',
      color: '#ffffff78',
      fontFamily: HeadFont,
      textTransform: 'uppercase',
      opacity: '1',
      flex: '1',
      maxWidth: '100%',
      minWidth: '124px'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#f69400',
      height: '4px'
    },
    '& .MuiTabs-scrollButtons': {
      background: '#0073b4'
    },
    '& .MuiTabs-scrollButtons svg': {
      fill: '#fff'
    },
    '& .Mui-selected': {
      color: '#fff'
    }

  }
}

export const mobileStyles = {
  TabPanel: {
    '& .MuiBox-root .tabstyle': {
      textAlign: 'left'
    }
  }
}

export const desktopStyles = {
  title: {
    fontSize: '2rem'
  },
  HorizontalTabs: {
    '& .MuiBox-root': {
      gridTemplateColumns: '1fr'
    },
    '& .MuiBox-root .tabstyle': {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    '& .MuiBox-root .tabstyle .imageWrapper': {
      width: '40%'
    },
    '& .MuiBox-root .tabstyle .imageWrapper .gatsby-image-wrapper': {
      maxHeight: '300px',
      margin: 0
    },
    '& .MuiBox-root .tabstyle .desc': {
      width: '60%'
    }
  }
}
