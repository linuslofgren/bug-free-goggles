import React from 'react'

import styles from './PositionChart.css'
import BaseChart from '../BaseChart/BaseChart'
import Arrow from './Arrow/Arrow'

export default class PositionChart extends React.Component {
  constructor (props) {
    super(props)
    this.chartOptions = {
      type: 'roundedBar',
      data: {
        labels: [''].concat(Array(this.props.data.length - 2).fill('')).concat(['']),
        datasets: [{
          label: 'Denna månaden',
          data: this.props.data,
          backgroundColor: 'rgba(0, 100, 180, 1)'
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
        tooltips: {
          mode: 'nearest',
          intersect: true,
          displayColors: false,
          callbacks: {
            title: function (e, j) {
              return null
            },
            label: function (e, j) {
              return `${e.yLabel} passager ${e.index} meter från ${j.labels[0]}`
            }
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              fontSize: 18,
              fontColor: 'rgb(255, 118, 0)',
              padding: 20,
              fontFamily: 'Lato',
              maxRotation: 0
            }
          }]
        }
      }
    }
  }
  render () {
    this.chartOptions.data.datasets[0].data = this.props.data
    return (
      <div className={styles.positionContainer}>
        <BaseChart gradient={['rgba(0, 154, 239, 1)', 'rgba(0, 100, 180, 1)']} chartOptions={this.chartOptions}>Fördelning av besökare över gatan</BaseChart>
        <Arrow right />
      </div>
    )
  }
}
