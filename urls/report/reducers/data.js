import { generateData } from '../static-data'
import {
  SET_COMMENT,
  RECEIVE_DATA
} from '../actions/actionTypes'

export default (state = generateData(), action) => {
  switch (action.type) {
    case SET_COMMENT: {
      return Object.assign({}, state, {comment: action.payload})
    }
    case RECEIVE_DATA: {
      return Object.assign({}, action.payload)
    }
    default: {
      return state
    }
  }
}
