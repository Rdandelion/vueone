<template>
  <div class="all">
  <!-- 面包屑导航区域 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>商品列表</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片区域 -->
<el-card>
    <!-- 头部搜索区 -->
<el-row :gutter="20">
   <el-col :span="9">
    <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getGoodList">
    <el-button slot="append" icon="el-icon-search" @click="getGoodList"></el-button>
  </el-input>
    </el-col>
  <el-col :span="4">
    <el-button type="primary" @click="goAddpage">添加商品</el-button>
  </el-col>
</el-row>
<!-- table表格区域 -->
<el-table :data="goodList" style="width: 100%" border stripe>
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)" width="120px"> </el-table-column>
      <el-table-column prop="goods_weight" label="商品重量" width="120px"> </el-table-column>
      <el-table-column prop="upd_time" label="创建时间" width="200px">
          <template slot-scope="scope">
              {{scope.row.add_time | dataFormat}}
          </template>
      </el-table-column>
      <el-table-column prop="goods_name" label="操作" width="200px">
          <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="showEditDialog(scope.row.goods_id)">修改</el-button>
              <el-button type="danger" size="mini" @click="removeById(scope.row.goods_id)">删除</el-button>
          </template>
      </el-table-column>
</el-table>
<!-- 修改商品的对话框 -->
<el-dialog title="修改商品" :visible.sync="editDialogVisible" width="50%" @close='editDialogClose'>
  <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="90px">
    <el-form-item label="商品名称" prop="goods_name">
      <el-input v-model="editForm.goods_name"></el-input>
    </el-form-item>
    <el-form-item label="商品价格" prop="goods_price">
      <el-input v-model="editForm.goods_price"></el-input>
    </el-form-item>
    <el-form-item label="商品数量" prop="goods_number">
      <el-input v-model="editForm.goods_number"></el-input>
    </el-form-item>
    <el-form-item label="商品重量" prop="goods_weight">
      <el-input v-model="editForm.goods_weight"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取消</el-button>
    <el-button type="primary" @click="editUserInfo">确定</el-button>
  </span>
</el-dialog>
<!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total" background>
    </el-pagination>
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
        pagesize: 5
      },
      //   商品列表
      goodList: [],
      //   总数据条数
      total: 0,
      goods_cat: [],
      editForm: {
        goods_id: 1,
        goods_name: '',
        goods_price: '',
        goods_number: '',
        goods_weight: ''
      },
      editDialogVisible: false,
      editFormRules: {
        // 验证角色名称是否合法
        goods_name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getGoodList()
  },
  methods: {
    async getGoodList () {
      const { data: res } = await this.$http.get('goods', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        return this.$message.console.error('获取商品列表失败，失败原因：' + res.meta.msg)
      }
      // this.$message.success('获取商品列表成功')
      console.log(res.data)
      this.goodList = res.data.goods
      this.total = res.data.total
    },
    // 当页面值发生改变时，自动触发这个函数
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getGoodList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getGoodList()
    },
    // 删除
    async removeById (id) {
      const confirmResult = await this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const { data: res } = await this.$http.delete(`goods/${id}`)
      if (res.meta.status !== 200) {
        return this.$message.error('删除失败，失败原因' + res.meta.msg)
      }
      this.$message.success('删除成功')
      this.getGoodList()
    },
    goAddpage () {
      this.$router.push(`/goods/add`)
    },
    // 每次点击修改都会重置
    editDialogClose (id) {
      this.$refs.editFormRef.resetFields()
    },
    // 点击确定  确认修改并提交（最好改下名字）
    editUserInfo () {
      this.$refs.editFormRef.validate(async valid => {
      // 提交之前，若表单填写的内容全部符合验证，则返回true
      // console.log(valid)
        if (!valid) return this.$message.error('请填写完整用户信息')
        // 发起请求
        const { data: res } = await this.$http.put('goods/' + this.editForm.goods_id, { goods_name: this.editForm.goods_name, goods_price: this.editForm.goods_price, goods_number: this.editForm.goods_number, goods_weight: this.editForm.goods_weight, goods_cat: this.goods_cat })
        // console.log(res.meta.status)
        if (res.meta.status !== 201) {
          return this.$message.error('修改角色失败，原因：' + res.meta.msg)
        }
        // console.log('success')
        // console.log('修改用户成功')
        this.editForm = res.data
        // 成功添加用户后，重新渲染页面
        this.getGoodList()
        // 成功添加用户后就关闭绘画框
        this.editDialogVisible = false
        this.$message.success('修改用户成功')
      })
    },
    // 点击修改按钮，获取当前id的信息
    async showEditDialog (id) {
      // this.editDialogVisible = true
      console.log('当前用户id为：' + id)
      // , { goods_name: this.addForm.goods_name, goods_price: this.addForm.goods_price, goods_number: this.addForm.goods_number, goods_weight: this.addForm.goods_weight }
      const { data: res } = await this.$http.get('goods/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('查询用户失败，原因：' + res.meta.msg)
      }
      this.editForm = res.data
      this.editDialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.all {
  margin: 20px;
}
</style>
