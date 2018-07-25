import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.css'

// import store from '../../../store'

const Header = ({name, month, year}) => (
  <div className={styles.head}>
    <div className={styles.topContainer}>
      <h1 className={styles.header}>{name}</h1>
    </div>
    <h3 className={styles.sub}>{month} {year}</h3>
  </div>
)

Header.propTypes = {
  name: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string
}

export default Header
