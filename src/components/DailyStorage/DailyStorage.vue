<template>
  <div class="chart_wrap">
    <div class="chart_container">
      <div class="chart_title">每日存储使用</div>
      <div class="chart_chart" id="daily_storage"></div>
    </div>
    <div class="chart_background"></div>
  </div>
</template>

<script>
  export default {
    name: "DailyStorage",
    data() {
      return {
        data: [],

      }
    },
    methods: {
      drawChart() {
        const echarts = require('echarts')
        const myChart = echarts.init(document.getElementById('daily_storage'))

        const option = {
          grid: {
            left: '4%',
            right: '4%',
            bottom: '5%',
            top:'16%',
            containLabel: true
          },
          legend: {
            data: ['已使用(单位:TB)'],
            textStyle: {
              color: '##3aa0ee',
              fontSize: '26px',

            },
            icon: 'roundRect',
            itemWidth: 14,
            right: '4%',
            top: '2%'
          },
          xAxis:  {
            type: 'value',
            axisTick : {show: false},
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            },
          },
          yAxis: [
            {
              type: 'category',
              axisTick : {show: false},
              axisLine: {
                show: false,
              },
              axisLabel: {
                show: true,
                color: '#3aa0ee'
              },
              data: ['5月18日','5月19日','5月20日','5月21日','5月22日','5月23日','5月24日','5月25日']
            },
            {
              type: 'category',
              axisLine: {show:false},
              axisTick: {show:false},
              axisLabel: {show:false},
              splitArea: {show:false},
              splitLine: {show:false},
              data: ['5月18日','5月19日','5月20日','5月21日','5月22日','5月23日','5月24日','5月25日']
            },

          ],
          series: [
            {
              name: '总空间',
              type: 'bar',
              itemStyle:{
                normal: {
                  show: true,
                  color: '#293a43',
                  barBorderRadius:50,
                }
              },
              barWidth: '45%',
              barGap:'5%',
              barCategoryGap:'50%',
              silent: true,
              data: [3, 3, 3, 3, 3, 3, 3, 3],
            },
            {
              name: '已使用(单位:TB)',
              type: 'bar',
              yAxisIndex:1,
              itemStyle:{
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#00ddff'
                }, {
                  offset: 1,
                  color: '#007db8'
                }]),
                barBorderRadius:5,
                borderWidth:0,
                borderColor:'#333',
                shadowColor: '#000',
                shadowBlur: 100,
              },
              label: {
                show: true,
                formatter: '{c}TB已使用',
                color: '#fff',
                position: 'insideLeft',
                padding: [5,0,0,2],
              },
              barWidth: '70%',
              barGap:'0%',
              barCategoryGap:'50%',
              data: [1.68, 1.28, 1.02, 0.96, 1.08, 0.88, 0.61, 0.49].reverse()
            }
          ]
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
    height: 620px;
    padding: 50px;
  }
  .chart_background {
    height: 720px;
    width: 800px;
  }
  .chart_chart {
    height: 570px;
    width: 700px;
  }
</style>