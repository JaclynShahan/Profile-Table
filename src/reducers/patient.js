const initialState = {
  patient_id: '',
  first_name: '',
  last_name: '',
  doctor: '',
  insurance: '',
  amount_owed: '',
  patients: []
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
    case 'PATIENT_LIST':
      return { ...tempState, patients: action.payload }
  }
  return tempState
}
