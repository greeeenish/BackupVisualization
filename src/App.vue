<template>
  <div id="app">
      <Header></Header>
      <div class="content clearfix">
        <Footer></Footer>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
        <CenterScene></CenterScene>
      </div>
  </div>
</template>

<script>
import CenterScene from './components/CenterScene/CenterScene'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
export default {
  name: 'app',
  components: {RightSide, LeftSide, CenterScene, Header, Footer},
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
  html {
    font-family: "微软雅黑 Light";
    background-image: url("assets/image/background/background.png");
    /*width: 100%;*/
    /*height: 100%;*/
  }
  body {
    margin: 0;
    /*width: 100%;*/
    /*height: 100%;*/
  }
  #app {
    background-image: url("assets/image/background/background.png");
    background-size: cover;
    width: 100%;
    /*height: 100%;*/
    position: relative;
    overflow: hidden;
  }
  .content {
    width: 100%;
    height: 100%;
  }
  body::-webkit-scrollbar {
    display: none;
  }
</style>
