<template>
  <div class="all">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
      <el-card class="box-card">
          <!-- 搜索与添加区 -->
        <el-row :gutter="20">
            <el-col :span="9">
                <el-input placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <!-- 订单列表数据 -->
        <el-table :data="orderlist" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="订单编号" prop="order_number"></el-table-column>
            <el-table-column label="订单价格" prop="order_price"></el-table-column>
            <el-table-column label="是否付款" prop="pay_status">
                <template slot-scope="scope">
                    <el-tag type="success" v-if="scope.row.pay_status === '1'">已付款</el-tag>
                    <el-tag type="danger" v-else>待付款</el-tag>
                    <!-- {{scope.row.pay_status}} -->
                </template>
            </el-table-column>
            <el-table-column label="是否发货" prop="is_send">
                <template slot-scope="scope">
                    {{scope.row.is_send}}
                </template>
            </el-table-column>
            <el-table-column label="下单时间" prop="create_time">
                <template slot-scope="scope">
                    {{scope.row.create_time | dataFormat}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template >
                    <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                    <el-button type="success" icon="el-icon-location" size="mini"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页功能 -->
        <el-pagination   @size-change="handleSizeChange"   @current-change="handleCurrentChange"  :current-page="queryInfo.pagenum" :page-sizes="[5, 10, 15]"  :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper"  :total="total"></el-pagination>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      total: 0,
      orderlist: []
    }
  },
  created () {
    this.getOrderList()
  },
  methods: {
    async getOrderList () {
      const { data: res } = await this.$http.get('orders', { params: this.queryInfo })
      // console.log(res)
      if (res.meta.status !== 200) return this.$message.error('获取订单列表失败')
      this.orderlist = res.data.goods
      this.total = res.data.total
    },
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getOrderList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getOrderList()
    }
  }
}
</script>

<style lang="less" scoped>
 .all {
    margin: 20px;
  }
</style>
