<template>
  <div>
    <p>这是材料管理</p>

  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$ajax.get('https://movie.querydata.org/api?id=33410979')
        .then((res) => {
          console.log(res.data)
        })
        .catch((res) => {
          console.log(res.data)
        })
    }
  }
}
</script>
<style scoped>
</style>
