<template>
  <div>
    <el-row >
      <el-col :span="7">
        <el-card class="box-card">
          <div id="main" ref="chart"/>
        </el-card>

      </el-col >
      <el-col :span="3" :push="7">
        <el-card class="box-card1">
          <div slot="header" class="clearfix">
            <span>今日待办</span>
            <el-button style="float: right; padding: 3px 0" type="text">阅读</el-button>
          </div>
          <el-skeleton animated/>
          <el-skeleton animated/>
        </el-card>
      </el-col>
      <el-col :span="3" :push="9">
        <el-card class="box-card1">
          <div slot="header" class="clearfix">
            <span>问题处理</span>
            <el-button style="float: right; padding: 3px 0" type="text">进入</el-button>
          </div>
          <el-skeleton animated/>
          <el-skeleton animated/>
        </el-card>
      </el-col>

    </el-row>
    <el-row style="margin-top:20px" >
      <el-col :span="7">
        <el-card class="box-card2"><Histogram/></el-card>
      </el-col>
      <el-col :span="3" :push="7">
        <el-card class="box-card3">
          <div slot="header" class="clearfix">
            <span>今日任务完成情况</span>
            <el-button style="float: right; padding: 3px 0" type="text">批阅</el-button>
          </div>
          <Progress/>
          <div style="margin-top:20px">
            <el-link type="primary">研发部</el-link>
            <el-link type="success" style="margin-left:20px">财务部</el-link>
            <el-divider />

            <el-link type="warning">人事部</el-link>

            <el-link type="danger" style="margin-left:20px">运营部</el-link>
            <el-divider/>

          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
var echarts = require('echarts')
var data = []
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200))
}
import Progress from './echarts/progress'
import Histogram from './echarts/histogram'
export default {
  name: 'Charts',
  components: { Histogram, Progress },
  data() {
    return {

      option: {

        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2 // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      }
    }
  },
  mounted() {
    echarts.init(this.$refs.chart).setOption(this.option)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #main {
       width: 500px;
       height: 400px;

      }
      .box-card{
        width: 940px;
       height: 380px;
      }
      .box-card1{
            width: 300px;
            height: 380px;
      }
      .box-card2{
        height: 400px;
        width: 940px;
      }
      .box-card3{
        height: 400px;
        width: 700px;
      }
</style>

