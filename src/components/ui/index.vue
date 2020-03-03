<template>
  <div class="all">
    <!-- <button @click="login">登录</button> -->
    <!-- 路由占位符 -->
    <!-- <router-view></router-view> -->
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="bear"></div>
        <!-- 导航栏居中  外面大盒子 -->
        <div class="header">
          <div class="wechat">官方微信</div>
          <!-- 登录与注册 -->
          <div class="login_register">
            <span>你好！</span>
               <router-link :to="{ path: './login'}" replace>请登录</router-link>
               <router-link :to="{ path: './register'}" replace>免费注册</router-link>
            <!-- <a href="#" @click="login">请登录</a>
            <a href="#" @click="register">免费注册</a> -->
          </div>
          <!-- 右侧导航菜单 -->
          <el-menu  class="el-menu-demo"  mode="horizontal"  background-color="#333"  text-color="#fff"  active-text-color="#DE342F">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <!-- 搜索区域 -->
        <div class="search">
          <div class="search_box">
              <div class="img">
                <img src="../../../public/load/art_logo.jpg" alt="logo">
                <img src="../../../public/load/hi.jpg" alt="">
              </div>
              <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
        </div>
        <!-- 导航栏区域 -->
        <div class="nav_main">
          <div class="nav">
            <ul>
              <li>
               <router-link :to="{ path: './index'}" replace style="color:red">首页</router-link>
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
               <router-link :to="{ path: './history'}" replace>工艺品历史</router-link>
              </li>
            </ul>
          </div>
          <!-- 轮播图 -->
          <div class="lunbo">
              <el-carousel :interval="5000" arrow="always">
                <el-carousel-item class="lunbo-box-item" v-for="(item,index) in abc_img"
                  :key="index">
                  <img :src="item.src" class="lunbotu" alt="轮播图">
                </el-carousel-item>
              </el-carousel>
          </div>
        </div>
        <!-- 精品字体 -->
        <div class="jing_tit">
          <h2>精品展示</h2>
          <em>Boutique display</em>
        </div>
        <!-- 推荐服务模块 start -->
        <div class="tuijian">
          <div class="recommend">
            <div class="recom-hd">
              <img src="../../../public/load/clock.png" alt="">
              <h3>show</h3>
            </div>
            <div class="recom-bd">
              <ul>
                <li>
                  <a href="#">
                    <img src="../../../public/images/pic.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../../public/images/pic.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../../public/images/pic.jpg" alt="">
                  </a>
                </li>
                <li class="last">
                  <a href="#">
                    <img src="../../../public/images/pic.jpg" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 楼层区域  -->
        <div class="floor">
          <!-- 陶瓷 -->
          <div class="taoci">
              <div class="box-hd">
                <span class="one"></span>
                <h3>陶瓷工艺品</h3>
                <div class="tab-list">
                  <ul>
                    <li>
                      <router-link :to="{ path: './taoci'}" replace>加载更多</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box-bd">
                <div class="box_bd_ci">
                  <ul>
                    <li>
                      <a href="javascipt:;">
                        <div class="lan">
                          <img src="../../../public/images/pic.jpg" alt="陶瓷">
                        </div>
                        <div class="zezhao">
                          <router-link :to="{ path: './taociPicOne'}" replace>遮罩</router-link>
                      </div>
                      </a>
                      <div class="description">
                        <p>123</p>
                      </div>
                    </li>
                    <li>
                      <a href="javascipt:;">
                        <div class="lan">
                          <img src="../../../public/images/pic.jpg" alt="陶瓷">
                        </div>
                        <div class="zezhao">
                          <router-link :to="{ path: './taociPicTwo'}" replace>遮罩2</router-link>
                      </div>
                      </a>
                      <div class="description">
                        <p>123</p>
                      </div>
                    </li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
              </div>
          </div>
          <!-- 水晶琉璃 -->
          <div class="liuli">
                <div class="box-hd">
                      <span class="two"></span>
                      <h3>水晶琉璃</h3>
                      <div class="tab-list">
                        <ul>
                          <li>
                            <router-link :to="{ path: './liuli'}" replace>加载更多</router-link>
                          </li>
                        </ul>
                      </div>
                   </div>
                <div class="box-bd">
                <div class="box_bd_ci">
                  <ul>
                    <li>
                      <a href="javascipt:;">
                        <div class="lan">
                          <img src="../../../public/images/pic.jpg" alt="陶瓷">
                        </div>
                        <div class="zezhao">
                        遮罩
                      </div>
                      </a>
                      <div class="description">
                        <p>123</p>
                      </div>
                    </li>
                    <li>
                      <a href="javascipt:;">
                        <div class="lan">
                          <img src="../../../public/images/pic.jpg" alt="陶瓷">
                        </div>
                        <div class="zezhao">
                        遮罩2
                      </div>
                      </a>
                      <div class="description">
                        <p>123</p>
                      </div>
                    </li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
              </div>
          </div>
          <!-- 金属工艺品 -->
          <div class="gold">
                <div class="box-hd">
                  <span class="three"></span>
                  <h3>金属工艺品</h3>
                  <div class="tab-list">
                    <ul>
                      <li>
                        <router-link :to="{ path: './gold'}" replace>加载更多</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="box-bd">
                  <div class="box_bd_ci">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
                </div>
          </div>
          <!-- 树脂工艺品 -->
          <div class="shuzi">
                <div class="box-hd">
                  <span class="four"></span>
                  <h3>树脂工艺品</h3>
                  <div class="tab-list">
                    <ul>
                      <li>
                        <router-link :to="{ path: './suzhi'}" replace>加载更多</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="box-bd">
                  <div class="box_bd_ci">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
                </div>
          </div>
          <!-- 织染工艺品 -->
          <div class="ziran">
                <div class="box-hd">
                  <span class="five"></span>
                  <h3>织染工艺品</h3>
                  <div class="tab-list">
                    <ul>
                      <li>
                        <router-link :to="{ path: './ranzi'}" replace>加载更多</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="box-bd">
                  <div class="box_bd_ci">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
                </div>
          </div>
          <!-- 工艺品延申 -->
          <div class="yanshen">
                <div class="box-hd">
                  <span class="six"></span>
                  <h3>工艺品延申</h3>
                  <div class="tab-list">
                    <ul>
                      <li>
                        <router-link :to="{ path: './ranshen'}" replace>加载更多</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="box-bd">
                  <div class="box_bd_ci">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
                </div>
          </div>
        </div>
      </el-main>
      <div class="footer">
        <div class="wa">
            <div class="footer_one">
                <p>下载工艺品客户端</p>
                <div class="jingpic">
                </div>
                <span class="span_one">PC版</span>
                <span class="span_two">Mac版</span>
                <span class="span_three">Android版</span>
                <span class="span_four">iPhone版</span>
            </div>
            <div class="footer_two">
                <p>特色产品</p>
                <div class="jingpicc">
                </div>
                <span class="span_one">More</span>
                <span class="span_two">Super Sound</span>
                <span class="span_three"> QPlay</span>
                <span class="span_four">互联网</span>
                <span class="span_five">展品展示</span>
            </div>
            <div class="footer_three">
                <p>合作链接</p>
                <table border="0" width="360" height="140">
                    <tr>
                        <td><a href="#">CJ ENM</a></td>
                        <td><a href="#">腾讯视频</a></td>
                        <td><a href="#">手机QQ空间</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">最新版QQ</a></td>
                        <td><a href="#">腾讯社交广告</a></td>
                        <td><a href="#">电脑管家</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">QQ浏览器</a></td>
                        <td><a href="#">腾讯微云</a></td>
                        <td><a href="#">腾讯云</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">企鹅FM</a></td>
                        <td><a href="#">智能电视网</a></td>
                        <td><a href="#">当贝市场</a></td>
                    </tr>
                </table>
            </div>
            <!-- 底部 -->
            <div class="footer_last">
                <a href="#">关于工艺品  </a>|
                <a href="#">About Tencent  </a>|
                <a href="#">服务条款  </a>|
                <a href="#">用户服务协议  </a>|
                <a href="#">隐私政策  </a>|
                <a href="#">权利声明  </a>|
                <a href="#">广告服务  </a>|
                <a href="#">网站招聘  </a>|
                <a href="#">客服中心  </a>|
                <a href="#">网站导航</a>
                <p class="current">Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
                <p>新乡学院 版权所有 新乡学院文化经营许可证</p>
            </div>

        </div>
      </div>
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
    // login () {
    //   this.$router.push('/login')
    // },
    // register () {
    //   this.$router.push('/register')
    // },
    clickIt: function () {
      window.location.href = './login'
      window.location.href = './register'
      window.location.href = './taoci'
      window.location.href = './index'
      window.location.href = './liuli'
      window.location.href = './gold'
      window.location.href = './history'
      window.location.href = './more'
      window.location.href = './ranzi'
      window.location.href = './suzhi'
      window.location.href = './taociPicOne'
      window.location.href = './taociPicTwo'
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
  height: 100px;
  border-bottom: 1px solid #EEEEEE;
}
.el-main {
  padding: 0;
}
.search_box {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
}
.search_box .img{
  float: left;
}
.search_box .img img{
  width: 150px;
  height: 100px;
  padding-left: 20px;
}
// 搜索框
.input-with-select {
  float: right;
  margin-right: 150px;
  margin-top: 20px;
}
.el-input-group {
  width: 400px;
}
// 主导航栏
.nav_main {
  width: 100%;
  height: 330px;
}
.nav {
  background-color: #eee;
}
.nav ul {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
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
// 轮播图
.el-carousel .el-carousel__container {
  position: relative;
  height: 500px!important;
}
.lunbo img{
  width: 100%;
  height: inherit;
}
/*推荐模块*/
.tuijian {
  width: 1200px;
  margin: 0 auto;
}
.recommend {
  height: 163px;
  margin-top: 10px;
}
.recom-hd {
  float: left;
  width: 200px;
  height: 163px;
  background-color: #5c5251;
  text-align: center;
}
.recom-hd img {
  margin: 30px 0 10px 0;
}
.recom-hd h3 {
  font-size: 18px;
  color: #fff;
  font-weight: normal;
}
.recom-bd {
  float: left;
  width: 1000px;
  height: 163px;
  background-color: #ebebeb;
}
.recom-bd li {
  list-style-type: none;
  float: left;
  width: 249px;
  height: 145px;
  border-right: 1px solid #ccc;
  margin-top: 10px;
}
.recom-bd .last {
  border-right: 0;
}
// h2部分
.jing_tit {
  width: 1200px;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  margin: 15px auto;
}
.jing_tit em {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #aaaaaa;
  line-height: 18px;
  background: #FFF;
  padding: 0 10px;
}
// 精品推荐
.recom-bd ul li {
  overflow: hidden;
}
.recom-bd img {
  // 过渡写到本身上， 谁做动画，给谁加
  transition: all .2s;
}
// 我们鼠标经过图片 往右走 8px
.recom-bd img:hover {
  margin-left: 8px;
}
// floor区域
.floor {
  width: 1200px;
  margin: 15px auto;
}
.floor>div {
  margin-top: 20px;
}
.box-hd {
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.box-hd .one,.two,.three, .four,.five,.six{
  float: left;
  width: 50px;
  height: 50px;
  background-image: url(../../../public/load/icon.png);
  background-position: 4px 2px;
  background-size: 306%;
}
.box-hd .two {
  background-position: -57px 2px;
}
.box-hd .three {
  background-position: -103px 2px;
}
.box-hd .four {
  background-position: -57px -59px;
}
.box-hd .five {
  background-position: -153px -59px;
}
.box-hd .six {
  background-position: -106px -115px;
}
.box-hd h3 {
  float: left;
  margin-left: 10px;
}
.box-hd .tab-list {
  float: right;
}
.tab-list li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
// 工艺品展示图片
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
.zezhao a {
  width: 290px;
  height: 300px;
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
// 底部
/*footer部分*/
.footer {
    height: 500px;
    background-color: #333333;
    border: 1px solid transparent;
}
.footer .wa {
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
}
.footer_one {
     position: relative;
    float: left;
    width: 400px;
    height: 300px;
}
 .footer_one p {
    float: left;
    color: #99997f;
    font-size: 20px;
    text-indent: 2em;
    margin-bottom: 55px;
}
 .jingpic {
    float: left;
    width: 390px;
    height: 48px;
    background-image: url(../../../public/load/footer.png);
    background-repeat: no-repeat;
    background-position: 46px -1px;
}
 .footer_one .span_one {
    position: absolute;
    top: 147px;
    left: 48px;
    color: #99997f;
}
.footer_one .span_two {
    position: absolute;
    top: 147px;
    left: 136px;
    color: #99997f;
}
 .footer_one .span_three {
    position: absolute;
    top: 147px;
    left: 213px;
    color: #99997f;
}
 .footer_one .span_four {
    position: absolute;
    top: 147px;
    left: 307px;
    color: #99997f;
}
.footer_two {
    position: relative;
    float: left;
    width: 390px;
    height: 300px;
}
.footer_two p {
    float: left;
    color: #99997f;
    font-size: 20px;
    text-indent: 2em;
    margin-bottom: 55px;
}
.jingpicc {
    float: left;
    width: 400px;
    height: 48px;
    background-image: url(../../../public/load/footer.png);
    background-repeat: no-repeat;
    background-position: -325px -1px;
}
.footer_two .span_one {
    position: absolute;
    top: 147px;
    left: 37px;
    color: #99997f;
}
.footer_two .span_two {
    position: absolute;
    top: 147px;
    left: 116px;
    color: #99997f;
}
 .footer_two .span_three {
    position: absolute;
    top: 147px;
    left: 234px;
    color: #99997f;
}
 .footer_two .span_four {
    position: absolute;
    top: 185px;
    left: 37px;
    color: #99997f;
}
.footer_two .span_five {
    position: absolute;
    top: 185px;
    left: 116px;
    color: #99997f;
}
.footer_three {
    float: left;
    width: 400px;
    height: 300px;
}
.footer_three p {
    float: left;
    color: #99997f;
    font-size: 20px;
    text-indent: 2em;
    margin-bottom: 55px;
}
table a{
    color: #99997f;
}
.footer_last {
    width: 1200px;
    text-align: center;
    color: #99997f;
}
.footer_last a {
    color: #99997f;

}
.footer_last p {
    height: 30px;
    line-height: 30px;
}
.footer_last p.current {
    margin-top: 30px;
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
