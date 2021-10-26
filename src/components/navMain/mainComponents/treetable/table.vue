<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="6">
        <el-input
          v-model="keyword"
          size="medium"
          placeholder="请输入搜索"
          clearable
          @keyup.enter.native="search()"
        />
      </el-col>
      <el-col :span="8">
        <el-button type="primary" style="margin-left: 18px" @click="search()">
          搜索
        </el-button>
        <el-button
          v-for="item in buttons"
          :key="item.id"
          :type="item.type"
          @click="clickBtn(item.method)"
        >{{ item.name }}</el-button
        >
        <Dialog ref="childDialog" />
      </el-col>
    </el-row>
    <el-table
      :data="
        tempTableData.slice(
          (currentPage - 1) * pagesize,
          currentPage * pagesize
        )
      "
      border
      style="width: 100%;margin-top:30px"
      max-height="700"
    >
      <template v-for="(col, index) in tableHead">
        <el-table-column
          v-if="col.prop !== 'sex'"
          :key="index"
          :prop="col.prop"
          :label="col.label"
        >
          <template slot-scope="scope">{{ scope.row[col.prop] }}</template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :prop="col.prop"
          :label="col.label"
          :render-header="RenderHeader"
        >
          <template slot-scope="scope">{{ scope.row[col.prop] }}</template>
        </el-table-column>
      </template>
    </el-table>
    <div style="margin-top: 25px; text-align: center">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[9, 4, 6, 25]"
        :page-size="pagesize"
        :total="tempTableData.length"
        layout="total,sizes,prev,pager,next,jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>
<script>
import selectFilterHeader from './selectFilterHeader'
import dataBase from '@/config/jsonTest.json'
import Bus from './bus'
import Dialog from './dialog.vue'
export default {
  components: { Dialog },
  data() {
    return {
      sex: '',
      tableHead: dataBase.tableHead,
      buttons: dataBase.buttons,
      selection: [
        { text: '男', value: '男' },
        { text: '女', value: '女' }
      ],
      tempTableData: [],
      Tabledata: [],
      tableData2: dataBase.tabledata2,
      tableData3: dataBase.tabledata3,
      currentPage: 1,
      pagesize: 25,
      keyword: ''
    }
  },
  created() {
    this.tempTableData = this.tableData3
    this.Tabledata = this.tableData3
  },
  mounted() {
    Bus.$on('val', (data) => {
      if (data === 2) {
        this.tempTableData = this.tableData3
      } else if (data === 3) {
        this.tempTableData = this.tableData2
      }
    })
  },
  methods: {
    clickBtn(methodname) {
      this[methodname]()
    },
    add() {
      this.$refs.childDialog.showDialog = true
    },
    // render-header来渲染自定义表头
    RenderHeader(createElement, { column }) {
      const self = this
      return createElement('div', [
        createElement('div', {
          style: self.sex ? 'color: #409EFF' : '',
          domProps: {
            innerHTML: column.label
          }
        }),
        createElement(selectFilterHeader, {
          style: 'cursor: pointer',
          props: {
            defaultValue: self.sex,
            filters: self.selection
          },
          // 事件监听器在on里面
          on: {
            selectChange: self.selectSexChange
          }
        })
      ])
    },
    selectSexChange(value) {
      this.sex = value
      this.tempTableData = this.tableData3.filter(
        (item) => item.sex.indexOf(value) > -1
      )
    },
    // 搜索
    search() {
      var keyword = this.keyword
      if (keyword) {
        this.tempTableData = this.Tabledata.filter((Tabledata) => {
          return Object.keys(Tabledata).some((key) => {
            return (
              String(Tabledata[key]).toLocaleLowerCase().indexOf(keyword) > -1
            )
          })
        })
      } else {
        this.tempTableData = this.Tabledata
      }
    },
    // 页面尺寸
    handleSizeChange(size) {
      this.pagesize = size
    },
    // 翻页
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  height: 880px;
}
</style>
