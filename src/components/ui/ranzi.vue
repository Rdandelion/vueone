<template>
  <!-- <div>金属工艺品</div> -->
  <div class="all">
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="bear"></div>
        <!-- 导航栏居中  外面大盒子 -->
        <div class="header">
          <div class="wechat">
            <a href="javascript:;">官方微信</a>
            <div class="er">
            <img src="../../../public/images/er.png" alt="">
            </div>
          </div>
          <!-- 登录与注册 -->
          <div class="login_register">
            <span>你好！</span>
            <a href="#" @click="login">请登录</a>
            <a href="#">免费注册</a>
          </div>
        </div>
      </el-header>
      <el-main>
        <!-- 搜索区域 -->
        <div class="search">
          <img src="../../../public/images/head1.jpg" alt="head">
        </div>
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
               <router-link :to="{ path: './ranzi'}" replace style="color:red">染织工艺品</router-link>
              </li>
              <li>
               <router-link :to="{ path: './more'}" replace>木纸工艺品</router-link>
              </li>
              <li>
               <router-link :to="{ path: './history'}" replace>工艺品历史</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 商品展示区域 -->
        <div class="show">
          <div class="box_bd_ci">
            <ul>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_2.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicOne'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>竹篮</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_3.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicTwo'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>针织小熊</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_4.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicThree'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>竹筒</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_5.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicFour'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>盛开的花</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_6.webp" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicFive'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>金鼠送福</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_2.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicOne'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>竹篮</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_3.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicTwo'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>针织小熊</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_4.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicThree'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>竹筒</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_2.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicOne'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>竹篮</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_5.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicFour'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>盛开的花</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_6.webp" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicFive'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>金鼠送福</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_2.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicOne'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>竹篮</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_3.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicTwo'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>针织小熊</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_4.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicThree'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>竹筒</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_5.jpg" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicFour'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>盛开的花</p>
                </div>
              </li>
              <li>
                <a href="javascipt:;">
                  <div class="lan">
                    <img src="../../../public/ranzi/1_6.webp" alt="染织">
                  </div>
                  <div class="zezhao">
                    <router-link :to="{ path: './ranziPicFive'}" replace>详情</router-link>
                </div>
                </a>
                <div class="description">
                  <p>金鼠送福</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input3: '',
      abc_img: [
        { src: require('../../../public/images/banner239-1.jpg') },
        { src: require('../../../public/images/banner239-4.jpg') },
        { src: require('../../../public/images/banner239-6.jpg') }
      ]
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
.bear {
  position: absolute;
  z-index: 999;
  width: 200px;
  height: 100px;
  background: url(../../../public/images/bear.png) no-repeat;
  /* 我们元素可以添加多个动画， 用逗号分隔 */
  animation: bear .4s steps(8) infinite, move 5s forwards;
}
@keyframes bear {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -1600px 0;
    }
}
@keyframes move {
    0% {
        left: 0;
    }
    100% {
        left: 92%;
        // margin-left: -100px;
        transform: translateX(-50%);
    }
}
.el-header {
  background-color: #333;
  border-bottom: 2px solid rgb(240, 37, 30);
}
.header{
  width: 1200px;
  height: 100%;
  color: white;
  margin: 0 auto;
}
.wechat {
  float: left;
  width: 120px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: #DE342F;
}
.login_register{
  float: left;
  margin-left: 30px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.login_register a:nth-child(2) {
  text-decoration: none;
  padding: 0 10px;
  color: #DE342F
}
.login_register a:last-child {
  text-decoration: none;
  padding: 0 30px;
  color: #DE342F
}
.el-main {
  padding: 0;
}
.el-menu-demo{
  float: right;
}
.header ul {
  height: 55px;
}
.header ul li {
  height: 58px;
}
// 导航里的下拉菜单的高就是无法调整？？？？
.el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 58px !important;
  line-height: 58px !important;
}
// main里的第一部分（搜索区域）
.search {
  height: 150px;
}
.search img {
  height: 150px;
  width: 100%;
}
// 主导航栏
.nav_main {
  width: 100%;
  height: 30px;
}
.nav {
  background-color: #eee;
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
.box-bd {
  width: 1300px;
  height: 450px;
  margin: 0 auto;
}
.box_bd_ci ul li {
  overflow: hidden;
  list-style: none;
  float: left;
  margin-right: 15px;
  margin-top: 20px;
  width: 290px;
  height: 400px;
  // background-color: pink;
  border:1px solid #ccc;
}
.box_bd_ci li img {
  width: 290px;
  height: 300px;
}
.box_bd_ci li .description {
  margin-top: 5px;
  width: 290px;
  height: 100px;
  text-align: center
}
.lan{
  overflow: hidden;
  width: 290px;
  height: 300px;
}
// 图片的遮罩层
.box_bd_ci li a {
  overflow: hidden;
  width: 290px;
  height: 300px;
  position: relative;
}
.zezhao {
  position: absolute;
  top: -300px;
  left: 0;
  width: 290px;
  height: 300px;
  opacity: 0;
  background-color: red;
  transition: all .5s ease-in;
  text-align: center;
  line-height: 300px;
  color: white;
}
.box_bd_ci a img {
  // 过渡写到本身上， 谁做动画，给谁加
  transition: all .5s ease-in;
}
.box_bd_ci a:hover img{
  transform: scale(1.1);
}
.box_bd_ci a:hover .zezhao {
  opacity: .4;
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
.box_bd_ci .description p {
    margin-top: 40px;
}
// 二维码
.wechat a {
  color: white;
  font-size: 16px;
}
.er img{
  position: absolute;
  top: 60px;
  left: 348px;
  width: 128px;
  height: 116px;
}
.header .er img{
  opacity: 0;
}
.er img {
  // 过渡写到本身上， 谁做动画，给谁加
  transition: all .2s;
}
.wechat:hover img{
    opacity: 1;
}
</style>
