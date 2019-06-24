<template>
  <div class="head_container">
    <div class="head_background"></div>
    <!--<div class="head_light"></div>-->
    <div class="head_title">
      <div class="font" data-content="顶点灾备可视化展示">顶点灾备可视化展示</div>
    </div>
    <div class="head_date">2019.05.25 星期六 18:22:31</div>
    <div class="head_notice">
      <div class="notice_item">
        <img src="../../assets/image/icon/warning.png"/><span>告警</span>
        <div class="count">3</div>
      </div>
      <div class="notice_item">
        <img src="../../assets/image/icon/error.png"/><span>错误</span>
        <div class="count">2</div>
      </div>
      <div class="notice_item">
        <img src="../../assets/image/icon/info.png"/><span>信息</span>
        <div class="count">9</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="less">
  .head_container {
    width: 100%;
    position: absolute;
    top: 0;
  }
  img {
    width: 100%;
  }
  .head_background {
    width: 100%;
    height: 170px;
    position: absolute;
    top:0;
    left: 0;
    background-image: url("../../assets/image/background/header.png");
    background-size: cover;
  }
  .head_light{
    width: 100%;
    height: 170px;
    position: absolute;
    top: 0px;
    left: 0;
    background-image: url("../../assets/image/background/head_light.png");
    background-size: cover;
    opacity: 0.5;
    -webkit-filter: drop-shadow(0 0 #043453);
    filter: drop-shadow(0 0 #043453) ;
    clip-path: inset(0 0 40px 0)
  }
  .head_title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 25px;

  .font {
    font-size: 108px;
    /*font-weight: bold;*/
    color:#00A1F5;
    letter-spacing: 0;
    text-shadow:
        -0.4px -0.4px 0 #00eaff,
        -0.6px -0.6px 0 #00eaff, /* end of 2 level deep grey shadow */
        -0.8px -0.8px 0 #009ae8,
        -1.0px -1.0px 0 #009ae8,
        -1.2px -1.2px 0 #009ae8;
  }
  .font[data-content]::after{
    content:attr(data-content);
    display: block;
    position:absolute;
    color:#62faff;
    top:0;
    z-index:2;
    -webkit-mask-image:-webkit-gradient(linear, 0 0,0 bottom, from(#00eaff), to(rgba(0, 0, 255, 0)));
  }
  }
  .head_date {
    color: #0098e7;
    font-size: 40px;
    position: absolute;
    left: 30px;
    top: 30px;
  }
  .head_notice {
    color: #0098e7;
    font-size: 32px;
    position: absolute;
    right: 30px;
    top: 35px;

    .notice_item {
      display: inline-block;
      margin-left: 71px;
    }

    img {
      display: inline-block;
      vertical-align:bottom;
      width: 34px;
      height: 34px;
      margin-right: 12px;
    }
    span {
      display: inline-block;
      vertical-align:top;
      margin-right: 12px;
    }
    .count {
      display: inline-block;
      vertical-align:top;
      width: 40px;
      height: 40px;
      background-color: #dc692a;
      border-radius: 15px;
      color: #ffffff;
      font-size: 26px;
      text-align: center;
      line-height: 40px;
    }
  }
</style>