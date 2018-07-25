import React from 'react'

import styles from './Help.css'

const Help = ({className, ...props}) => (
  <div className={`${className} ${styles.help}`} {...props}><p>?</p></div>
)

export default Help
