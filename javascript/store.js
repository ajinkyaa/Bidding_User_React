import { createStore } from 'redux'
import { userReducer } from './reducers/userReducer'

const initialState = {
  items: [],
}

let store = createStore(userReducer, initialState)

export default store
