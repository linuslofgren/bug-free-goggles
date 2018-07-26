import React from 'react'
import { connect } from 'react-redux'

import Controls from './Controls/Controls'
import Paper from './Paper/Paper'
import HeaderContainer from './Header/HeaderContainer'
import Divider from './Divider/Divider'
import Column from './Column/Column'
import DescriptionContainer from './Description/DescriptionContainer'
import BubblesContainer from './Bubbles/BubblesContainer'
import SpeedGaugeContainer from './SpeedGauge/SpeedGaugeContainer'
import Comment from './Comment/Comment'
import CountChartContainer from './charts/CountChart/CountChartContainer'
import CountHistoryChartContainer from './charts/CountHistoryChart/CountHistoryChartContainer'
import PositionChartContainer from './charts/PositionChart/PositionChartContainer'
import Map from './Map/Map'
import Logo from './Logo/Logo'
import Customer from './Customer/Customer'
import HelpDialog from './HelpDialog/HelpDialog'

import styles from './Composition.css'

import { fetchData } from '../../actions'

class Composition extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }
  render () {
    return (
      <div className={styles.backgroundPage}>
        { this.props.fetching ? (<div className={styles.overlay}><HelpDialog /></div>) : null}
        <Controls />
        <Paper className={styles.paper}>
          <Customer src={'http://www.kungalv.se/siteassets/bilder/kommun-och-politik/loggor/stora/sv_hoger_jpg.jpg'} />
          <HeaderContainer />
          <Divider>
            <Column>
              <DescriptionContainer />
              <BubblesContainer />
              <SpeedGaugeContainer className={styles.speedGauge} />
              <Comment />
            </Column>
            <Column>
              <CountChartContainer />
              <CountHistoryChartContainer />
            </Column>
            <Column>
              <PositionChartContainer />
              <Map />
            </Column>
          </Divider>
          <Logo />
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    helping: state.filter.helping,
    fetching: state.filter.fetching
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Composition)
