import { AppActionTypes } from '../actions/AppActions'
import { createStore } from 'redux'

const INITIAL_STATE = {
  championsList: null,
  championData:null
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.GET_CHAMPIONS_LIST:
      return { ...state, championsList: action.payload }
    case AppActionTypes.SAVE_CHAMPION_DATA:
      return { ...state, championData: action.data }
    default:
      return state
  }
}

const store = createStore(appReducer);

export default store;


