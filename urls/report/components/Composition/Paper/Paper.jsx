import React from 'react'

import styles from './Paper.css'

const Paper = ({className, ...props}) => (
  <div className={`${styles.paper} ${className}`} {...props} />
)
export default Paper
