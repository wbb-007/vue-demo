<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    class="tree"
    @node-click="handleNodeClick"
  />
</template>
<script>
import Bus from './bus.js'
export default {
  data() {
    return {
      data: [
        {
          label: '研发部',
          children: [
            { label: '前端', name: '前端' },
            { label: '研发二部' },
            { label: '研发三部' }
          ]
        },
        {
          label: '销售部',
          children: [{ label: '销售1部' }, { label: '销售2部' }, { label: '销售2部' }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
      Bus.$emit('val', data.$treeNodeId)
    }
  }
}
</script>
<style>
.tree {
  float: left;
  width: 15%;
  height: 780px;
}
</style>
