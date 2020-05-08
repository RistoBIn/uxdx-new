// import {
//   white
// } from 'src/_styles/colors'

export const commonStyles = {
  wrapper: {
    '& .tito-wrapper': {
      border: '4px solid #3B4F61',
      background: 'none'
    },
    '& .tito-ticket-name': {
      textAlign: 'left',
      fontWeight: 'bold',
      color: '#3B4F61'
    },
    '& .tito-submit': {
      width: '100px !important',
      background: '#F69400 !important',
      border: '#F69400 solid 1px !important',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    '& .tito-ticket.row': {
      borderBottom: '1px solid #3B4F61 !important',
      marginBottom: '10px !important'
    },
    '& input[type=text].tito-ticket-quantity-field': {
      width: '35px !important',
      height: '25px !important',
      border: 'solid 1px #3b4f61 !important'
    }
  }
}

export const mobileStyles = {
  wrapper: {
    '& .tito-ticket-price': {
      width: '70%',
      textAlign: 'right'
    }
  }

}

export const desktopStyles = {

}
