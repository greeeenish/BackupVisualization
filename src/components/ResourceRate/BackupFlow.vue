<template>
  <div>
    <div class="chart_title">备份流量<span>单位：MB/s</span></div>
    <div class="chart_chart" id="backup_flow"></div>
  </div>
</template>

<script>
  export default {
    name: "BackupFlow",
    data() {
      return {
        data: [

        ],

      }
    },
    methods: {
      drawChart() {
        const echarts = require('echarts')
        const myChart = echarts.init(document.getElementById('backup_flow'))

        const option = {
          grid: {
            left: '0',
            right: '2%',
            bottom: '14%',
            top:'16%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              lineStyle: {
                color: '#002f48'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#003550',
                type: 'dash'
              }
            },
            axisLabel: {
              formatter: '{value}',
              color: '#00e7df'
            }
          },
          series: [{
            data: [20, 30, 25, 55, 18, 30, 22],
            type: 'line',
            symbol: 'none',
            lineStyle: {
              color: '#00e7df'
            },
            areaStyle: {
              color: '#00e7df',
              opacity: 0.3
            },
          }]
        };
        myChart.setOption(option);
        window.addEventListener('resize',()=>{myChart.resize()})
      }
    },
    mounted() {
      this.drawChart()
    }
  }
</script>

<style scoped lang="less">
  .chart_chart {
    height: 230px;
  }
  .chart_title {
    span {
      font-size: 26px;
      color: #3aa0ee ;
      /*float: right;*/
      /*position: relative;*/
      vertical-align: bottom;
      font-weight: normal;
      margin-top: 24px;
      margin-left: 320px;
    }
  }
</style>