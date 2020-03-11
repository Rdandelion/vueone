<template>
  <div class="all">
    <!-- 页面主体区域 -->
    <el-container>
      <div class="big">
        <div class="logo">
            <img src="../../../public/load/art_logo.jpg" alt="logo">
            <img src="../../../public/load/kool.jpg" alt="logo">
        </div>
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
                <router-link :to="{ path: './history'}" replace>工艺品历史</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="main_middle">
          <!-- 面包屑 -->
          <div class="main_middle_header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/taoci' }">陶瓷</el-breadcrumb-item>
              <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 左右两栏 -->
          <div class="fen_qu">
            <!-- 左侧 -->
            <div class="middle_left">
              <div class="demo-image__preview">
                <el-image  style="width: 100px; height: 100px" :src="url"  :preview-src-list="srcList"></el-image>
              </div>
            </div>
            <!-- 右侧 -->
            <div class="middle_right">
              <div class="sku_name">唐三彩</div>
              <div class="news">唐三彩马陶瓷马摆件工艺品手工礼品复古家具装饰品中式客厅礼品摆</div>
              <div class="summary">
                <dl class="summary_price">
                  <dt>估价</dt>
                  <dd>
                  <i class="price">￥180.00 </i>
                  <a href="#">有误差</a>
                  <div class="remark">累计访问612188</div>
                  </dd>
                </dl>
                <dl class="summary_promotion">
                  <dt>外观</dt>
                  <dd>
                  <em>工艺品</em>
                 马，唐三彩马是唐三彩陶器中最常见的题材。一般作为随葬品，在唐代非常盛行
                  </dd>
                </dl>
                <dl class="summary_support">
                  <dt>组成</dt>
                  <dd>唐三彩是指唐代俑器和陶器上的釉色而言。唐时多以红、绿、黄为主，故称"唐三彩"。 三彩是通称，并不限于三种颜色。除红、绿、黄外，还有白、黑、兰紫等颜色。</dd>
                </dl>
                <dl class="summary_support">
                  <dt>适用</dt>
                  <dd>马，有千里之志，纵横天下，驰聘万里，人对马都有种特别的情愫，数千年来，马常伴于人们身边，与人们同甘共苦，具有坚定顽强的品质，事宜摆在家中</dd>
                </dl>
              </div>
            </div>
          </div>
          <!-- 下方详情 -->
          <div class="main_footer">
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="工艺品简介" name="first" class="first">
                    <p class="kong"></p>
                    <p>在中国，陶瓷的产生距今已有三千年的历史，经历了由陶到瓷，再陶、瓷齐驱的发展历程。这种采用手工绘画、手工制作的高温瓷，是在逐渐以自身独特的文化含量和艺术魅力改变并影响世界时被喻为了中国文化的象征。史料中有这样的记载：“新平治陶，始于汉世。” 中国瓷器的发展在实用的前提下，经过完美的艺术形式，达到了一种和谐、高贵、华丽之美。中国瓷器艺术的魅力在造型、釉色极其装饰性能方面也表现出自身发展的连续性，大型器皿有着阳刚伟岸的雄姿，把玩之物在于其精巧玲珑的姣美；绚烂之丽的彩瓷，翡翠美玉般的色釉瓷，景德镇瓷器既表现着国画工笔描绘的空灵与神采，也显示出了集刻、划、雕、印之法的写意与装饰工艺。技巧之精湛，手工之高超，绘画描摹之丰富，都有其令人印象深刻之处。</p>
                    <p class="kong"></p>
                    <p>五是立马俑。立马俑是唐三彩中最常见的品种，即四腿直立于长方形底板之上的三彩马，但三彩立马中也不乏精品。该马高40厘米，通体呈白色，伸颈低头，装饰工艺极为精湛，任何细部都处理得一丝不苟，比如梳理整齐的马鬃，杏叶形的饰片和鞍鞯上的绿边饰等，无一不是如此。该马1959年出土于陕西西安市，现藏陕西省博物馆。</p>
                </el-tab-pane>
                <el-tab-pane label="制作流程" name="second" class="second">
                  <p> 制作唐三彩的原料是一种叫作“高岭土”的优质黏土。这种黏土可不一般，经过长时间的淘练和陈腐之后，它的质地变得极为细腻，像橡皮泥一样可塑性极强，又不容易变形。同时又有很强的吸水性，可以使粘结的部分浑为一体，晾干后不易开裂。</p>
                  <img src="http://www.zhongguociwang.cn/upload/2015-05/15050616476137.jpg" alt="制作">
                  <p>有了优质的原料以后，就是塑形了。图中高水旺正在雕塑一匹半个人高的骏马。在制作大型或者较为复杂的三彩时，通常是采用雕塑成型的方法。高水旺说，最难雕刻的部分是马的眼睛和嘴巴。牵一发而动全身，一匹马的全部灵气就汇聚在这两个部位上。眼睛要怎么修才能带神，嘴巴要怎么咧才有劲，这里面可都有讲究。</p>
                  <img src="http://www.zhongguociwang.cn/upload/2015-05/15050616489346.jpg" alt="制作">
                  <p> 对于较小的器件则可以采取模制成型的方法。通常分为两到三个模具，各部分分别成形后再将它们合在一起。 对于较小的器件则可以采取模制成型的方法。通常分为两到三个模具，各部分分别成形后再将它们合在一起。</p>
                  <img src="http://www.zhongguociwang.cn/upload/2015-05/15050616516473.jpg" alt="制作">
                  <p>坯胎成型晾干后，就进入不带釉的第一次烧造，称为“素烧”。高水旺所搭的窑形状像一个馒头，当地称为“馒头窑”。经过1100℃左右的高温烧造，坯胎在冷却后呈现出温润的乳白色，像一块洁白的画布在等待着涂抹。</p>
                  <img src="http://www.zhongguociwang.cn/upload/2015-05/15050616521990.jpg" alt="制作">
                  <p>  接着，便是形成唐三彩特有色泽的最关键一步——施釉。这些釉料由不同的金属氧化物调制而成（至于具体的配方当然就不方便透露了）。从图片上看，这些釉料不过是深浅不一的红色罢了，可是在下面的图片中你会看到，经过烈焰的洗礼，这些红色将分化成五颜六色。</p>
                  <img src="http://www.zhongguociwang.cn/upload/2015-05/15050616531375.jpg" alt="制作">
                  <p>挂上釉色以后，便进入第二次烧造，称“釉烧”。在900℃的高温中，这些釉料的颜色发生奇妙的变化，在烈火的烘烤之下，黄、绿、褐等颜色釉被表现得绚丽多姿，它们自然垂流，相互交融，颜色在泥胎上奔跑，如同它诞生的那个时代那样自由而奔放。</p>
                  <img src="http://www.zhongguociwang.cn/upload/2015-05/15050616547236.jpg" alt="制作">
                  <p>这就是唐三彩工艺品制作的全部流程。说不定在一千多年前的盛唐，唐三彩也是这么被制作出来的。</p>
                </el-tab-pane>
                <el-tab-pane label="趣味历史" name="third" class="third">
                  <p>唐三彩是唐代陶瓷中的精华，因为最早最多出土于洛阳，故被称为“洛阳唐三彩”。作为中国艺术瑰宝，唐三彩制品因其造型生动、颜色鲜艳、地域风情浓烈，有着迷人魅力，因此一直受到各博物馆、收藏家的追捧与热爱。 马可以多方位地折射出唐文化的绚丽光彩，不仅为人们提供了认识中国唐文化历史价值的宝贵实物资料，而且也使得一批又一批中外藏家为它的艺术魅力所倾倒。然而唐三彩在地下一千多年后重出于土时，却并不受待见！皆因为它是墓葬的陪葬品，带有阴气、晦气。</p>
                  <p>1899年，勘探洛阳至开封铁路时，古墓中发现三彩器物，以晦气为由毁之。1905年，修建洛阳至开封铁路，古墓中发现的三彩器物被文物贩子运至北京琉璃厂古玩市场，无人问津。20世纪20年代，在北京古玩店的角落里，国学大师王国维和罗振玉慧眼识宝，中外收藏者始竞相收购。
                  唐三彩的受棒核心原因在于唐三彩的不可复制性、稀缺性。自唐代之后，唐三彩的制作工艺已经完全失传，后人虽极尽其力，但终不能攻克复制。《中国历史密码》这本书中关于唐三彩的介绍和故事，也非常详尽。
                  然而在20世纪90年代，唐三彩的制造终于被攻克，并且演绎出传奇的故事。
                  话说在1994年，传闻河南某个大墓被盗，中国国家博物馆、故宫博物院等为了防止文物流失乃至流往国外，正在甩出巨资抢购新近出现在潘家园古玩市场上的三彩陶俑。倘若不抢购的话，将追悔莫及。
                  然而当中国文博界的顶级专家曾扔下近百万，纷纷收购之后，并将之当成镇馆之宝时，却啥眼了！越是抢购，陶俑越多，总是抢不完！时任国家文物局局长吕济民回忆说：中国历史博物馆（现在的中国国家博物馆）买了3次，花了80万元；故宫博物院买了2次，花了10万元。
                  于是警方开始介入，查来查去，追查到洛阳市孟津县南石山村，追到了高水旺先生的家里......
                  事情终于揭开了谜底！原来是经过多年研究，农民高水旺攻克了唐三彩的高仿工艺。无论是胎釉特征、造型风格、光龄釉龄，还是银斑、细开片、哈利光等专家们借以辨识真假唐三彩的“眼上功夫”，甚至测试物质老化年代的碳14技术，都被攻破！高水旺已基本掌握了其中的技术秘密！高水旺只是按客户的图纸要求订作的。
                  这让专家们大破眼镜！至今潘家园的“惊天大案”成了收藏界的笑谈。</p>
                </el-tab-pane>
              </el-tabs>
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
      url: 'https://img.alicdn.com/bao/uploaded/i4/1104199963/O1CN01MpNSWK2NT6aP3ixgO_!!0-item_pic.jpg_360x360xzq90s150.jpg_.webp',
      srcList: [
        'https://img.alicdn.com/bao/uploaded/i4/1104199963/O1CN01MpNSWK2NT6aP3ixgO_!!0-item_pic.jpg_360x360xzq90s150.jpg_.webp'
      ],
      activeName: 'first'
    }
  },
  created () {
    // this.getPicList()
    // this.fangDaJing()
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
    },
    getPicList () {
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
i {
  font-style: normal;
  font-size: 16px;
}
em {
  font-style: normal;
}
.big {
    width: 1200px;
    margin: 0 auto;
}
.big .logo {
    width: 1200px;
    height: 100px;
}
.logo img{
    height: 100%;
}
.logo img:last-child {
  width: 370px;
  float: right;
  margin-right: 170px;
}
.nav_main {
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #DE342F;
}

.nav ul {
  width: 1200px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-left: 250px;
}
.nav ul li {
  float: left;
  list-style-type: none;
}
.nav ul li:first-child {
  margin-left: -78px;
}
.nav ul li a{
  display: inline-block;
  text-decoration: none;
  padding: 0 20px;
  height: 32px;
  line-height: 32px;
}
.nav ul li a:hover {
  background-color: #DE342F;
  color: white;
}
.main_middle {
  height: 500px;
  // background-color: pink;
  margin: 10px;
}
.main_middle_header span{
  font-size: 14px;
}
// 分区
.fen_qu {
  height: 500px;
}
// 左
.middle_left {
  width: 40%;
  height: 450px;
  float: left;
  // background-color: blue;
  // padding: 20px;
  border: 1px solid #ccc;
}
// .xiang_img {
//   width: 250px;
//   height: 250px;
//   margin-top: 90px;
//   margin-left: 110px;
// }
.demo-image__preview {
  width: 250px;
  height: 250px;
  margin-top: 90px;
  margin-left: 110px;
}
.demo-image__preview img {
  width: 100%;
  height: 100%;
}
// element.style {
//   width: 250px;
//   height: 250px;
// }
.el-image {
  width: 250px!important;
  height: 250px!important;
}
// 右
.middle_right {
  width: 50%;
  height: 420px;
  float: right;
  // background-color: skyblue;
  // padding: 20px;
}
.sku_name {
  height: 30px;
  font-size: 16px;
  font-weight: 700;
}
.news {
  font-size: 14px;
  height: 32px;
  color: #e12228;
}
.summary {
  font-size: 13px;
}
.summary dl {
  overflow: hidden;
}
.summary dt,
.summary dd {
  float: left;
}
.summary dt {
  width: 60px;
  padding-left: 10px;
  line-height: 36px;
}
.summary_price ,
.summary_promotion {
  position: relative;
  padding: 10px 0;
  background-color: #fee9eb;
}
.price {
  font-size: 24px;
  color: #e12228;
}
.summary_price a {
  color: #c81623;
}
.remark {
  position: absolute;
  right: 10px;
  top: 20px;
}
.summary_promotion {
  padding-top: 0;
}
.summary_promotion dd {
  width: 450px;
  line-height: 36px;
}
.summary_promotion em {
  display: inline-block;
  width: 40px;
  height: 22px;
  background-color: #c81623;
  text-align: center;
  line-height: 22px;
  color: #fff;
}
.summary_support dd {
  line-height: 29px;
  width: 490px;
}
// 放大图片(不成功)
// .el-image-viewer__img {
//   transform: scale(3) rotate(0deg)!important;
// }
// tab栏 简介
.el-tabs p{
  text-indent: 2em;
}
.el-tabs .first h2{
 margin: 20px;
}
.el-tabs  p:last-child{
  margin-bottom: 50px;
}
.el-tabs .first .kong {
  padding: 10px;
}
.el-tabs  img {
  margin-left: 30%;
}
</style>
