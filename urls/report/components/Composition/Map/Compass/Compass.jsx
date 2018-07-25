import React from 'react'

import styles from './Compass.css'

const Compass = (props) => (
  <div style={{transform: 'rotate(' + (360 - props.heading + 90) + 'deg)'}} className={styles.compass}>
    <div className={styles.north} />
    <div className={styles.south} />
  </div>
)
export default Compass
