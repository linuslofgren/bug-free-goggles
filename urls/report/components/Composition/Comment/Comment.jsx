import React from 'react'
import { connect } from 'react-redux'

import { setComment } from '../../../actions'

import styles from './Comment.css'

const Comment = ({ comment, changeComment }) => (
  <div className={styles.commentContainer}>
    <span className={styles.comments}>Kommentarer:</span>
    <textarea className={styles.inputText} value={comment} placeholder={'Skriv något kort om rapporten...'} onChange={(e) => changeComment(e.target.value)} />
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    changeComment: text => {
      dispatch(setComment(text))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    comment: state.data.comment
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
