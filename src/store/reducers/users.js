const user = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_USER':
      return {
        id: action.id,
        name: action.name
      }
    case 'UPDATE_USER':
      return state
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return [
        ...state,
        user(undefined, action)
      ]
    case 'UPDATE_USER':
      return state.map((user) => { user(user, action) })
    default:
      return state
  }
}

export default users