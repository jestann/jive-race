import { createStore, combineReducers } from 'redux'
import auth from './auth'

import Fetcher from './../../tools/fetcher'
const fetcher = new Fetcher()

const initialState = {
  loggedIn: false,
  token: null,
  user: null,
  message: null,
  isError: false,
  messageVisible: false,
  data: null
}

const main = combineReducers({ auth })


export default main

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