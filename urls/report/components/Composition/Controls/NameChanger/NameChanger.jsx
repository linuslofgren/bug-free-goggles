import React from 'react'
import { connect } from 'react-redux'

import styles from './NameChanger.css'

import { setPlace } from '../../../../actions'

const NameChanger = ({changeTo, name, avaliblePlaces}) => (
  <div className={styles.nameControls}>
    <select className={styles.select} onChange={(e) => changeTo(e.target.value)} value={name}>
      {avaliblePlaces.map((p, i) => <option key={i}>{p}</option>)}
    </select>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    changeTo: name => {
      dispatch(setPlace(name))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.filter.placeName,
    avaliblePlaces: state.filter.avaliblePlaces
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameChanger)
// store.
