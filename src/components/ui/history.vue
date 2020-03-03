<template>
  <!-- <div>金属工艺品</div> -->
  <div class="all">
    <!-- 页面主体区域 -->
    <el-container>
      <el-main>
        <!-- 导航栏区域 -->
        <div class="nav_main">
          <div class="nav">
            <ul>
              <li>
               <router-link :to="{ path: './index'}" replace>首页</router-link>
              </li>
              <li>
               <router-link :to="{ path: './taoci'}" replace>陶瓷工艺品</router-link>
              </li>
              <li>
               <router-link :to="{ path: './liuli'}" replace>水晶琉璃</router-link>
              </li>
              <li>
               <router-link :to="{ path: './gold'}" replace>金属工艺品</router-link>
              </li>
              <li>
               <router-link :to="{ path: './suzhi'}" replace>树脂工艺品</router-link>
              </li>
              <li>
               <router-link :to="{ path: './ranzi'}" replace>染织工艺品</router-link>
              </li>
              <li>
               <router-link :to="{ path: './more'}" replace>木纸工艺品</router-link>
              </li>
              <li>
               <router-link :to="{ path: './history'}" replace style="color:red">工艺品历史</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 商品展示区域 -->
        <div class="show">
          <h2>工艺品</h2>
          <p>工艺品（英：art craft）它作为一种特殊商品流通于艺术市场,有一定艺术属性的能够满足人民群众日常生活所需，具有装饰、使用功能的商品。工艺品来源于人们的生活，却又创造了高于生活的价值。它是人类的智慧和现代工业技术的结晶。
纯手工艺制品（手作）应归属于艺术品范畴。</p>
        </div>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input3: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    clickIt: function () {
      window.location.href = './taoci'
      window.location.href = './index'
      window.location.href = './liuli'
      window.location.href = './gold'
      window.location.href = './history'
      window.location.href = './more'
      window.location.href = './ranzi'
      window.location.href = './suzhi'
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.all {
  height: 100%;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
p {
  text-indent: 2em;
}
// 主导航栏
.el-main {
  padding: 0;
}
.nav_main {
  width: 100%;
  height: 360px;
  background-image: url('http://img0.imgtn.bdimg.com/it/u=1602920856,2170761768&fm=26&gp=0.jpg');
  // background-repeat: no-repeat;
  background-position: 0 -76px;
}
.nav {
  // background-color: #eee;
  height: 30px;
}
.nav ul {
  width: 1200px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-left: 700px;
}
.nav ul li {
  float: left;
  list-style-type: none;
}
.nav ul li:first-child {
  margin-left: -78px;
}
.nav ul li a{
  text-decoration: none;
  padding: 0 20px;
}
// 展示
.show {
  width: 1230px;
  height: 1200px;
  margin: 15px auto;
  // background-color: pink;
}
// 导航栏 a的hover
.nav_main a {
  display: inline-block;
  height: 30px;
  line-height: 30px;
}
.nav_main a:hover{
  background-color: black;
  color: white;
}
</style>
