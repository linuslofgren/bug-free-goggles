import React from 'react'
import PropTypes from 'prop-types'

import styles from './Description.css'

const Description = ({ description }) => (
  <div className={styles.description}>
    {description}
  </div>
)

Description.propTypes = {
  description: PropTypes.string
}

export default Description
