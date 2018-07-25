import React from 'react'
import { connect } from 'react-redux'

import styles from './TypeChanger.css'

import { setType, removeType } from '../../../../actions'

class TypeChanger extends React.Component {
  constructor (props) {
    super(props)
    this.checkRef = React.createRef()
  }
  checkHandler (e) {
    const checked = this.checkRef.current.checked
    if (checked) {
      this.props.addType(this.props.type)
    } else {
      this.props.delType(this.props.type)
    }
  }
  render () {
    return (
      <div className={styles.typeControl} onClick={(e) => {
        const checked = this.checkRef.current.checked
        if (e.target.tagName !== 'SPAN') {
          if (checked) {
            this.props.addType(this.props.type)
          } else {
            this.props.delType(this.props.type)
          }
        }
      }
      } >
        <label>{this.props.children}
          <input type='checkbox' onChange={this.checkHandler.bind(this)} checked={this.props.types.indexOf(this.props.type) !== -1} ref={this.checkRef} className={styles.checkbox} />
          <span className={styles.checkmark} />
        </label>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addType: type => {
      dispatch(setType(type))
    },
    delType: type => {
      dispatch(removeType(type))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    types: state.filter.types,
    avaliblePlaces: state.filter.avaliblePlaces
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeChanger)
