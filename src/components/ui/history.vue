<template>
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
          <p>工艺品（英：art craft）它作为一种特殊商品流通于艺术市场,有一定艺术属性的能够满足人民群众日常生活所需，具有装饰、使用功能的商品。工艺品来源于人们的生活，却又创造了高于生活的价值。它是人类的智慧和现代工业技术的结晶。</p>
          <div class="kong"></div>
          <p>工艺品 现代社会人们寄托情感，不像农业社会人们的情感与大自然同期性的循环，把种子埋在土里，等待他发芽结果，淡淡的惆怅，浸润着淡淡的喜悦。那种情感像土地一样悠远，浑厚，朴素。工艺品的艺术感是一种额外的馈赠，他刨除了原始的欲望而是生活的衍伸，故若是欣赏则价值连城，且趣味无穷。若是感知不到则一文不值且徒增烦恼. 而我们每个人都是一件工艺品。</p>
          <img src="../../../public/liuli/1_1.jpg" alt="" class="his_1">
          <div class="kong"></div>
          <h2>特点：</h2>
          <div class="kong"></div>
          <h3>制作更加细致:</h3>
          <p>虽然当前机器生产的流水线工艺流程迅猛发展之下，其高效率的制造速度成为主流。然而电脑制品往往为了达到效果，千遍一律的制造方式让工艺品变得粗糙。而手工艺品在纯手工的精心雕琢，保证工艺品的精美，在每一丝条纹上，一刀一刻都凝集着劳动人民的细心和耐心。</p>
          <div class="kong"></div>
          <h3>制作更独一无二:</h3>
          <p>当然机器生产的流水线都采用模板批量生产方式，因而生产出来的工艺品都是千遍一律，没有一点艺术收藏价值。而好的手工艺品一般出自大师级人物手中，在艺术收藏方面更加有收藏价值。因此手工艺品具有电脑工艺品无可取代独一无二的价值。</p>
          <div class="kong"></div>
          <h3>艺术品种多样:</h3>
          <p>手工艺品灵感源自生活，取材源自自然。例如经典的手工艺品有木雕、石雕、捏泥人、编竹篮等等。这些艺术品品种多样，而电脑工艺品设计需要繁杂的多道程序。因此手工艺品是电脑工艺流程所难以普及的。在繁多的手工艺品当中，百花齐放，让民间工艺智慧传承下来。</p>
          <div class="kong"></div>
          <h3>部分工艺品还是传承非物质文化</h3>
          <p>无论是精美的中国结，还是街头经典的吹糖人，以及各类手工刺绣等。都是自古流传的非物质文化遗产。而当前这些文化艺术正在逐渐消失，因此手工艺品是保护和流传非物质的重要措施之一。经典的手工艺品就是一项经典的非物质文化遗产。</p>
          <div class="kong"></div>
          <p>无论机器生产的流水线发展的再好，手工艺品都能够凭借其独特的魅力经久不衰的传承下去，手工艺品优点诸多，它不仅制作精细、健康无害、更是独一无二的收藏品，因此其在大环境下能够独树一帜。</p>
        </div>
      </el-main>
    </el-container>
        <div class="fooler"></div>
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
  background-image: url('../../../public/images/yu.jpg');
  // background-repeat: no-repeat;
  background-position: 0 -76px;
  background-size: 637px 444px;
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
.kong {
  width: 1200px;
  margin: 20px auto;
}
.his_1 {
  width: 1200px;
  height: 540px;
  margin: 20px auto;
  }
  .fooler{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
  }
</style>
