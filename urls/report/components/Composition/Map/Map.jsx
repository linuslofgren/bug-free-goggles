import React from 'react'
import { connect } from 'react-redux'
import Arrow from './Arrow/Arrow'
import Compass from './Compass/Compass'

import styles from './Map.css'

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.hasLoaded = false
    this.mapRef = React.createRef()
    this.rotation = 0
  }
  componentDidMount () {
    this.rotation = angleBetweenPoints(this.props.pointA, this.props.pointB)
    if (this.mapRef.current) {
      this.mapRef.current.style = cssForRotation(this.rotation)
    }
  }
  calcAndSetRotation (pointA, pointB) {
    this.rotation = angleBetweenPoints(pointA, pointB)
  }
  render () {
    this.rotation = angleBetweenPoints(this.props.pointA, this.props.pointB)
    if (this.mapRef.current) {
      this.mapRef.current.style = cssForRotation(this.rotation)
    }
    // <div className={styles.map} ref={this.mapRef}><img src={`https://maps.googleapis.com/maps/api/staticmap?center=${pointA.lat},${pointA.lng}&zoom=17&size=300x300&key=AIzaSyByO-GirC4xMk855AHEz07HjXvFGQN1gWA`} /></div>
    return (<div className={styles.mapContainer}>
      <Arrow />
      <Compass heading={this.rotation} />
      <div className={styles.map} ref={this.mapRef}><img className={styles.image} src='http://0.0.0.0:8008/urls/report/staticmap.png' /></div>
    </div>)
  }
}
function cssForRotation (rotation) {
  return 'transform: rotate(' + (360 - rotation + 90) + 'deg)'
}
function angleBetweenPoints (pointA, pointB) {
  const φ1 = pointA.lat
  const φ2 = pointB.lat
  const λ1 = pointA.lng
  const λ2 = pointB.lng
  var y = Math.sin(λ2 - λ1) * Math.cos(φ2)
  var x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1)
  var brng = Math.atan2(y, x)
  const rotation = (((brng / (2 * Math.PI)) * 360) + 360) % 360
  return rotation
}

const mapStateToProps = state => {
  return {
    pointA: state.data.pointA,
    pointB: state.data.pointB
  }
}

export default connect(mapStateToProps)(Map)
