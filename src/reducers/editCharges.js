const initialState = {
  date: '',
  charge: '',
  amountdue: '',
  amountpaid: '',
  balance: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'EDIT_DATE':
      return { ...tempState, date: action.payload }
    case 'EDIT_CHARGE':
      return { ...tempState, charge: action.payload }
    case 'EDIT_AMOUNT_DUE':
      return { ...tempState, amountdue: action.payload }
    case 'EDIT_AMOUNT_PAID':
      return { ...tempState, amountpaid: action.payload }
    case 'EDIT_BALANCE':
      return { ...tempState, balance: action.payload }
      case 'SET_INSPECTED_CHARGE':
      return {...tempState, ...action.payload}
  }
  return tempState
}
