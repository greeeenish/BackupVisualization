<template>
  <div class="chart_wrap">
    <div class="chart_container">
      <ResourceUse></ResourceUse>
      <hr color="#003550"/>
      <BackupFlow></BackupFlow>
      <RestoreFlow></RestoreFlow>
    </div>
    <div class="chart_background"></div>
  </div>
</template>

<script>
  import ResourceUse from  './ResourceUse'
  import BackupFlow from  './BackupFlow'
  import RestoreFlow from  './RestoreFlow'
  export default {
    name: "ResourceRate",
    components: {ResourceUse, BackupFlow, RestoreFlow}
  }
</script>

<style scoped>
  .chart_wrap {
    height: 970px;
    padding: 50px;
  }
  .chart_background {
    height: 1070px;
    width: 800px;
  }
  .chart_container {
    width: 700px;
    height: 970px;
  }
</style>