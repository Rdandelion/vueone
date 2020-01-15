<template>
<div>
<!-- 面包屑导航区域 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片区域 -->
<el-card class="box-card">
  <!-- 搜索与添加区 -->
  <el-row :gutter="20">
    <el-col :span="9">
      <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
      <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
  </el-input>
</el-col>
  <el-col :span="4">
    <el-button type="primary" @click="addDialogVisible = true">
      添加用户
    </el-button>
  </el-col>
</el-row>
<!-- 用户列表区域 -->
 <el-table :data="UserLise" border stripe>
      <el-table-column type="index" label="索引"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="role_name" label="角色"></el-table-column>
      <el-table-column prop="mg_state" label="状态">
        <!-- 作用域插槽 -->
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <!-- 还是作用域插槽 -->
      <el-table-column label="操作" width="180">
         <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="修改" placement="top">
             <!-- 修改按钮 -->
              <el-button type="primary" icon="el-icon-edit" size="mini" title="" @click="showEditDialog(scope.row.id)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
           <!-- 删除按钮 -->
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.id)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="分配角色" placement="top">
            <!-- 分配角色按钮 -->
          <el-button type="warning" icon="el-icon-setting" size="mini" @click="setRole(scope.row)"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- 注意：在data里有设置每页显示几条数据，在分页栏里显示每页几条数据时，
    两者要保持一致，不一致时，以data的设置为主，只是此时显示的条数与真是的不符，算是个bug吧 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
     :current-page="queryInfo.pagenum" :page-sizes="[10, 20, 30, 40]"  :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
</el-card>
<!-- 添加用户的对话框 -->
<el-dialog
  title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
  <!-- 内容主体区 -->
  <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="addForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="addForm.password"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="addForm.email"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="mobile">
    <el-input v-model="addForm.mobile"></el-input>
  </el-form-item>
  </el-form>
  <!-- 内容底部的按钮 -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser">确 定</el-button>
  </span>
</el-dialog>
<!-- 修改用户的对话框 -->
<el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%" @close='editDialogClose'>
  <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
  <el-form-item label="用户名">
    <el-input v-model="editForm.username" disabled></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="editForm.email"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="mobile">
    <el-input v-model="editForm.mobile"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editUserInfo">确 定</el-button>
  </span>
</el-dialog>
<!-- 分配角色的对话框 -->
<el-dialog title="分配角色" :visible.sync="setRolesDialogVisible" width="50%" @close="setRolesDialogClose">
<p>当前的用户：{{userInfo.username}}</p>
<p>当前的角色：{{userInfo.role_name}}</p>
<p>分配新角色：
  <el-select v-model="selectedRoleId" placeholder="请选择">
    <el-option
      v-for="item in rolesList"
      :key="item.id"
      :label="item.roleName"
      :value="item.id">
    </el-option>
  </el-select>
</p>
  <span slot="footer" class="dialog-footer">
    <el-button @click="setRolesDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveRoleInfo">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
  data () {
    // 验证邮箱的自定义规则
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^\w+@\w+(\.\w+)+$/
      if (regEmail.test(value)) {
        // 合法的话
        return cb()
      }
      // 返回一个错误提示
      cb(new Error('请输入合法的邮箱'))
    }
    // 验证手机号的自定义规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^1[3456789]\d{9}$/
      if (regMobile.test(value)) {
        return cb()
      }
      // 返回一个错误提示
      cb(new Error('请输入合法的手机号码'))
    }
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        'query': '',
        // 当前页码值
        'pagenum': 1,
        // 每页显示条数
        'pagesize': 10
      },
      // 用户信息
      UserLise: [],
      total: 0,
      // 控制添加用户框的显示与隐藏
      addDialogVisible: false,
      // 添加用户的表单数据
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      // 添加表单的用户规则
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      },
      // 控制修改用户框的显示与隐藏
      editDialogVisible: false,
      // 查询到的用户信息对象
      editForm: {},
      // 修改表单的用户规则
      editFormRules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ]
      },
      // 控制分配角色对话框的显示与隐藏
      setRolesDialogVisible: false,
      // 需要被分配角色的用户信息
      userInfo: {},
      // s所有角色的数据列表
      rolesList: [],
      // 已经选中角色的id值
      selectedRoleId: ''
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      const { data: res } = await this.$http.get('users', { params: this.queryInfo })
      // console.log(res)
      if (res.meta.status !== 200) return this.$message.error('获取用户列表失败')
      this.UserLise = res.data.users
      this.total = res.data.total
    },
    // 监听pagesize改变的事件（每页显示的条数）
    handleSizeChange (newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    // 监听页码值发生改变的事件(点击某页)
    handleCurrentChange (newPage) {
      // console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },
    // 监听switch开关状态的改变
    async userStateChanged (userinfo) {
      console.log(userinfo)
      // 错误原因，模版字符串限制只能在模版里使用
      // const { data: res } = await this.$http.put(`users/$ { userinfo.id } /state/$ { userinfo.mg_state }`)
      const { data: res } = await this.$http.put('users/' + userinfo.id + '/state/' + userinfo.mg_state)
      console.log(res.meta.status)
      if (res.meta.status !== 200) {
        userinfo.mg_state = !userinfo.mg_state
        return this.$message.error('更新用户状态失败')
      }
      this.$message.success('更新用户状态成功')
    },
    // 监听添加用户对话框的关闭事件
    addDialogClosed () {
      this.$refs.addFormRef.resetFields()
    },
    // 点击  确定  添加用户前的预验证
    addUser () {
      this.$refs.addFormRef.validate(async valid => {
        // 提交之前，若表单填写的内容全部符合验证，则返回true
        console.log(this.$refs)
        // console.log(valid)
        if (!valid) return this.$message.error('请填写完整用户信息')
        // 发起请求
        // const { data: res } = this.$http.post('users', this.addForm)
        const { data: res } = await this.$http.post('users', this.addForm)
        // console.log(res)
        if (res.meta.status !== 201) {
          return this.$message.error('添加用户失败，原因：' + res.meta.msg)
        }
        this.$message.success('添加用户成功')
        // 成功添加用户后就关闭绘画框
        this.addDialogVisible = false
        // 成功添加用户后，重新渲染页面
        this.getUserList()
      })
    },
    // 点击修改
    async showEditDialog (id) {
      console.log('当前用户id为：' + id)
      const { data: res } = await this.$http.get('users/' + id)
      // console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error('查询用户失败，原因：' + res.meta.msg)
      }
      this.editForm = res.data
      this.editDialogVisible = true
      // // 成功添加用户后就关闭绘画框
      // this.editDialogVisible = false
      // // 成功添加用户后，重新渲染页面
      // this.getUserList()
    },
    // 每次点击修改都会重置
    editDialogClose () {
      this.$refs.editFormRef.resetFields()
    },
    // 点击  确定  修改用户前的预验证
    editUserInfo () {
      this.$refs.editFormRef.validate(async valid => {
        // 提交之前，若表单填写的内容全部符合验证，则返回true
        // console.log(valid)
        if (!valid) return this.$message.error('请填写完整用户信息')
        // 发起请求
        const { data: res } = await this.$http.put('users/' + this.editForm.id, { email: this.editForm.email, mobile: this.editForm.mobile })
        console.log(res)
        if (res.meta.status !== 200) {
          return this.$message.error('修改用户失败，原因：' + res.meta.msg)
        }
        // console.log('修改用户成功')
        // 成功添加用户后就关闭绘画框
        this.editDialogVisible = false
        // 成功添加用户后，重新渲染页面
        this.getUserList()
        this.$message.success('修改用户成功')
      })
    },
    // 根据id，删除用户
    async removeUserById (id) {
      // console.log(id)
      // 弹框询问是否要删除用户
      const confirmResult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      // 点击确认时返回config，点击取消时，返回cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const { data: res } = await this.$http.delete('users/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('删除用户失败，原因：' + res.meta.msg)
      }
      this.$message.success('删除用户成功')
      this.getUserList()
    },
    // 展示分配角色的对话框
    async setRole (userInfo) {
      this.userInfo = userInfo
      // 在展示对话框之前，获取所有角色的列表
      const { data: res } = await this.$http.get('roles')
      if (res.data.status === 200) {
        return this.$message.error('获取角色列表失败，原因：' + res.meta.mgs)
      }
      // this.$message.success('获取角色成功')
      // console.log('获取角色成功')
      this.rolesList = res.data
      this.setRolesDialogVisible = true
    },
    // 点击按钮，分配角色
    async saveRoleInfo () {
      if (!this.selectedRoleId) {
        return this.$message.error('请选择要分配的角色')
      }
      const { data: res } = await this.$http.put(`users/${this.userInfo.id}/role`, { rid: this.selectedRoleId })
      // console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error('更新角色失败，原因：' + res.meta.msg)
      }
      this.$message.success('更新角色成功')
      this.getUserList()
      this.setRolesDialogVisible = false
    },
    // 监听分配角色对话框的关闭
    setRolesDialogClose () {
      this.selectedRoleId = ''
      this.userInfo = {}
    }
  }
}
</script>

<style lang="less" scoped>

</style>
