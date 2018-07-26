import React from 'react'
import PropTypes from 'prop-types'

import styles from './CountChart.css'
import BaseChart from '../BaseChart/BaseChart'

class CountChart extends React.Component {
  constructor (props) {
    super(props)
    this.chartOptions = {
      type: 'roundedHorizontalBar',
      data: {
        labels: ['Gång', 'Cykel', 'Bil'],
        datasets: [{
          label: 'Denna månaden',
          data: this.props.thisMonth,
          backgroundColor: 'rgba(0, 154, 239, 1)'
        },
        {
          label: 'Förra månaden',
          data: this.props.lastMonth,
          backgroundColor: 'rgba(0, 100, 180, 1)'
        },
        {
          label: 'Samma månad förra året',
          data: this.props.sameMonth,
          backgroundColor: 'rgba(0, 55, 94, 1)'
        }
        ]
      },
      options: {
        barRoundness: 1,
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            barPercentage: 0.7,
            categoryPercentage: 0.6,
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  }
  gradient (ctx, width, height, i) {
    const g = ctx.createLinearGradient(0, 0, width, 0)
    switch (i) {
      case 0: {
        g.addColorStop(1, 'rgba(0, 154, 239, 1)')
        g.addColorStop(0, 'rgba(0, 154, 239, 1)')
        break
      }
      case 1: {
        g.addColorStop(1, 'rgba(0, 154, 239, 1)')
        g.addColorStop(0, 'rgba(0, 100, 180, 1)')
        break
      }
      case 2: {
        g.addColorStop(1, 'rgba(0, 154, 239, 1)')
        g.addColorStop(0, 'rgba(0, 55, 94, 1)')
        break
      }
      default: {
        g.addColorStop(1, 'rgba(0, 154, 239, 1)')
        g.addColorStop(0, 'rgba(0, 55, 94, 1)')
        break
      }
    }
    return g
  }
  render () {
    const types = this.props.types
    const labelsList = []
    this.chartOptions.data.datasets[0].data = []
    this.chartOptions.data.datasets[1].data = []
    this.chartOptions.data.datasets[2].data = []
    if (types.indexOf('ped') !== -1) {
      labelsList.push('Gång')
      this.chartOptions.data.datasets[0].data.push(this.props.thisMonth[0])
      this.chartOptions.data.datasets[1].data.push(this.props.lastMonth[0])
      this.chartOptions.data.datasets[2].data.push(this.props.sameMonth[0])
    }
    if (types.indexOf('cyc') !== -1) {
      labelsList.push('Cykel')
      this.chartOptions.data.datasets[0].data.push(this.props.thisMonth[1])
      this.chartOptions.data.datasets[1].data.push(this.props.lastMonth[1])
      this.chartOptions.data.datasets[2].data.push(this.props.sameMonth[1])
    }
    if (types.indexOf('car') !== -1) {
      labelsList.push('Bil')
      this.chartOptions.data.datasets[0].data.push(this.props.thisMonth[2])
      this.chartOptions.data.datasets[1].data.push(this.props.lastMonth[2])
      this.chartOptions.data.datasets[2].data.push(this.props.sameMonth[2])
    }
    this.chartOptions.data.labels = labelsList
    return (
      <div>
        <div className={styles.countContainer}>
          <BaseChart gradient={this.gradient} chartOptions={this.chartOptions}>Antal fotgängare, cyklister och bilar som har passerat.</BaseChart>
          <div className={styles.infoContainer}>
            <div className={[styles.info, styles.light].join(' ')}>{this.props.month}</div>
            <div className={[styles.info, styles.medium].join(' ')}>Månaden innan</div>
            <div className={[styles.info, styles.dark].join(' ')}>{this.props.month} förra året</div>
          </div>
        </div>
      </div>
    )
  }
}

CountChart.propTypes = {
  month: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  thisMonth: PropTypes.arrayOf(PropTypes.number),
  lastMonth: PropTypes.arrayOf(PropTypes.number),
  sameMonth: PropTypes.arrayOf(PropTypes.number)
}

export default CountChart
