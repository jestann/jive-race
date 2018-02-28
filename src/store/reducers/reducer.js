import redux, { createStore, combineReducers } from 'redux'

import Fetcher from './../../tools/fetcher'
const fetcher = new Fetcher()

const initialState = {
  fetcher: fetcher,
  loggedIn: false,
  token: null,
  user: null,
  message: null,
  isError: false,
  messageVisible: false,
  data: null
}

const main = combineReducers({ auth, users })

const main = (state = initialState, action) => {
  return { 
    auth: auth(state.auth, action),
    users: users(state.users, action)
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
  }
}

const user = (state = {}, action) {
  switch (action.type) {
    case 'NEW_USER':
      return {
        id: action.id,
        name: action.name
      }
    case 'UPDATE_USER':
      return 
  }
}

/*
// UI STUFF
onClick=store.dispatch({ action })
{this.props.users.map({ <div>user.stuff</div> })}
<App {...store.getState()} />
subscribe(render)
*/
  

// add error handling
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

export default reducer

    this.state = { 
      fetcher: fetcher,
      loggedIn: fetcher.loggedIn,
      token: fetcher.token,
      user: fetcher.user,
      data: fetcher.data,
      isError: fetcher.isError,
      message: fetcher.message,
      messageVisible: fetcher.messageVisible
    }
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.handleMessage = this.handleMessage.bind(this)

/*

// import * as types from './actionTypes';


/* example below ... two methods of state return

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return {
        ...state, 
        articlesById: action.articlesById
      };
    case types.OTHER:
      return Object.assign({}, state, {
        angular: state.angular + 1
      };
    default:
      return state;
  }
}

*/