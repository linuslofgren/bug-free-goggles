import React from 'react'

import styles from './HelpDialog.css'

const HelpDialog = () => (
  <div className={styles.helper}><span>Laddar...</span><img className={styles.spinner} src={'https://i.imgur.com/8YsAmq3.gif'} /></div>
)

export default HelpDialog
