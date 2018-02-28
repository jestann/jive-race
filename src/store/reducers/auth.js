const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      let data = await this.fetchIt('/auth/login', 'PUT', undefined, { username: action.username, password: action.password })
        if (data.success) { data.loggedIn = true }
        // throw
        return data // { currentUser: {logged in user}, token: (token), message: "logged in", loggedIn: boolean }
    case 'LOGOUT':
      let data = { success: true, code: 200, loggedIn: false, message: "Successfully logged out." }
      return {
        ...state,
        loggedIn: data.loggedIn,
        token: null,
        user: null,
        message: data.message,
        isError: false,
        messageVisible: true,
        data: data
      }
    default:
      return state
  }
}

export default auth