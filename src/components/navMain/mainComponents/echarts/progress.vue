<template>
  <div>

    <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />

    <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" style="margin-top:20px" />
    <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" style="margin-top:20px"/>
    <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" style="margin-top:20px"/>
  </div>
</template>
<script>
export default {

}
</script>
<style >

</style>
