<template>
  <div class="chart_wrap">
    <div class="chart_container">
      <div class="chart_title">灾备任务</div>
      <div class="chart_chart" id="task_statistic"></div>
    </div>
    <div class="chart_background"></div>
  </div>
</template>

<script>
  export default {
    name: "TaskStatistic",
    data() {
      return {
        data: [
          {value:45, name:'高可用'},
          {value:40, name:'恢复任务'},
          {value:50, name:'备份任务',},
        ],

      }
    },
    methods: {
      drawChart() {
        const echarts = require('echarts')
        const myChart = echarts.init(document.getElementById('task_statistic'))

        const option = {
          grid: {
            left: '10%',
            right: '10%',
            bottom: '8%',
            top:'0%',
            containLabel: true
          },
          legend: {
            orient: 'vertical',
            right: '4%',
            bottom: '10%',
            textStyle: {
              color: '#3aa0ee',

            },
            data: [
              { name: '恢复任务', icon: 'circle' },
              { name: '备份任务', icon: 'circle' },
              { name: '高可用', icon: 'circle' },
            ]
          },
          color: ["#008a7b", "#00979f", "#00e089"],
          series : [
            {
              name: '',
              type: 'pie',
              radius : '60%',
              center: ['42%', '50%'],
              data: this.data,
              itemStyle: {
                normal: {
                  borderColor: '#000',
                  shadowColor: '#000',
                  shadowBlur: 100,
                }
              },
              label: {
                formatter: '{b}:{c}',
                align: 'right',
                borderColor: '#008a7b',
                borderWidth: 1,
                fontSize: 12,
                padding: [4,1,2,1]
              },
              labelLine: {
                show: true,
                length: 4,
                length2: 4
              }
            }
          ]
        }
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
    height: 440px;
    padding: 50px;
  }
  .chart_background {
    height: 540px;
    width: 800px;
  }
  .chart_chart {
    width: 800px;
    height: 390px;
    position: relative;
    left: -50px;
  }
</style>