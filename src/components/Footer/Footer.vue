<template>
  <div class="footer">
    <DailyTask></DailyTask>
  </div>
</template>

<script>
  import DailyTask from '../DailyTask/DailyTask'
  export default {
    name: "Footer",
    components: {DailyTask}
  }
</script>

<style scoped>
  .footer {
    height: 600px;
    width: 2079px;
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    /*padding-left: 880px;*/
    /*padding-right: 880px;*/
    padding-bottom: 60px;
  }
</style>