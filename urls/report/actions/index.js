import {
  SET_PLACE,
  SET_MONTH,
  SET_COMMENT,
  SET_TYPE,
  REMOVE_TYPE,
  MAP_LOADED,
  OPEN_HELP,
  REQUEST_DATA,
  RECEIVE_DATA
} from './actionTypes'

import data from './mock_data'
import {getReportData, siteTree} from './api'
import transformData from './transformData'
// import fetch from 'cross-fetch'

const setPlace = (text) => ({ type: SET_PLACE, payload: text })
const setMonth = (text) => ({ type: SET_MONTH, payload: text })
const setComment = (text) => ({ type: SET_COMMENT, payload: text })
const setType = (type) => ({ type: SET_TYPE, payload: type })
const removeType = (type) => ({ type: REMOVE_TYPE, payload: type })
const mapLoaded = () => ({ type: MAP_LOADED })
const openHelp = () => ({ type: OPEN_HELP })
const requestData = () => ({ type: REQUEST_DATA })
const receiveData = (data) => ({ type: RECEIVE_DATA, payload: data })
const fetchData = () => (dispatch) => {
  dispatch(requestData())
  setTimeout(() => {
    Promise.resolve(getReportData).then(JSON.parse).catch((e) => console.log(e))
      .then(transformData(2018, 1)).then((d) => { console.log(d); dispatch(receiveData(d)) })
  }, 1000)
}

export {setPlace, setMonth, setComment, setType, removeType, mapLoaded, openHelp, fetchData}
