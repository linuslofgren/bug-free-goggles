import { connect } from 'react-redux'

import PositionChart from './PositionChart'

const mapStateToProps = (state) => {
  return {
    data: state.data.position
  }
}

export default connect(mapStateToProps)(PositionChart)
