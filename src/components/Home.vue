<template>
    <el-container class="home_container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../../public/girl.png" alt="女孩">
                <span>工艺品后台管理系统</span>
            </div>
            <div class="btn">
              <el-button type="info" @click="loginout">退出</el-button>
              <el-button type="info" @click="toindex">主页</el-button>
            </div>
        </el-header>
        <!-- 页面主体区域 -->
    <el-container>
        <!-- 侧边栏 -->
    <el-aside :width="iscollapse ? '64px' : '200px'">
      <div class="toggle_button" @click="toggleCollapse">|||</div>
      <!-- router开启路由跳转 跳转的url地址为index里的值-->
      <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF"
       unique-opened :collapse='iscollapse' :collapse-transition='false' :router="true"
       :default-active="activePath">
      <!-- 一级目录 -->
      <!-- 引入第三方的字体图标库 -->
      <!-- 这里让index为number时，会报错，index直接收字符串（element规定的） -->
      <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
        <template slot="title">
          <!-- 图标 -->
          <i :class="iconsObj[item.id]"></i>
          <!-- 文本显示 -->
          <span>{{item.authName}}</span>
        </template>
        <!-- 二级目录 -->
        <!-- 循环所有的children -->
        <el-menu-item :index='"/"+subItem.path' v-for="subItem in item.children"
         :key="subItem.id" @click="saveNavState('/'+subItem.path)">
          <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-menu"></i>
          <!-- 文本显示 -->
          <span>{{subItem.authName}}</span>
        </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <!-- 右边主体部分 -->
    <el-main>
      <!-- 放一个main部位的路由占位符 -->
      <router-view></router-view>
    </el-main>
    </el-container>
    </el-container>
</template>

<script>
export default {
  // 组件中的data值必须为函数，同时要求这个函数必须返回一个对象
  data () {
    return {
      // 左侧的菜单数据
      menulist: [],
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-3702mima',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-tijikongjian'
      },
      // 默认不折叠
      iscollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    loginout () {
      // 这是退出操作
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toindex () {
      this.$router.push('/index')
    },
    // 获取所有的菜单
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      // console.log(res)
      if (res.meta.status !== 200) return this.$message.error('获取列表失败')
      this.menulist = res.data
    },
    // 点击按钮，切换折叠与否
    toggleCollapse () {
      this.iscollapse = !this.iscollapse
    },
    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang='less' scoped>
.el-header{
  background-color: #373d41;
  display: flex;
//   两端对齐
  justify-content: space-between;
  padding-left: 0;
//   设置侧轴上的子元素排列方式（单行）
  align-items: center;
  color: #ccc;
}
.el-aside{
    background-color: #333744;
}
.el-main{
    background-color: #EAEDF1;
}
.home_container{
  height: 100%;
}
img{
    width: 59px;
    height: 59px;
    vertical-align: middle;
}
span{
    font-size: 20px;
    padding-left: 10px;
}
.iconfont {
  padding-right: 5px;
}
.el-menu{
  border-right: 0;
  vertical-align: top;
}
.el-submenu__title * {
    vertical-align: top;
}
.el-button {
  float:right;
  margin-left: 20px;
}
.toggle_button{
  background-color: #4A5064;
  text-align: center;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.el-main{
  overflow: auto;
  height:100%;
}
</style>
