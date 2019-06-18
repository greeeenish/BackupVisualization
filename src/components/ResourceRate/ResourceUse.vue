<template>
  <div class="clearfix">
    <div class="chart_title">资源使用率</div>
    <div class="detail clearfix">
      <div><p>内存</p>
        {{this.memory.use}}MB可用(共{{this.memory.all}}MB)
      </div>
      <div><p>CPU</p>
        {{this.cpu.use}}MHz可用(共{{this.cpu.all}}MHz)
      </div>
    </div>
    <div class="chart_chart" id="memory_use"></div>
    <div class="chart_chart" id="cpu_use"></div>
  </div>
</template>

<script>
  export default {
    name: "ResourceUse",
    data() {
      return {
        memory: {
          use: 900,
          all: 2048
        },
        cpu: {
          use: 1628,
          all: 2048
        }
      }
    },
    methods: {
      drawChart() {
        const echarts = require('echarts')
        const memory_use = echarts.init(document.getElementById('memory_use'))
        const cpu_use = echarts.init(document.getElementById('cpu_use'))
        const meory_option = {
          grid: {
            left: '0',
            right: '0',
            bottom: '18%',
            top:'2%',
            containLabel: true
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
              axisLine: {show:false},
              axisTick: {show:false},
              axisLabel: {show:false},
              splitArea: {show:false},
              splitLine: {show:false},
              data: ['memory']
            },
            {
              type: 'category',
              axisLine: {show:false},
              axisTick: {show:false},
              axisLabel: {show:false},
              splitArea: {show:false},
              splitLine: {show:false},
              data:['memory']
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
                  barBorderRadius:5,
                }
              },
              barWidth: '40%',
              silent: true,
              data: [this.memory.all]
            },
            {
              name: '已使用',
              type: 'bar',
              yAxisIndex:1,
              itemStyle:{
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#ffd960'
                }, {
                  offset: 1,
                  color: '#dc692a'
                }]),
                barBorderRadius:5,
                borderWidth:0,
                borderColor:'#333',
                shadowColor: '#000',
                shadowBlur: 100,
              },
              barWidth: '45%',
              data: [this.memory.use]
            }
          ]
        };
        const cpu_option = {
          grid: {
            left: '0',
            right: '0',
            bottom: '18%',
            top:'2%',
            containLabel: true
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
              axisLine: {show:false},
              axisTick: {show:false},
              axisLabel: {show:false},
              splitArea: {show:false},
              splitLine: {show:false},
              data: ['memory']
            },
            {
              type: 'category',
              axisLine: {show:false},
              axisTick: {show:false},
              axisLabel: {show:false},
              splitArea: {show:false},
              splitLine: {show:false},
              data:['memory']
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
                  barBorderRadius:5,
                }
              },
              barWidth: '40%',
              silent: true,
              data: [this.cpu.all]
            },
            {
              name: '已使用',
              type: 'bar',
              yAxisIndex:1,
              itemStyle:{
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#00ddff'
                }, {
                  offset: 1,
                  color: '#006ba9'
                }]),
                barBorderRadius:5,
                borderWidth:0,
                borderColor:'#333',
                shadowColor: '#000',
                shadowBlur: 100,
              },
              barWidth: '45%',
              data: [this.cpu.use]
            }
          ]
        };
        memory_use.setOption(meory_option);
        cpu_use.setOption(cpu_option);
        window.addEventListener('resize',()=>{
          memory_use.resize()
          cpu_use.resize()
        })
      }
    },
    mounted() {
      this.drawChart()
    }
  }
</script>

<style scoped lang="less">
  .detail {
    width: 100%;
    p {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    div {
      float: left;
      width: 50%;
      color: #3aa0ee;
      font-size: 20px;
      letter-spacing: 0;
      white-space:nowrap;
    }

  }

  .chart_chart {
    float: left;
    width: 50%;
    height: 150px;
  }

</style>