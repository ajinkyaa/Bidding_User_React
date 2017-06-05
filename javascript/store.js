import { createStore } from 'redux'
import { userReducer } from './reducers/userReducer'

const initialState = {
  userName: [],
  userList: []
}

let store = createStore(userReducer, initialState)

export default store
