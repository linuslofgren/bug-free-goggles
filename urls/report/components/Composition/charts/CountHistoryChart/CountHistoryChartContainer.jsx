import { connect } from 'react-redux'

import CountHistoryChart from './CountHistoryChart'

const mapStateToProps = (state) => {
  return {
    data: state.data.count
  }
}

export default connect(mapStateToProps)(CountHistoryChart)
