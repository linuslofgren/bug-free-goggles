import React from 'react'

import styles from './EditTitle.css'

const EditTitle = (props) => (
  <div className={styles.title}>
    {props.children}
  </div>
)
export default EditTitle
