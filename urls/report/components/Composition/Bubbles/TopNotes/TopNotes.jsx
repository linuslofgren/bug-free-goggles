import React from 'react'
import PropTypes from 'prop-types'

import styles from './TopNotes.css'

const TopNotes = (props) => (
  <div className={styles.topNotesContainer}>
    <div className={styles.topNotesTitle}>Bästa dagar</div>
    <div className={styles.topNoteList}>
      <div className={styles.topNotesLeft}>
        <div className={styles.topNotesListIcon}><i className='far fa-calendar-alt' /></div>
        {props.notes.map((e, i) => (
          <div className={styles.topNotesDate} key={i}>{e.date}</div>
        ))}
      </div>
      <div className={styles.topNotesRight}>
        <div className={styles.topNotesListIcon}><i className='fas fa-users' /></div>
        {props.notes.map((e, i) => (
          <div className={styles.topNotesTop} key={i}>{e.count}</div>
        ))}
      </div>
    </div>
  </div>
)

TopNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    count: PropTypes.number
  })).isRequired
}

export default TopNotes
