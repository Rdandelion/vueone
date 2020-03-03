<template>
  <div>
      <!-- 面包屑导航 -->
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
  <el-breadcrumb-item>角色列表</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片视图 -->
<el-card>
    <!-- 添加角色按钮区 -->
    <el-row>
       <el-col>
    <el-button type="primary">添加角色</el-button>
        </el-col>
    </el-row>
    <!-- 角色列表区域 -->
 <el-table :data="rolesList" border stripe>
     <!-- 展开列 -->
      <el-table-column type="expand">
        <template slot-scope="scope">
          <!-- {{scope.row}} -->
          <!-- 先做栅格，划分一二三级 el-row el-col-->
           <el-row :class="['bdbottom', i1 === 0 ? 'bdtop' : '', 'vcenter']" v-for="(item1, i1) in scope.row.children" :key="item1.id">
            <!-- 渲染一级权限 -->
            <el-col :span="5">
              <el-tag closable @close="removeRightById(scope.row, item1.id)">{{item1.authName}}</el-tag>
              <i class="el-icon-caret-right"></i>
            </el-col>
            <!-- 渲染二级与三级权限 -->
            <el-col :span="19">
              <!-- 通过for循环 嵌套渲染二级权限 -->
              <el-row :class="[ i2 === 0 ? '' : 'bdtop', 'vcenter']" v-for="(item2, i2) in item1.children" :key="item2.id">
                <el-col :span="6">
                  <el-tag type="succcess" closable @close="removeRightById(scope.row, item2.id)" >{{item2.authName}}</el-tag>
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <el-col :span="18">
                  <el-tag type="warning" v-for="(item3) in item2.children" :key="item3.id"
                  closable @close="removeRightById(scope.row, item3.id)">{{item3.authName}}</el-tag>
                </el-col>
              </el-row>
            </el-col>
           </el-row>
        </template>
      </el-table-column>
     <!-- 索引列 -->
      <el-table-column type="index" label="索引"></el-table-column>
      <el-table-column prop="roleName" label="角色名称"></el-table-column>
      <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
      <el-table-column label="操作" width="300px">
         <template slot-scope="scope">
         <!-- 修改按钮 -->
         <el-button type="primary" icon="el-icon-edit" size="mini" title="" @click="showEditDialog(scope.row.id)">编辑</el-button>
        <!-- 删除按钮 -->
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.id)">删除</el-button>
        <!-- 分配角色按钮 -->
        <el-button type="warning" icon="el-icon-setting" size="mini" @click="showSetRightDialog(scope.row)">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
</el-card>
<!-- 修改用户的对话框 -->
<el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%" @close='editDialogClose'>
  <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="90px">
  <el-form-item label="角色ID" prop="roleId">
    <el-input v-model="editForm.roleId" disabled></el-input>
  </el-form-item>
  <el-form-item label="角色名称" prop="roleName">
    <el-input v-model="editForm.roleName"></el-input>
  </el-form-item>
  <el-form-item label="角色描述" prop="roleDesc">
    <el-input v-model="editForm.roleDesc"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取消</el-button>
    <el-button type="primary" @click="editUserInfo">确定</el-button>
  </span>
</el-dialog>
<!-- 分配权限的对话框 -->
<el-dialog title="分配权限" :visible.sync="setRightDialogVisible" width="50%" @close="setRightDialogClose">
  <!-- 树形控件 -->
  <!-- default-expand-all默认展开每项 -->
  <!-- 每项前面加上复选框show-checkbox -->
  <!--node-key="id"复选框与id绑定，有唯一的标识  -->
  <el-tree :data="rightsList" :props="treeProps"  show-checkbox node-key="id" default-expand-all :default-checked-keys="defKeys" ref="treeRef"></el-tree>
  <span slot="footer" class="dialog-footer">
    <el-button @click="setRightDialogVisible = false">取消</el-button>
    <el-button type="primary" @click="allotRights">确定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 所有角色列表数据
      rolesList: [],
      // 控制修改用户框的显示与隐藏
      editDialogVisible: false,
      editForm: {
        roleId: '',
        roleName: '',
        roleDesc: ''
      },
      editFormRules: {
        // 验证角色名称是否合法
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        // 验证角色描述是否合法
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ]
      },
      // 控制分配权限的对话框的显示与隐藏
      setRightDialogVisible: false,
      // 所有权限的数据
      rightsList: [],
      // 树形控件的属性绑定对象
      treeProps: {
        children: 'children',
        label: 'authName'
      },
      // 默认选中的节点id值为数组
      defKeys: [],
      // 当前即将分配权限的角色的id
      roleId: ''
    }
  },
  created () {
    // 获取所有的权限
    this.getRolesList()
  },
  methods: {
    //   获取权限列表
    async getRolesList () {
      const { data: res } = await this.$http.get('roles')
      //   从后台返回data和mate
      //   console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error('获取角色列表失败，原因：' + res.meta.msg)
      }
      //   this.$message.success('获取成功')
      this.rolesList = res.data
    //   console.log(this.rightsList)
    },
    // 点击确定  确认修改
    editUserInfo () {
      this.$refs.editFormRef.validate(async valid => {
        // 提交之前，若表单填写的内容全部符合验证，则返回true
        // console.log(valid)
        if (!valid) return this.$message.error('请填写完整用户信息')
        // 发起请求
        const { data: res } = await this.$http.put('roles/' + this.editForm.roleId, { roleName: this.editForm.roleName, roleDesc: this.editForm.roleDesc })
        // console.log(res.meta.status)
        if (res.meta.status !== 200) {
          return this.$message.error('修改角色失败，原因：' + res.meta.msg)
        }
        // console.log('success')
        // console.log('修改用户成功')
        this.editForm = res.data
        // 成功添加用户后，重新渲染页面
        this.getRolesList()
        // 成功添加用户后就关闭绘画框
        this.editDialogVisible = false
        this.$message.success('修改用户成功')
      })
    },
    // 点击修改
    async showEditDialog (id) {
      // console.log('当前用户id为：' + id)
      const { data: res } = await this.$http.get('roles/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('查询用户失败，原因：' + res.meta.msg)
      }
      this.editForm = res.data
      this.editDialogVisible = true
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
      // console.log('点击了删除，真的删除要去除代码里的注释')
      //   需要删除时，在把这部分代码取消注释
      //   const { data: res } = await this.$http.delete('roles/' + id)
      //   if (res.meta.status !== 200) {
      //     return this.$message.error('删除用户失败，原因：' + res.meta.msg)
      //   }
      //   this.$message.success('删除用户成功')
      //   this.getRolesList()
    },
    // 每次点击修改都会重置
    editDialogClose (id) {
      this.$refs.editFormRef.resetFields()
    },
    // 根据ID删除对应的权限
    async removeRightById (role, rightId) {
      // console.log('执行了')
      // 弹框提示是否要删除
      const confirmResult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(error => error)
      // 点击确认时返回config，点击取消时，返回cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      // console.log('点击了删除，真的删除要去除代码里的注释')
      // 需要删除时，在把这部分代码取消注释
      // const { data: res } = await this.$http.delete(`roles/ ${role.id}/rights/${rightId}`)
      // if (res.meta.status !== 200) {
      //   return this.$message.error('删除权限失败，原因：' + res.meta.msg)
      // }
      // this.$message.success('删除权限成功')
      // 不用this.getRolesList()了，this.getRolesList()会重新渲染整个页面，
      //  而role.children = res.data只渲染当前的，且不会关闭下拉框
      // role.children = res.data
    },
    // 分配权限的对话框
    async showSetRightDialog (role) {
      this.roleId = role.id
      // 获取所有的权限列表
      const { data: res } = await this.$http.get('rights/tree')
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限失败，原因：' + res.meta.msg)
      }
      // this.$message.success('获取权限成功')
      // 把获取到的权限数据保存到rightsList里
      this.rightsList = res.data
      // console.log(this.rightsList)
      // 获取三级节点的ID
      this.getLeafKey(role, this.defKeys)
      this.setRightDialogVisible = true
    },
    // 通过递归的形式，获取角色下所有三级权限的id，并保存到defKey数组里
    getLeafKey (node, arr) {
      // 如果当前node节点不包含children 属性，则为三级节点
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach(item => this.getLeafKey(item, arr))
    },
    // 监听分配权限对话框的关闭事件
    setRightDialogClose () {
      this.defKeys = []
    },
    // 点击tree弹出框的确定按钮，添加权限
    async allotRights () {
      const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys()
      ]
      // console.log(keys)
      const idStr = keys.join(',')
      const { data: res } = await this.$http.post(`roles/${this.roleId}/rights`, { rids: idStr })
      if (res.meta.status !== 200) {
        return this.$message.error('分配权限失败，原因：' + res.meta.msg)
      }
      this.$message.success('分配权限成功')
      this.getRolesList()
      this.setRightDialogVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
.el-tag{
  margin: 10px;
}

.bdtop {
border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}

// 纵向上的居中对齐
.vcenter {
  display: flex;
  align-items: center;
}
</style>
