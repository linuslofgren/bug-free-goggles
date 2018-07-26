/* global Chart */
import React from 'react'

import styles from './BaseChart.css'

export default class CountChart extends React.Component {
  constructor (props) {
    super(props)
    this.chartRef = React.createRef()
  }
  componentDidMount () {
    const chartE = this.chartRef.current
    const ctx = chartE.getContext('2d')
    this.chart = new Chart(ctx, this.props.chartOptions)
  }
  render () {
    if (this.props.gradient && this.chartRef.current) {
      const chartE = this.chartRef.current
      const ctx = chartE.getContext('2d')
      for (var i = 0; i < this.chart.config.data.datasets.length; i++) {
        const grad = this.props.gradient(ctx, chartE.width, this.chart.canvas.height, i)

        this.chart.config.data.datasets[i].backgroundColor = grad
        this.chart.config.data.datasets[i].hoverBackgroundColor = grad
        this.chart.config.data.datasets[i].borderColor = grad
      }
    }
    if (this.chart) {
      this.chart.update()
    }

    return (
      <div className={styles.baseContainer}>
        <div className={styles.baseTitle}>{this.props.children}</div>
        <canvas ref={this.chartRef} />
      </div>
    )
  }
}

Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
  draw: function () {
    var ctx = this._chart.ctx
    var view = this._view
    var x, y, height, width

    x = view.x - view.width / 2
    y = view.y
    height = view.base - y
    width = view.width

    var roundness = this._chart.config.options.barRoundness || 0.5
    var curveHeight = width * roundness * 0.5

    ctx.fillStyle = view.backgroundColor
    ctx.beginPath()
    // Top left is (0, 0)
    // curveHeight is the height of the rounded tip, ie. y + curveHeight = top of the square under the rounded tip
    // Start in the middle (top)
    ctx.moveTo(x + width / 2, y)
    // Curve from middle top to right
    ctx.bezierCurveTo(x + width / 2 + width / 4, y, x + width, y + curveHeight / 2, x + width, y + curveHeight)
    // Line down to bottom right
    ctx.lineTo(x + width, y + height)
    // Line left to bottom left
    ctx.lineTo(x, y + height)
    // Line up to top left (under the tip)
    ctx.lineTo(x, y + curveHeight)
    // Curve from left back to middle (top)
    ctx.bezierCurveTo(x, y + curveHeight / 2, x + width / 2 - width / 4, y, x + width / 2, y)
    ctx.fill()
  }
})
Chart.elements.RoundedRightRectangle = Chart.elements.Rectangle.extend({
  draw: function () {
    var ctx = this._chart.ctx
    var view = this._view
    var x, y, height

    x = view.x
    y = view.y + view.height / 2
    height = view.height

    var roundness = this._chart.config.options.barRoundness || 0.5
    var curveHeight = height * roundness * 0.5

    ctx.fillStyle = view.backgroundColor
    ctx.beginPath()
    // Top left is (0, 0)
    // curveHeight is the height of the rounded tip, ie. x - curveHeight = right of the square left of the rounded tip
    // Start in the middle (right)
    // console.log(x, width, height, y ,curveHeight);
    ctx.moveTo(x, y - height / 2)
    // Curve from middle right to bottom
    ctx.bezierCurveTo(x, y - height / 4, x - curveHeight / 2, y, x - curveHeight, y)
    // Line to left bottom
    ctx.lineTo(0, y)
    // Line to left top
    ctx.lineTo(0, y - height)
    // Line to right top (under the tip)
    ctx.lineTo(x - curveHeight, y - height)
    // Curve from right top to middle (top)
    ctx.bezierCurveTo(x - curveHeight / 2, y - height, x, y - height / 2 - height / 4, x, y - height / 2)
    ctx.fill()
  }
})

Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar)
Chart.controllers.roundedBar = Chart.controllers.bar.extend({
  dataElementType: Chart.elements.RoundedTopRectangle
})

Chart.defaults.roundedHorizontalBar = Chart.helpers.clone(Chart.defaults.horizontalBar)
Chart.controllers.roundedHorizontalBar = Chart.controllers.horizontalBar.extend({
  dataElementType: Chart.elements.RoundedRightRectangle
})
