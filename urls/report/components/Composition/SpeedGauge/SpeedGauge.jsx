import React from 'react'
import PropTypes from 'prop-types'

import styles from './SpeedGauge.css'

const SpeedGauge = ({className, ...props}) => (
  <div className={`${styles.speedContainerContainer} ${className}`}>
    <div className={styles.speedContainer}>
      <div className={[styles.speedPart, styles.speedBicycle].join(' ')}>
        <div className={styles.speedTop}>cykel</div>
        <div>{props.bic} km/h</div>
      </div>
      <div className={[styles.speedPart, styles.speedCar].join(' ')}>
        <div className={styles.speedTop}>medel</div>
        <div>{props.car} km/h</div>
      </div>
      <div className={[styles.speedPart, styles.speedCarFast].join(' ')}>
        <div className={styles.speedTop}>85-percentil</div>
        <div>{props.carFast} km/h</div>
      </div>
      {props.children}
    </div>
  </div>
)

SpeedGauge.propTypes = {
  bic: PropTypes.number,
  car: PropTypes.number,
  carFast: PropTypes.number
}

export default SpeedGauge
