import React from 'react'

import styles from './CountHistoryChart.css'
import BaseChart from '../BaseChart/BaseChart'

export default class CountHistoryChart extends React.Component {
  constructor (props) {
    super(props)
    this.chartRef = React.createRef()
    this.chartOptions = {
      type: 'NegativeTransparentLine',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        datasets: [{
          yAxisID: 'y-axis-0',
          label: '% skillnad från förra året',
          data: this.props.data,
          borderColor: 'rgba(0, 104, 189, 1)',
          borderWidth: 5,
          backgroundColor: 'rgba(255, 118, 0, 1)',
          pointBorderColor: 'rgba(255, 118, 0, 1)',
          pointRadius: 4,
          pointBorderWidth: 0,
          fill: true
        }
        ]
      },
      options: {
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
            labelTextColor: function (e) {
              // return e.yLabel < 0 ? 'rgb(224, 137, 123)' : 'white'
              return 'white'
            },
            title: function (e, j) {
              return null
            },
            label: function (e, j) {
              return `${e.yLabel > 0 ? `+${e.yLabel}%` : `${e.yLabel}%`} jämfört med förra ${e.xLabel}`
            }
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true
            },
            ticks: {
              // min: -100,
              // max: 100,
              maxTicksLimit: 6,
              callback: function (value) {
                return `${value > 0 ? '+' : ''}${value}%`
              }
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 12,
              fontFamily: 'Lato',
              maxRotation: 0
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  }
  render (props) {
    this.chartOptions.data.datasets[0].data = this.props.data
    return (
      <div className={styles.historyContainer}>
        <BaseChart chartOptions={this.chartOptions}>Antal besökare i år jämfört med förra året</BaseChart>
      </div>
    )
  }
}
