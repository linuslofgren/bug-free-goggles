import { connect } from 'react-redux'

import Header from './Header'

const mapStateToProps = (state) => {
  return {
    name: state.filter.placeName,
    month: state.filter.monthName,
    year: state.filter.year
  }
}

export default connect(mapStateToProps)(Header)
