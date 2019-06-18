<template>
  <div class="chart_wrap">
    <div class="chart_container">
      <div class="chart_title">生产系统</div>
      <div class="on_all">
        <span class="on">26</span><span class="all"> / 32</span>
      </div>
      <div class="on_off">
        <p>当前在线<span class="highlight"> 26 </span>个生产系统</p>
        <p>离线生产系统：<span class="highlight"> 6 </span>个</p>
      </div>
    </div>
    <div class="chart_background"></div>
  </div>
</template>

<script>
  export default {
    name: "ProductionSystem"
  }
</script>

<style scoped lang="less">
  .chart_wrap {
    height: 220px;
    padding: 50px;
  }
  .chart_background {
    height: 320px;
    width: 800px;
  }
  .on_all {
    margin-top: 40px;
    float: left;
    .on {
      color: #00e7df;
      font-size: 100px;
      font-weight: bold;
    }
    .all {
      color: #3aa0ee;
      font-size: 60px;
    }
  }
  .on_off {
    color: #3aa0ee;
    font-size: 26px;
    float: left;
    margin-left: 70px;
    margin-top: 20px;
    p {
      margin: 25px 0
    }
    .highlight {
      color: #00e7df;
      font-size: 30px;
      font-weight: bold;
    }
  }
</style>