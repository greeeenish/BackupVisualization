<template>
  <div class="rightbar">
    <TaskStatistic></TaskStatistic>
    <JobExecution></JobExecution>
    <DailyStorage></DailyStorage>
  </div>
</template>

<script>
  import TaskStatistic from '../TaskStatistic/TaskStatistic'
  import JobExecution from '../JobExecution/JobExecution'
  import DailyStorage from  '../DailyStorage/DailyStorage'
  export default {
    name: "RightSide",
    components: {TaskStatistic, JobExecution, DailyStorage}
  }
</script>

<style scoped>
  .rightbar {
    width: 800px;
    float: right;
    margin-right: 40px;
    margin-bottom: 60px;
    margin-top: 170px;
  }
</style>