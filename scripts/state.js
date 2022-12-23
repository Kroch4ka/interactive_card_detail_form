const IDLE = 'IDLE'
const SUCCESS = 'SUCCESS'

let currentCardFormStatus = IDLE;
const defaultCardData = {
  number: ['0000', '0000', '0000', '0000'],
  owner: 'JANE APPLESEED',
  expiry: {
    month: '00',
    year: '00'
  },
  cvc: '000'
}

const changeCardFormStatus = () => {
  currentCardFormStatus = currentCardFormStatus === IDLE ? SUCCESS : IDLE;
}

export {
  currentCardFormStatus,
  changeCardFormStatus,
  IDLE,
  SUCCESS,
  defaultCardData
}