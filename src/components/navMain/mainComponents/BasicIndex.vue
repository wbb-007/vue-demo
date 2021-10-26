<template>
  <el-carousel :interval="5000" arrow="always" class="d_jump" >
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <el-row>
        <el-col :span="24"><img :src="item.idView" class="banner_img"></el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        { id: 0, idView: require('@/assets/22.jpg') },
        { id: 1, idView: require('@/assets/22.jpg') }

      ]

    }
  }

}
</script>
