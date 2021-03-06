const initialState = {
  patientid: '',
  firstname: '',
  lastname: '',
  doctor: '',
  insurance: '',
  amountowed: '',
  patients: [],
  showChargeModal: false,
  date: '',
  charge: '',
  amountpaid: '',
  amountdue: '',
  balance: '',
  chargearr: [],
  setEditModal: false,
  searchPatientList: [],
  setExerciseModal: false,
  setEditChargeModal: false
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'ADD_ID':
      return { ...tempState, patientid: action.payload }
    case 'ADD_FIRST_NAME':
      return { ...tempState, firstname: action.payload }
    case 'ADD_LAST_NAME':
      return { ...tempState, lastname: action.payload }
    case 'ADD_DOCTOR':
      return { ...tempState, doctor: action.payload }
    case 'ADD_INSURANCE':
      return { ...tempState, insurance: action.payload }
    case 'ADD_AMOUNT_OWED':
      return { ...tempState, amountowed: action.payload }
    case 'PATIENT_LIST':
      return { ...tempState, patients: action.payload }
    case 'SHOW_CHARGE_MODAL':
      return { ...tempState, showChargeModal: action.payload }
    case 'CHARGE_DATE':
      return { ...tempState, date: action.payload }
    case 'ADD_CHARGE':
      return { ...tempState, charge: action.payload }
    case 'AMOUNT_PAID':
      return { ...tempState, amountpaid: action.payload }
    case 'AMOUNT_DUE':
      return { ...tempState, amountdue: action.payload }
    case 'ADD_BALANCE':
      return { ...tempState, balance: action.payload }
    case 'CHARGE_LIST':
      return { ...tempState, chargearr: action.payload }
    case 'SET_EDIT_MODAL':
      return { ...tempState, setEditModal: action.payload }
    case 'SEARCH_LIST':
      return { ...tempState, searchPatientList: action.payload }
    case 'SET_EXERCISE_MODAL':
      return { ...tempState, setExerciseModal: action.payload }
    case 'SET_EDIT_CHARGE_MODAL':
      return { ...tempState, setEditChargeModal: action.payload }
  }
  return tempState
}
