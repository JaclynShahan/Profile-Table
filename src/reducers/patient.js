const initialState = {
  patientId: '',
  firstName: '',
  lastName: '',
  doctor: '',
  insurance: '',
  amountOwed: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'ADD_ID':
      return { ...tempState, patientId: action.payload }
    case 'ADD_FIRST_NAME':
      return { ...tempState, firstName: action.payload }
    case 'ADD_LAST_NAME':
      return { ...tempState, lastName: action.payload }
    case 'ADD_DOCTOR':
      return { ...tempState, doctor: action.payload }
    case 'ADD_INSURANCE':
      return { ...tempState, insurance: action.payload }
    case 'ADD_AMOUNT_OWED':
      return { ...tempState, amountOwed: action.payload }
  }
  return tempState
}
