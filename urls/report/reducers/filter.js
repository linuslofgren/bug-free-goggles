import { generateFilters } from '../static-data'
import {
  SET_PLACE,
  SET_MONTH,
  SET_TYPE,
  REMOVE_TYPE,
  OPEN_HELP,
  REQUEST_DATA,
  RECEIVE_DATA
} from '../actions/actionTypes'

export default (state = generateFilters(), action) => {
  switch (action.type) {
    case SET_PLACE: {
      return Object.assign({}, state, {placeName: action.payload})
    }
    case SET_MONTH: {
      return Object.assign({}, state, {monthName: action.payload})
    }
    case SET_TYPE: {
      let types = state.types.slice()
      if (types.indexOf(action.payload) === -1) {
        types.push(action.payload)
      }
      return Object.assign({}, state, {types: types})
    }
    case REMOVE_TYPE: {
      let tempTypes = state.types.slice()
      if (tempTypes.indexOf(action.payload) !== -1) {
        tempTypes.splice(tempTypes.indexOf(action.payload), 1)
      }
      return Object.assign({}, state, {types: tempTypes})
    }
    case OPEN_HELP: {
      return Object.assign({}, state, {helping: true})
    }
    case REQUEST_DATA: {
      return Object.assign({}, state, {fetching: true})
    }
    case RECEIVE_DATA: {
      return Object.assign({}, state, {fetching: false})
    }
    default: {
      return state
    }
  }
}
