import { connect } from 'react-redux'

import SpeedGauge from './SpeedGauge'

const mapStateToProps = (state, props) => {
  return {
    bic: state.data.bic,
    car: state.data.car,
    carFast: state.data.carFast,
    ...props
  }
}

export default connect(mapStateToProps)(SpeedGauge)
