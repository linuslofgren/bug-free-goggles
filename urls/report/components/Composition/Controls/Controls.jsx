import React from 'react'
import { connect } from 'react-redux'

import EditTitle from './EditTitle/EditTitle'
import NameChanger from './NameChanger/NameChanger'
import DateChanger from './DateChanger/DateChanger'
import TypeChanger from './TypeChanger/TypeChanger'
import Help from './Help/Help'
// import CommentChanger from './CommentChanger/CommentChanger'

import { openHelp } from '../../../actions'

import styles from './Controls.css'

const Controls = ({openHelp, ...props}) => (
  <div className={styles.controlsContainer}>
    <div className={styles.controlsOuter}>
      <EditTitle>Månadsrapport <Help onClick={openHelp} className={styles.helpButton} /></EditTitle>
      <div className={styles.controls}>

        <span className={[styles.text, styles.leftText].join(' ')}>Plats:</span>
        <NameChanger />

        <span className={[styles.text, styles.middleText].join(' ')}>Månad:</span>
        <DateChanger />
        <div className={styles.filterControls}>
          <TypeChanger type={'ped'}><span className={[styles.text].join(' ')}>Fotgängare</span></TypeChanger>
          <TypeChanger type={'cyc'}><span className={[styles.text].join(' ')}>Cyklister</span></TypeChanger>
          <TypeChanger type={'car'}><span className={[styles.text].join(' ')}>Fordon</span></TypeChanger>
        </div>
        <div className={styles.right}><div className={styles.download} onClick={window.print}><div className={[styles.text].join(' ')}>Ladda ner rapport</div></div></div>
      </div>
    </div>
  </div>
)
const mapDispatchToProps = (dispatch) => {
  return {
    openHelp: () => {
      dispatch(openHelp())
    }
  }
}

export default connect(null, mapDispatchToProps)(Controls)
