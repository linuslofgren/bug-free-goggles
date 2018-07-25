import { connect } from 'react-redux'
import CountChart from './CountChart'

const mapStateToProps = state => {
  return {
    month: state.filter.monthName,
    types: state.filter.types,
    thisMonth: state.data.countData.thisMonth,
    lastMonth: state.data.countData.lastMonth,
    sameMonth: state.data.countData.sameMonth
  }
}

export default connect(mapStateToProps)(CountChart)
