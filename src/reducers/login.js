const GET_USER = 'GET_USER'

const initialState = {
  username: '',
  password: '',
  authentication: false,
  user: {},
  newusername: '',
  newpassword: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...tempState, username: action.payload }
    case 'SET_PASSWORD':
      return { ...tempState, password: action.payload }
    case 'SET_AUTHENTICATION':
      return { ...tempState, authentication: action.payload }
    case GET_USER + '_PENDING':
      return Object.assign({}, state, { isLoading: true })
    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {
        user: action.payload,
        isLoading: false
      })
    case 'SET_NEW_USERNAME':
      return { ...tempState, newusername: action.payload }
    case 'SET_NEW_PASSWORD':
      return { ...tempState, newpassword: action.payload }
  }
  return tempState
}
