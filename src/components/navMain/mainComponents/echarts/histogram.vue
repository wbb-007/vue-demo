<template>
  <div id="main" ref="chart"/>
</template>
<script>

var echarts = require('echarts')
export default {
  data() {
    return {
      option: {

        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            areaStyle: {}
          },
          {
            data: [25, 14, 23, 35, 10],
            type: 'line',
            areaStyle: {
              color: '#ff0',
              opacity: 0.5
            }
          }
        ]
      }
    }
  },
  mounted() {
    echarts.init(this.$refs.chart).setOption(this.option)
  }
}
</script>
<style>
#main{
    width: 500px;
}
</style>
