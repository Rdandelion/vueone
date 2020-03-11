<template>
<div class="all">
    <!-- 面包屑导航区域 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>商品分类</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片区域 -->
<el-card>
    <el-row>
        <el-col>
            <el-button type="primary" @click="showAddCateDialog"> 添加分类</el-button>
        </el-col>
    </el-row>
    <!-- 表格区域 -->
    <!-- https://github.com/MisterTaki/vue-table-with-tree-grid -->
      <!-- 去这个网址，查看这个table及其属性的用法 -->
      <tree-table :data='catelist' :columns='columns' :selection-type="false"
      :expand-type="false" :show-index="true" index-text="索引" border :show-row-hover="false" class="treeTable">
        <!-- 是否有效列 -->
        <template slot="isok" slot-scope="scope">
            <i class="el-icon-success" v-if="scope.row.cat_deleted === false" style="color: lightgreen"></i>
            <i class="el-icon-error" v-else style="color: red"></i>
        </template>
        <!-- 排序列 -->
        <template slot="order" slot-scope="scope">
            <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
            <el-tag type="success" size="mini" v-else-if="scope.row.cat_level === 1">二级</el-tag>
            <el-tag type="warning" size="mini" v-else>三级</el-tag>
        </template>
        <!-- 操作列 -->
        <template slot="opt" slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.cat_id)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delect" size="mini" @click="removeById(scope.row.cat_id)">删除</el-button>
            </template>
      </tree-table>
    <!-- 分页 -->
    <!-- 注意：在data里有设置每页显示几条数据，在分页栏里显示每页几条数据时，
    两者要保持一致，不一致时，以data的设置为主，只是此时显示的条数与真是的不符，算是个bug吧 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
     :current-page="querInfo.pagenum" :page-sizes="[5, 10, 15, 20]"  :page-size="querInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper" :total="total"  :pager-count="5">
    </el-pagination>
</el-card>
<!-- 添加分类的对话框 -->
<el-dialog title="添加分类" :visible.sync="addCateDialogVisible" width="50%" @close="addCateDialogClose">
  <!-- 添加分类表单 -->
  <el-form :model="addCateForm" :rules="addCateFormRules" ref="addCateFormRef"  label-width="100px">
  <el-form-item label="分类名称" prop="cat_name">
    <el-input v-model="addCateForm.cat_name"></el-input>
  </el-form-item>
  <!-- options 用来指定数据源   props用来指定数据对象-->
  <!-- 选择一级时，是点击前面选择 -->
  <el-form-item label="父级分类">
    <el-cascader expand-trigger="hover" v-model="selectedKeys" :options="parentCateList"
    :props="cascaderProps" @change="parentCateChanged" clearable :change-on-select = "true"></el-cascader>
  </el-form-item>
  </el-form>
  <!-- 对话框的底部 -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="addCateDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addCate">确 定</el-button>
  </span>
</el-dialog>
<!-- 修改商品的对话框 -->
<el-dialog title="修改商品" :visible.sync="editDialogVisible" width="50%" @close='editDialogClose'>
  <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="90px">
    <el-form-item label="商品名称" prop="cat_name">
      <el-input v-model="editForm.cat_name"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取消</el-button>
    <el-button type="primary" @click="editUserInfo">确定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      // 查询条件
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      catelist: [],
      //   总数据条数
      total: 0,
      //   为table指定列的定义
      columns: [{
        label: '分类名称',
        prop: 'cat_name'
      }, {
        label: '是否有效',
        // 表示将当前列定义为模板列
        type: 'template',
        // 表示当前这一列使用的模板名称
        template: 'isok'
      }, {
        label: '排序',
        // 表示将当前列定义为模板列
        type: 'template',
        // 表示当前这一列使用的模板名称
        template: 'order'
      }, {
        label: '操作',
        // 表示将当前列定义为模板列
        type: 'template',
        // 表示当前这一列使用的模板名称
        template: 'opt'
      }],
      //   控制添加分类弹出与否
      addCateDialogVisible: false,
      // 添加分类的表单数据对象
      addCateForm: {
        // 将要添加的分类的名称
        cat_name: '',
        // 父级分类的ID
        cat_pid: 0,
        // 分类的等级，默认要添加的是一级分类
        cat_level: 0
      },
      // 添加分类表单的验证规则对象
      addCateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
      // 添加父级分类列表
      parentCateList: [],
      // 指定级联选择器的配置对象
      cascaderProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children'
      },
      // 选中的父级分类数组
      selectedKeys: [],
      editDialogVisible: false,
      editForm: {
        cat_id: 1,
        cat_name: ''
      },
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
    this.getCateList()
  },
  methods: {
    //   获取商品分类数据
    async getCateList () {
      const { data: res } = await this.$http.get('categories', { params: this.querInfo })
      if (res.meta.status !== 200) {
        return this.$message.error('请求列表失败，失败原因：' + res.meta.res)
      }
      //   this.$message.success('请求成功')
      console.log(res.data.result)
      //   把数据列表，赋值给catelist
      this.catelist = res.data.result
      //   为总数据条数赋值
      this.total = res.data.total
    },
    // 监听pagesize改变的事件
    handleSizeChange (newSize) {
      this.querInfo.pagesize = newSize
      this.getCateList()
    },
    // 监听pagenum 的变化
    handleCurrentChange (newPage) {
      this.querInfo.pagenum = newPage
      this.getCateList()
    },
    // 点击按钮  展示添加分类的对话框
    showAddCateDialog () {
      // 先获取父级分类的数据列表
      this.getParentCateList()
      // 在展示出对话框
      this.addCateDialogVisible = true
    },
    // 获取父级分类的数据列表
    async getParentCateList () {
      const { data: res } = await this.$http.get('categories', { params: { type: 2 } })
      if (res.meta.status !== 200) {
        return this.$message.error('请求父级分类数据失败，失败原因：' + res.meta.res)
      }
      // this.$message.success('请求成功')
      // console.log(res.data)
      //   把数据列表，赋值给ParentCateList
      this.parentCateList = res.data
    },
    // 选择项发生变化触发这个值
    parentCateChanged () {
      // 注意：在global里设置完el-cascader-panel:100px之后，二级才显示出来
      // console.log(this.selectedKeys)
      // 如果selectedKeys 数组中的length 大于0，证明选中的是父级分类或其子类
      // 反之，就说明没有选中任何父级及其子类分类
      if (this.selectedKeys.length > 0) {
        // 父级分类的id
        this.addCateForm.cat_pid = this.selectedKeys[this.selectedKeys.length - 1]
        // 为当前的等级赋值
        this.addCateForm.cat_level = this.selectedKeys.length
        return 0
      } else {
        // 父级分类的id
        this.addCateForm.cat_pid = 0
        // 为当前的等级赋值
        this.addCateForm.cat_level = 0
      }
    },
    // 点击确定按钮，添加新的分类
    addCate () {
      // console.log(this.addCateForm)
      // 表单预验证
      this.$refs.addCateFormRef.validate(async valid => {
        // console.log(valid)
        if (!valid) return
        console.log(this.addCateForm)
        const { data: res } = await this.$http.post('categories', this.addCateForm)
        console.log(res)
        if (res.meta.status !== 201) {
          return this.$message.error('添加分类失败，失败原因：' + res.meta.msg + '呵呵')
        }
        this.$message.success('添加分类成功')
        // 刷新列表
        this.getCateList()
        this.addCateDialogVisible = false
      })
    },
    // 点击对话框的关闭事件，重置表单数据
    addCateDialogClose () {
      this.$refs.addCateFormRef.resetFields()
      this.selectedKeys = []
      this.addCateForm.cat_level = 0
      this.addCateForm.cat_pid = 0
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
      const { data: res } = await this.$http.delete(`categories/${id}`)
      if (res.meta.status !== 200) {
        return this.$message.error('删除失败，失败原因' + res.meta.msg)
      }
      this.$message.success('删除成功')
      this.getCateList()
    },
    // 每次点击修改都会重置
    editDialogClose (id) {
      this.$refs.editFormRef.resetFields()
    },
    // 点击修改按钮，获取当前id的信息
    async showEditDialog (id) {
      // this.editDialogVisible = true
      console.log('当前用户id为：' + id)
      // , { goods_name: this.addForm.goods_name, goods_price: this.addForm.goods_price, goods_number: this.addForm.goods_number, goods_weight: this.addForm.goods_weight }
      const { data: res } = await this.$http.get('categories/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('查询用户失败，原因：' + res.meta.msg)
      }
      this.editForm = res.data
      this.editDialogVisible = true
    },
    // 点击确定  确认修改并提交（最好改下名字）
    editUserInfo () {
      this.$refs.editFormRef.validate(async valid => {
      // 提交之前，若表单填写的内容全部符合验证，则返回true
      // console.log(valid)
        if (!valid) return this.$message.error('请填写完整用户信息')
        // 发起请求
        const { data: res } = await this.$http.put('categories/' + this.editForm.cat_id, { cat_name: this.editForm.cat_name })
        console.log(res.meta.status)
        if (res.meta.status !== 201) {
          return this.$message.error('修改角色失败，原因：' + res.meta.msg)
        }
        // console.log('success')
        // console.log('修改用户成功')
        this.editForm = res.data
        // 成功添加用户后，重新渲染页面
        this.getCateList()
        // 成功添加用户后就关闭绘画框
        this.editDialogVisible = false
        this.$message.success('修改用户成功')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.treeTable{
    margin-top: 15px;
}
.el-cascader{
  width: 100%;
}
.all {
  margin: 20px;
}
</style>
