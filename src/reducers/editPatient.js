const initialState = {
  patientid: '',
  firstname: '',
  lastname: '',
  doctor: '',
  insurance: '',
  amountowed: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'EDIT_PATIENT_ID':
      return { ...tempState, patientid: action.payload }
    case 'EDIT_FIRST_NAME':
      return { ...tempState, firstname: action.payload }
    case 'EDIT_LAST_NAME':
      return { ...tempState, lastname: action.payload }
    case 'EDIT_DOCTOR':
      return { ...tempState, doctor: action.payload }
    case 'EDIT_INSURANCE':
      return { ...tempState, insurance: action.payload }
    case 'EDIT_AMOUNT_OWED':
      return { ...tempState, amountowed: action.payload }
      case 'SET_INSPECTED_PATIENT':
      return {...tempState, ...action.payload}
  }
  return tempState
}
