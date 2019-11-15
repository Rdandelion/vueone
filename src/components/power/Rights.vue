<template>
  <div>
<!-- 面包屑导航 -->
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>权限管理</el-breadcrumb-item>
  <el-breadcrumb-item>权限列表</el-breadcrumb-item>
</el-breadcrumb>
<!-- 卡片视图 -->
<el-card>
    <!-- 后台返回列表区域 -->
 <el-table :data="rightsList" border stripe>
      <el-table-column type="index" label="索引"></el-table-column>
      <el-table-column prop="authName" label="权限名称"></el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column prop="level" label="权限等级">
          <template slot-scope="scope">
              <el-tag v-if="scope.row.level === '0'">一级</el-tag>
              <el-tag type="success" v-else-if = "scope.row.level === '1'">二级</el-tag>
               <el-tag type="warning" v-else>三级</el-tag>
          </template>
      </el-table-column>
    </el-table>
</el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 获取权限
      rightsList: []
    }
  },
  created () {
    // 获取所有的权限
    this.getRightsList()
  },
  methods: {
    //   获取权限列表
    async getRightsList () {
      const { data: res } = await this.$http.get('rights/list')
      //   从后台返回data和mate
      //   console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error('获取失败，原因：' + res.meta.msg)
      }
      //   this.$message.success('获取成功')
      this.rightsList = res.data
    //   console.log(this.rightsList)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
