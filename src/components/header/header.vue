<template>
  <div class="layoutHeader">
    <div class="layoutHeader-title">
      <div
        class="layoutHeader-title-left"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="icons" @click="handleHomeButton">
          <i v-if="isShow" class="el-icon-refresh"/>
        </div>
        <div class="icons" @click="handleExistMaxScreen">
          <i v-if="isShow" class="el-icon-minus"/>
        </div>
        <div class="icons" @click="handleMaxScreen">
          <i v-if="isShow" class="el-icon-plus"/>
        </div>
      </div>
      <div class="layoutHeader-title-right">
        <i class="el-icon-arrow-left"/>
        <i class="el-icon-arrow-right"/>
      </div>
    </div>
    <div class="layoutHeader-main">
      <div class="layoutHeader-main-left">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search"/>
      </div>
      <div class="layoutHeader-main-right">
        <div class="items">
          <i class="el-icon-star-off"/>
          <i class="el-icon-chat-dot-round"/>
          <i class="el-icon-user"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { requestFullScreen, exitFullscreen } from '@/utils/window.js'
export default {
  data() {
    return {
      isShow: false,
      isFull: false
    }
  },
  methods: {
    handleMouseEnter() {
      this.isShow = true
    },
    handleMouseLeave() {
      this.isShow = false
    },
    handleMaxScreen() {
      requestFullScreen()
      this.isFull = true
    },
    handleExistMaxScreen() {
      if (this.isFull) {
        exitFullscreen()
        this.isFull = false
      }
    },
    handleHomeButton() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.layoutHeader {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #b3c0d1;
  &-title {
    width: 18%;
    height: 100%;
    text-align: center;
    display: flex;
    &-left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icons {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        line-height: 25px;
        cursor: pointer;
        i {
          display: inline-block;
        }
      }
      .icons:nth-child(1) {
        background-color: #ed655a;
      }
      .icons:nth-child(2) {
        background-color: #e0c04c;
      }
      .icons:nth-child(3) {
        background-color: #72be47;
      }
    }
    &-right {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-around;
      i {
        cursor: pointer;
        font-size: 25px;
      }
    }
  }
  &-main {
    width: 82%;
    height: 100%;
    display: flex;
    &-left {
      flex: 2;
      display: flex;
      align-items: center;
      input {
        box-sizing: border-box;
        width: 100px;
      }
    }
    &-right {
      flex: 7;
      display: flex;
      justify-content: flex-end;
      .items{
        width: 300px;
        height: 100%;
        display: flex;
        align-items: center;
        i{
          flex: 1;
          font-size: 25px;
          margin-left: 40px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
