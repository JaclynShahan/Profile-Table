const initialState = {
  username: '',
  password: '',
  authentication: false,
  user: {}
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
  }
  return tempState
}
