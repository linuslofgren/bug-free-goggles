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
      const grad = ctx.createLinearGradient(0, 0, 0, chartE.height)
      grad.addColorStop(0, this.props.gradient[0])
      grad.addColorStop(1, this.props.gradient[1])

      this.chart.config.data.datasets[0].backgroundColor = grad
      this.chart.config.data.datasets[0].hoverBackgroundColor = grad
      // console.log(this.chart);
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
Chart.defaults.NegativeTransparentLine = Chart.helpers.clone(Chart.defaults.line);
Chart.controllers.NegativeTransparentLine = Chart.controllers.line.extend({
    update: function () {
      console.log("CHART");
        // get the min and max values
        var min = Math.min.apply(null, this.chart.data.datasets[0].data);
        var max = Math.max.apply(null, this.chart.data.datasets[0].data);
        var yScale = this.getScaleForId(this.getDataset().yAxisID);

        // figure out the pixels for these and the value 0
        var top = yScale.getPixelForValue(max);
        var zero = yScale.getPixelForValue(0);
        var bottom = yScale.getPixelForValue(min);

        // build a gradient that switches color at the 0 point
        var ctx = this.chart.chart.ctx;
        var gradient = ctx.createLinearGradient(0, top, 0, bottom);
        const b = (zero - top) === 0 || (bottom - top) === 0
        console.log(b);
        var ratio = b ? 1 : ((zero - top)/(bottom - top))
        console.log(ratio);
        gradient.addColorStop(0, 'rgba(75,192,192,0.4)');
        gradient.addColorStop(ratio, 'rgba(75,192,192,0.4)');
        gradient.addColorStop(ratio, 'rgba(255,0,0,.6)');
        gradient.addColorStop(1, 'rgba(255,0,0,.6)');
        this.chart.data.datasets[0].backgroundColor = gradient;

        return Chart.controllers.line.prototype.update.apply(this, arguments);
    }
});

// Add rounded chart
// draws a rectangle with a rounded top
Chart.helpers.drawRoundedTopRectangle = function(ctx, x, y, width, height, radius) {
  // console.log(x,y,width,height,radius);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  // top right corner
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  // bottom right   corner
  ctx.lineTo(x + width, y + height);
  // bottom left corner
  ctx.lineTo(x, y + height);
  // top left
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
  draw: function() {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped;
    var borderWidth = vm.borderWidth;

    if (!vm.horizontal) {
      // bar
      left = vm.x - vm.width / 2;
      right = vm.x + vm.width / 2;
      top = vm.y;
      bottom = vm.base;
      signX = 1;
      signY = bottom > top? 1: -1;
      borderSkipped = vm.borderSkipped || 'bottom';
    } else {
      // horizontal bar
      left = vm.base;
      right = vm.x;
      top = vm.y - vm.height / 2;
      bottom = vm.y + vm.height / 2;
      signX = right > left? 1: -1;
      signY = 1;
      borderSkipped = vm.borderSkipped || 'left';
    }

    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
      // borderWidth shold be less than bar width and bar height.
      var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
      borderWidth = borderWidth > barSize? barSize: borderWidth;
      var halfStroke = borderWidth / 2;
      // Adjust borderWidth when bar top position is near vm.base(zero).
      var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
      var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
      var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
      var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
      // not become a vertical line?
      if (borderLeft !== borderRight) {
        top = borderTop;
        bottom = borderBottom;
      }
      // not become a horizontal line?
      if (borderTop !== borderBottom) {
        left = borderLeft;
        right = borderRight;
      }
    }

    // calculate the bar width and roundess
    var barWidth = Math.abs(left - right);
    var roundness = this._chart.config.options.barRoundness || 0.5;
    var radius = barWidth * roundness * 0.5;

    // keep track of the original top of the bar
    var prevTop = top;

    // move the top down so there is room to draw the rounded top
    top = prevTop + radius;
    // var barRadius = top - prevTop;

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;

    // draw the rounded top rectangle
    Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - radius + 1), barWidth, bottom - prevTop, radius);

    ctx.fill();
    if (borderWidth) {
      ctx.stroke();
    }

    // restore the original top value so tooltips and scales still work
    // top = prevTop;
  },
});
Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

Chart.controllers.roundedBar = Chart.controllers.bar.extend({
  dataElementType: Chart.elements.RoundedTopRectangle
});
