import { connect } from 'react-redux'

import Bubbles from './Bubbles'

const mapStateToProps = (state) => {
  return {
    topNotes: state.data.topNotes,
    number: state.data.number,
    total: state.data.total
  }
}

export default connect(mapStateToProps)(Bubbles)
