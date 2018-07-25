import React from 'react'
import PropTypes from 'prop-types'

import styles from './Bubbles.css'
import TopNotes from './TopNotes/TopNotes'

const Bubbles = (props) => (
  <div className={styles.bubblesContainer}>
    <div className={[styles.bubbleContainer, styles.rightBubble].join(' ')}>
      <TopNotes notes={props.topNotes} />
    </div>
    <div className={[styles.bubbleContainer, styles.leftBubble].join(' ')}>
      <div className={styles.topTitle}>Besökare<br />denna månad</div>
      <div className={styles.largeTitle}>
        {props.number}
      </div>
      <div className={styles.smallerTitle}>
        (Totalt <span className={styles.smallerTitleNumber}>{props.total}</span> i år)
      </div>
    </div>
  </div>
)

Bubbles.propTypes = {
  topNotes: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    count: PropTypes.number
  })).isRequired,
  number: PropTypes.number,
  total: PropTypes.number
}

export default Bubbles
