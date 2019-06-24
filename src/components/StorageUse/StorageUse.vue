<template>
  <div class="chart_wrap">
    <div class="chart_container">
      <div class="chart_title">备份存储</div>
      <div class="chart_chart" id="storage_use"></div>
      <div class="chart_detail">
        <p>总容量：{{this.detail_data.all}}MB</p>
        <p>已使用：{{this.detail_data.use}}MB</p>
        <p>可用：{{this.detail_data.rest}}MB</p>
      </div>
    </div>
    <div class="chart_background"></div>
  </div>
</template>

<script>
  export default {
    name: "StorageUse",
    data() {
      return {
        data: [{
          "name": "已使用",
          "value": 38
        }, {
          "name": "可用空间",
          "value": 62
        }],
        detail_data:{
          all: 2048,
          use: 778.24,
          rest: 1269.76
        }
      }
    },
    methods: {
      drawChart() {
        const echarts = require('echarts')
        const myChart = echarts.init(document.getElementById('storage_use'))

        const option = {
          title: {
            text: this.data[0].value+'%',
            x: '20%',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#00e7df',
              fontSize: '120%',
              fontFamily: 'Microsoft YaHei',
            }
          },
          color: ["#3aa0ee", "#00e7df"],
          legend: {
            right: 0,
            textStyle: {
              color: '#3aa0ee',
              fontFamily: 'Microsoft YaHei',
              fontWeight: 'bold',
            },
            icon: 'roundRect',
            itemWidth: 14,
            data: this.data,
          },
          series: [
            // 边框的设置
            {
              name: '内边框',
              type: 'pie',
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              center: ['28%', '50%'],
              radius: ['40%', '40%'],
              label: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 9,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    borderColor: '#003756'
                  }
                }
              }]
            },
            {
              center: ['28%', '50%'],
              radius: ['45%', '85%'],
              type: 'pie',
              z: 0,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              data: [{
                value: 1,
                itemStyle: {
                  color: "#001b29",
                },
              }],
            },

            // 主要展示层的
            {
              center: ['28%', '50%'],
              radius: ['0%', '0%'],
              type: 'pie',
              label: {
                normal: {
                  show: false,
                },
              },
              legendHoverLink: false,
              animation: false,
              name: "",
              data: this.data,
            },

            { //未使用
              center: ['28%', '50%'],
              radius: ['55%', '75%'],
              type: 'pie',
              label: {
                normal: {
                  show: false,
                },
              },
              name: "",
              data: [
                // {
                //   value: this.data[0].value,
                //   name: '',
                //   itemStyle: {
                //     color: "#transparent"
                //   }
                // },
                {
                  value: this.data[1].value,
                  name: '',
                  itemStyle: {
                    color: "#3aa0ee"
                  }
                }
              ],
            },
            { //已使用
              center: ['28%', '50%'],
              radius: ['50%', '80%'],
              type: 'pie',
              label: {
                normal: {
                  show: false,
                },
              },
              startAngle: 210,
              hoverAnimation: false,
              name: "",
              data: [
                {
                  value: this.data[0].value,
                  name: '',
                  itemStyle: {
                    normal: {
                      color: "#00e7df",
                      shadowColor: '#000',
                      shadowBlur: 100,
                    }
                  },
                },
                {
                  value: this.data[1].value,
                  name: '',
                  itemStyle: {
                    color: "transparent"
                  }
                }
              ],
            },
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

<style scoped lang="less">
  .chart_wrap {
    height: 460px;
    padding: 50px;
    border: solid 2px #002f48;
    box-shadow: 0 0 60px 5px #002f48 inset;
  }
  .chart_background {
    height: 560px;
    width: 800px;
  }
  .chart_chart {
    height: 410px;
    width: 700px;
  }
  .chart_detail {
    color: #3aa0ee;
    font-size: 26px;
    position: absolute;
    right: 22px;
    bottom: 40px;
    text-align: right;
    p {
      margin: 20px 0
    }
    
  }
</style>