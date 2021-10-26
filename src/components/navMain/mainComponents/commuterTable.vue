<template>
  <div><Tree />

    <Table />

  </div>

</template>
<script>
import Tree from './treetable/tree'
import Table from './treetable/table'
export default {
  components: { Tree, Table },
  data() {
    return {

    }
  }
}
</script>
