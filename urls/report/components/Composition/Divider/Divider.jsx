import React from 'react'

import styles from './Divider.css'

const Divider = (props) => (
  <div className={styles.dividerContainer}>
    {props.children.map((e, i) => (
      <div className={styles.dividerChild} key={i}>{e}</div>
    ))}
  </div>
)
export default Divider
