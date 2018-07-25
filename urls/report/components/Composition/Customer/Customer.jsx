import React from 'react'
import PropTypes from 'prop-types'

import styles from './Customer.css'

const Customer = ({ className, ...props }) => (
  <img className={`${styles.logo} ${className}`} {...props} />
)

Customer.propTypes = {
  src: PropTypes.string.isRequired
}

export default Customer
