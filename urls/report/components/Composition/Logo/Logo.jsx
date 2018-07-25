import React from 'react'

import styles from './Logo.css'

const Logo = () => (
  <div className={styles.logo}>
    <span>Powered by</span><img className={styles.logoImg} src={'http://media1.sverigescentrumutvecklare.se/2018/04/Viscando-logo-cmyk_padded_small.png'} />
  </div>
)
export default Logo
