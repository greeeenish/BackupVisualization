<template>
  <div class="leftbar">
    <StorageUse></StorageUse>
    <ProductionSystem></ProductionSystem>
    <ResourceRate></ResourceRate>
  </div>
</template>

<script>
  import StorageUse from '../StorageUse/StorageUse'
  import ProductionSystem from '../ProductionSystem/ProductionSystem'
  import ResourceRate from  '../ResourceRate/ResourceRate'
  export default {
    name: "LeftSide",
    components: {StorageUse, ProductionSystem, ResourceRate}
  }
</script>

<style scoped>
  .leftbar {
    width: 800px;
    float: left;
    margin-left: 40px;
    margin-bottom: 60px;
    margin-top: 170px;
  }
</style>