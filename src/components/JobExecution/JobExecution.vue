<template>
  <div class="chart_wrap">
    <div class="chart_container">
      <div class="chart_title">每日作业执行</div>
      <p class="subtitle">展示：近五天统计</p>
      <div class="chart_chart" id="job_execution"></div>
    </div>
    <div class="chart_background"></div>
  </div>
</template>

<script>
  export default {
    name: "JobExecution",
    data() {
      return {
        data: [

        ],

      }
    },
    methods: {
      drawChart() {
        const echarts = require('echarts')
        const myChart = echarts.init(document.getElementById('job_execution'))

        const option = {
          // title: {
          //   text: '展示：近五天统计',
          //   textStyle: {
          //     color: '#0098e7',
          //     fontSize: '26px',
          //   },
          //   x: '64%',
          // },
          grid: {
            left: '2%',
            right: '3%',
            bottom: '8%',
            top:'25%',
            containLabel: true
          },
          legend: {
            data: ['执行成功', '执行失败'],
            right: 0,
            top:'10%',
            textStyle: {
              color: "#0098e7"
            },
            itemWidth: 12,
          },
          xAxis: {
            type: 'category',
            data: ['5月21日','5月22日','5月23日','5月24日','5月25日',],
            axisLine: {
              lineStyle: {
                color: '#002f48'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: '#0098e7'
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
              show: false
            }
          },
          series: [
            {
              name: '执行成功',
              type: 'bar',
              barWidth: '20%',
              label: {
                show: true,
                position: 'top',
                color: '#ffffff'
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00f1c4'
                  }, {
                    offset: 1,
                    color: '#00e598'
                  }]),
                  barBorderRadius: 4,
                },
              },
              data: [42, 33, 30, 43, 35]
            },
            {
              name: '执行失败',
              type: 'bar',
              barWidth: '20%',
              label: {
                show: true,
                position: 'top',
                color: '#5589c4'
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#015483'
                  }, {
                    offset: 1,
                    color: '#002b44'
                  }]),
                  barBorderRadius: 4,
                }
              },
              data: [2, 2, 3, 2, 1]
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

<style scoped>
  .chart_wrap {
    height: 590px;
    padding: 50px;
  }
  .chart_background {
    height: 690px;
    width: 800px;
  }
  .chart_chart {
    height: 540px;
    width: 700px;
  }
  .subtitle {
    color: #0098e7;
    font-size: 26px;
    position: absolute;
    top: 70px;
    right: 15px;
    margin: 0;
  }
</style>