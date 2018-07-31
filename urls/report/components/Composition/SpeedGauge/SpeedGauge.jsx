import React from 'react'
import PropTypes from 'prop-types'

import styles from './SpeedGauge.css'

const SpeedGauge = ({className, ...props}) => (
  <div className={`${styles.speedContainerContainer} ${className}`}>
    <div className={styles.speedContainer}>
      <div className={[styles.speedPart, styles.speedBicycle].join(' ')}>
        <img className={styles.icon} src='http://0.0.0.0:8008/urls/report/ikoner/vis_bike_fatResurs%209%404x.png' />

        <div>{props.bic} km/h</div>
        <div className={styles.speedTop}>medel</div>
      </div>
      <div className={[styles.speedPart, styles.speedCar].join(' ')}>
        <img className={styles.icon} src='http://0.0.0.0:8008/urls/report/ikoner/vis_car_fatResurs%2010%404x.png' />

        <div>{props.car} km/h</div>
        <div className={styles.speedTop}>medel</div>
      </div>
      <div className={[styles.speedPart, styles.speedCarFast].join(' ')}>
        <img className={styles.icon} src='http://0.0.0.0:8008/urls/report/ikoner/vis_carspeed_fatResurs%2011%404x.png' />

        <div>{props.carFast} km/h</div>
        <div className={styles.speedTop}>85-percentil</div>
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
