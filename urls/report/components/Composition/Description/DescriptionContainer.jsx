import { connect } from 'react-redux'

import Description from './Description'

const mapStateToProps = (state) => {
  return {
    description: state.data.description
  }
}

export default connect(mapStateToProps)(Description)
