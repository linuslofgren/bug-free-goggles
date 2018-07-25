import React from 'react'
import { connect } from 'react-redux'

import styles from './DateChanger.css'

// import store from '../../../../store'
import { setMonth } from '../../../../actions'

const DateChanger = ({month, avalibleMonths, changeMonth}) => (
  <div className={styles.nameControls}>
    <select className={styles.select} onChange={(e) => changeMonth(e.target.value)} value={month}>
      {avalibleMonths.map((p, i) => <option key={i}>{p}</option>)}
    </select>
  </div>
)
const mapStateToProps = state => {
  return {
    month: state.filter.monthName,
    avalibleMonths: state.filter.avalibleMonths
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeMonth: month => {
      dispatch(setMonth(month))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DateChanger)
