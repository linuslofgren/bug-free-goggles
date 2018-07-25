import React from 'react'

import styles from './Column.css'

const Column = (props) => (
  <div className={styles.column}>
    {props.children}
  </div>
)
export default Column
