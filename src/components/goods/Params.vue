<template>
  <div class="all">
  <!-- 面包屑导航区域 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>参数列表</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片区域 -->
<el-card>
    <!-- 头部警告区域 -->
    <el-alert title="注意：只允许为第三级分类设置相关参数" type="warning" show-icon :closable="false"></el-alert>
    <!-- 选择商品分类区域 -->
    <el-row class="cat_opt">
        <el-col>
            <span>选择商品分类:</span>
            <!-- 选择商品分类的级联选择框 -->
            <el-cascader  expand-trigger='hover' v-model="selectedCateKeys"  :options="catelist"
            :props="cateProps"  @change="handleChange" clearable></el-cascader>
        </el-col>
    </el-row>
    <!-- tab栏区域 -->
    <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <!-- 添加动态参数的面板 -->
        <el-tab-pane label="动态参数" name="many">
          <el-button type="primary" size="mini" :disabled="isBtnDisable" @click="addDialogVisible=true">添加参数</el-button>
          <!-- 动态参数表格 -->
          <el-table :data="manyTableData" border stripe>
            <!-- 展开行 -->
            <el-table-column type="expand">
              <template slot-scope="scope">
                <!-- 循环渲染Tag标签 -->
                <el-tag v-for="(item, index) in scope.row.attr_vals" :key="index" closable @close="hanleClose(index, scope.row)">{{item}}</el-tag>
                <!-- 下面的el-input和el-button是动态编辑标签，可自定义的 -->
                <el-input  class="input-new-tag" v-if="scope.row.inputVisible" v-model="scope.row.inputValue"  ref="saveTagInput"
                size="small" @keyup.enter.native="handleInputConfirm(scope.row)" @blur="handleInputConfirm(scope.row)"></el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput(scope.row)">+ New Tag</el-button>
              </template>
            </el-table-column>
             <!-- 索引列 -->
            <el-table-column type="index"></el-table-column>
            <el-table-column label="参数名称" prop="attr_name"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.attr_id)">编辑</el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeParams(scope.row.attr_id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 添加静态属性的面板 -->
        <el-tab-pane label="静态属性" name="only">
          <el-button type="primary" size="mini" :disabled="isBtnDisable" @click="addDialogVisible=true">添加属性</el-button>
          <!-- 静态属性表格 -->
          <el-table :data="onlyTableData" border stripe>
            <!-- 展开行 -->
                        <el-table-column type="expand">
              <template slot-scope="scope">
                <!-- 循环渲染Tag标签 -->
                <el-tag v-for="(item, index) in scope.row.attr_vals" :key="index" closable @close="hanleClose(index, scope.row)">{{item}}</el-tag>
                <!-- 下面的el-input和el-button是动态编辑标签，可自定义的 -->
                <el-input  class="input-new-tag" v-if="scope.row.inputVisible" v-model="scope.row.inputValue"  ref="saveTagInput"
                size="small" @keyup.enter.native="handleInputConfirm(scope.row)" @blur="handleInputConfirm(scope.row)"></el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput(scope.row)">+ New Tag</el-button>
              </template>
            </el-table-column>
             <!-- 索引列 -->
            <el-table-column type="index"></el-table-column>
            <el-table-column label="属性名称" prop="attr_name"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.attr_id)">编辑</el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeParams(scope.row.attr_id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
     </el-tabs>
</el-card>
<!-- 添加参数的对话框 -->
<!-- 老师用同一个对话框，完成不同的操作（类似以前的添加与修改用用一个页面） -->
<el-dialog :title='"添加" + titleText' :visible.sync="addDialogVisible" width="50%" @close="addDialogClose">
  <!-- 弹出框的内部的表单 -->
  <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="100px">
  <el-form-item :label="titleText" prop="attr_name">
    <el-input v-model="addForm.attr_name"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addParams">确 定</el-button>
  </span>
</el-dialog>

<!-- 点击编辑的对话框 -->
<el-dialog :title='"修改" + titleText' :visible.sync="editDialogVisible" width="50%" @close="editDialogClose">
  <!-- 弹出框的内部的表单 -->
  <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="100px">
  <el-form-item :label="titleText" prop="attr_name">
    <el-input v-model="editForm.attr_name"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editParams">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 商品分类列表
      catelist: [],
      //   级联选择框的配置对象
      cateProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children'
      },
      //   级联选择框双向绑定到的数组
      selectedCateKeys: [],
      //   被激活的页签的名称
      activeName: 'many',
      // 动态参数的数据
      manyTableData: [],
      // 静态属性的数据
      onlyTableData: [],
      // 控制添加对话框显示与隐藏
      addDialogVisible: false,
      // 添加参数的表单数据对象
      addForm: {
        attr_name: ''
      },
      // 添加表单的验证规则对象
      addFormRules: {
        attr_name: [
          { required: true, message: '请输入参数名称', trigger: 'blur' }
        ]
      },
      // 控制添加对话框显示与隐藏
      editDialogVisible: false,
      // 修改的表单数据对象
      editForm: {
        attr_name: '',
        attr_sel: '',
        attr_id: ''
      },
      // 修改表单的验证规则对象
      editFormRules: {
        attr_name: [
          { required: true, message: '请输入参数名称', trigger: 'blur' }
        ]
      },
      // 控制按钮与文本框的切换与显示（自定义tag处）
      inputVisible: false,
      // 文本框中输入的内容（自定义tag中）
      inputValue: ''
    }
  },
  created () {
    this.getCateList()
  },
  methods: {
    //   获取商品分类数据
    async getCateList () {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status !== 200) {
        return this.$message.error('请求列表失败，失败原因：' + res.meta.res)
      }
      //   this.$message.success('请求成功')
      //   把数据列表，赋值给catelist
      this.catelist = res.data
      // console.log(this.catelist)
    },
    // 级联选择框变化，会触发这个函数
    handleChange () {
      this.getParamsDate()
    },
    // tab栏点击事件处理函数
    handleTabClick () {
      // console.log(this.activeName)
      this.getParamsDate()
    },
    // 获取参数的列表数据
    async getParamsDate () {
      // 如果选中的是三级分类，则返回
      if (this.selectedCateKeys.length !== 3) {
        this.selectedCateKeys = []
        // 解决小bug，选中三级分类后，有数据，在选一或二级时，让上个商品属性为空
        this.manyTableData = []
        this.onlyTableData = []
        return 0
      }
      // 证明选中的是三级分类
      // console.log(this.selectedCateKeys)
      // 根据所选分类的ID，和当前所处的面板，获取对应的参数categories/:id/attributes
      // console.log(this.cateId)
      const { data: res } = await this.$http.get(`categories/${this.cateId}/attributes`, { params: { sel: this.activeName } })
      if (res.meta.status !== 200) {
        // console.log(res.meta)
        return this.$message.error('获取参数列表失败，错误原因：' + res.meta.msg)
      }
      // this.$message.success('获取参数列表成功')
      // 把获取的字符串装换为数组，这样可以遍历数组内容并输出
      res.data.forEach(item => {
        item.attr_vals = item.attr_vals ? item.attr_vals.split(',') : []
        // 控制文本框的显示与隐藏  （这两行代码是解决自定义tag联动问题）
        item.inputVisible = false
        // 文本框输入的值
        item.inputValue = ''
      })
      // console.log(res.data)
      // 判断数据属于哪个表格
      if (this.activeName === 'many') {
        this.manyTableData = res.data
      } else {
        this.onlyTableData = res.data
      }
    },
    // 监听添加对话框的关闭事件
    addDialogClose () {
      this.$refs.addFormRef.resetFields()
    },
    // 点击按钮，添加参数
    addParams () {
      // 表单的预验证
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return
        // 验证通过就发起请求，添加参数
        const { data: res } = await this.$http.post(`categories/${this.cateId}/attributes`,
          { attr_name: this.addForm.attr_name, attr_sel: this.activeName })
        if (res.meta.status !== 201) {
          return this.$message.error('添加参数失败，失败原因：' + res.meta.msg)
        }
        // this.$message.success('添加参数成功')
        this.addDialogVisible = false
        this.getParamsDate()
      })
    },
    // 点击编辑，展示编辑的对话框
    async showEditDialog (attrId) {
      // 查询当前参数的信息
      const { data: res } = await this.$http.get(`categories/${this.cateId}/attributes/${attrId}`, { params: { attr_sel: this.activeName } })
      if (res.meta.status !== 200) {
        return this.$message.error('请求出错，原因：' + res.meta.msg)
      }
      // this.$message.success('请求数据成功')
      // console.log(res.data)
      this.editForm = res.data
      this.editDialogVisible = true
    },
    // 重置表单操作
    editDialogClose () {
      this.$refs.editFormRef.resetFields()
    },
    // 点击确定按钮，修改参数信息(有问题)
    editParams () {
      // 预验证
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.put(`categories/${this.cateId}/attributes/${this.editForm.attr_id}`, { attr_name: this.editForm.attr_name, attr_sel: this.activeName })
        if (res.meta.status !== 200) {
          return this.$message.error('修改参数出错，原因：' + res.meta.msg)
        }
        this.$message.success('修改参数成功')
        this.getParamsDate()
      })
      this.editDialogVisible = false
    },
    // 点击删除 根据id删除
    async removeParams (attrId) {
      const confirmResult = await this.$confirm('此操作将永久删除该参数, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      // 用户取消了删除操作
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      // 删除的业务逻辑
      // console.log(this.cateId, attrId)
      const { data: res } = await this.$http.delete(`categories/${this.cateId}/attributes/${attrId}`)
      if (res.meta.status !== 200) {
        return this.$message.error('删除参数不成功，原因：' + res.meta.msg)
      }
      this.$message.success('删除参数成功')
      this.getParamsDate()
    },
    // 文本框失去焦点，或者是摁下 Enter 都会触发
    async handleInputConfirm (row) {
      // 文本框重新转换为按钮
      if (row.inputValue.trim().length === 0) {
        row.inputValue = ''
        row.inputVisible = false
        return 0
      }
      // 如果没有return，这证明输入的内容需要做后续的处理
      row.attr_vals.push(row.inputValue.trim())
      row.inputValue = ''
      row.inputVisible = false
      // 需要发起请求，保存这次操作（接口）
      this.savaAttrVals(row)
    },
    // 出现文本输入框（自定义tag里）
    showInput (row) {
      row.inputVisible = true
      // 让文本框自动获得焦点
      // $nextTick 方法的作用，就是当页面上的元素被重新渲染之后，才会指定回调函数中的代码
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 需要发起请求，保存这次操作（多次用到了，就单独封装成一个函数）
    async savaAttrVals (row) {
      const { data: res } = await this.$http.put(`categories/${this.cateId}/attributes/${row.attr_id}`, { attr_name: row.attr_name, attr_sel: row.attr_sel, attr_vals: row.attr_vals.join(',') })
      if (res.meta.status !== 200) {
        return this.$message.error('修改参数项失败，失败原因：' + res.meta.msg)
      }
      this.$message.success('修改参数项成功')
    },
    // 删除对应的参数可选项
    async hanleClose (index, row) {
      row.attr_vals.splice(index, 1)
      const { data: res } = await this.$http.put(`categories/${this.cateId}/attributes/${row.attr_id}`, { attr_name: row.attr_name, attr_sel: row.attr_sel, attr_vals: row.attr_vals.join(',') })
      if (res.meta.status !== 200) {
        return this.$message.error('删除参数项失败，失败原因：' + res.meta.msg)
      }
      this.$message.success('删除参数项成功')
    }
  },
  computed: {
    //   如果按钮需要被禁用，则返回true，否则返回false
    isBtnDisable () {
      if (this.selectedCateKeys.length !== 3) {
        return true
      }
      return false
    },
    // 当前选中的三级分类的id
    cateId () {
      if (this.selectedCateKeys.length === 3) {
        return this.selectedCateKeys[2]
      }
      return null
    },
    // 动态计算标题的文本
    titleText () {
      if (this.activeName === 'many') {
        return '动态参数'
      }
      return '静态属性'
    }
  }
}
</script>

<style lang="less" scoped>
.cat_opt{
margin: 15px 0 ;
}
.el-cascader{
margin:0 15px;
}
.el-tag {
margin: 10px;
}
.input-new-tag {
  width: 120px;
}
.all {
  margin: 20px;
}
</style>
