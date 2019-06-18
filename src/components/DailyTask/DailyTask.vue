<template>
  <div class="chart_wrap">
    <div class="chart_container">
      <div class="chart_title">每日任务执行情况</div>
      <table>
        <tr>
          <th v-for="items in this.columns">{{items}}</th>
        </tr>
        <tr v-for="items in this.data">
          <td>
            <div style="margin-left: -20px"><div class="triangle"></div>{{items.taskType}}</div>
          </td>
          <td>{{items.dataType}}</td>
          <td>{{items.server}}</td>
          <td>{{items.status}}</td>
        </tr>
      </table>
    </div>
    <div class="chart_background"></div>
  </div>
</template>

<script>
  export default {
    name: "DailyTask",
    data() {
      return {
        columns:['任务类型','数据类型','服务器名称','任务状态'],
        data:[
          {
            taskType: '备份任务',
            dataType: '文件',
            server: 'NeoKylin7.0_x86',
            status: '等待启动备份任务'
          },
          {
            taskType: '备份任务',
            dataType: '文件',
            server: 'NeoKylin7.0_x86',
            status: '等待启动备份任务'
          },
          {
            taskType: '备份任务',
            dataType: '文件',
            server: 'NeoKylin7.0_x86',
            status: '等待启动备份任务'
          },
          {
            taskType: '备份任务',
            dataType: '文件',
            server: 'NeoKylin7.0_x86',
            status: '等待启动备份任务'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .chart_wrap {
    height: 500px;
    padding: 50px;
  }
  .chart_background {
    height: 600px;
    width: 2079px;
  }
  .chart_container {
    width: 1979px;
  }
  table {
    width: 100%;
    margin-top: 20px;
    border-collapse:collapse;
    th,td {
      border-bottom: 1px dashed #003550;
      height: 78px;
      padding-left: 80px;
    }
    th {
      color: #006ba9;
      font-size: 30px;
      text-align: left;
    }
    td {
      color: #0098e7;
      font-size: 30px;

      .triangle {
        display: inline-block;
        width: 0px;
        height: 0px;
        border-left: 16px solid #0098e7;
        border-right: none;
        border-bottom: solid 16px transparent;
        border-top: solid 16px transparent;
        margin-right: 32px;
      }
    }
    tr:nth-last-child(1){
      td{
        border-bottom: 1px solid #003550;
      }
    }
  }

</style>