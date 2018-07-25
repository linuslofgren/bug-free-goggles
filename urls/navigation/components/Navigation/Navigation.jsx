import React from 'react'

import styles from './Navigation.css'

const Navigation = () => (
  <div className={styles.navigation}>
    <div className={styles.header}>Sidebar</div>
    <div className={styles.section}>
      <div className={styles.sub}>Meny</div>
      <div className={`${styles.item} ${styles.selected}`}>Dashboard</div>
      <div className={styles.item}>Statics</div>
      <div className={styles.item}>Månadsrapport</div>
      <div className={styles.item}>Inställningar</div>
    </div>
  </div>
)

export default Navigation
