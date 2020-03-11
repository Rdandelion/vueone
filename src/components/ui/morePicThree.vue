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
              <el-breadcrumb-item :to="{ path: '/more' }">木纸工艺品</el-breadcrumb-item>
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
              <div class="sku_name">纺织工艺品</div>
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
                  <p>唐三彩，是从唐墓挖掘出来的陶器之泛称，后来学者视为一种陶瓷分类上的术语。
                    唐三彩并非专指那三种色彩而言。在唐墓中所挖掘出来的各类陶俑、陶像，以及其他陶器上，
                    有的只有单彩，或者二彩，有甚多的器物，却具有较复杂的多彩颜色。一般而言，
                    除了胎体的白地之外，铅黄、绿、青三彩最为普遍，在三彩的调配技法上，也最富艺术的韵味。
                    唐三彩的器皿较少，而小马、小家畜、小家禽数量较多，均具丰美的艺术意匠，尤以各种人物的陶俑，
                    以及超自然形象的魌头，最具艺术价值。三彩器正表现出唐代各种实际生活所应用的器物，
                    而在这些器物中，却把当时社会生活的形态很完备的呈现出来，由此获知殉葬的明器与其他器物的形制与数量，
                    均按照墓葬者生前官阶，以及门第的大小而定。例如唐礼明器之制，三品以上九十事，五品以上六十事，
                    九品以上四十事。挺马偶人高一尺。其他音乐队、童仆之属、威仪服玩，亦各视其生前之品秩而定之。
                    初唐之末期，始兴厚葬之风，其后自盛唐至中、晚唐，厚葬之风益甚，舁明器而行街衢，陈墓所，
                    奏歌舞音乐，张帷幕，设盘牀，以造花、人形、饮食施路人，殆如祭祀. 因为唐代讲究以三彩明器作为陪葬品，
                    所以，从清末建筑河南汴洛铁路以来，在洛阳北郊邙山等地之唐墓中，先后发掘为数颇多之三彩器与俑像。
                    唐三彩不论其形制与色彩之施化，均具极高之艺术意匠，乃引起日本、欧美各国人士之注目，而以高价购藏，
                    从此唐三彩遂被列入世界艺术之一部分。以上引自君友会王爱君美术文献《唐三彩》。
                    唐三彩制作最盛之时为开元、天宝至大历年间（公元七一三～七六六年）。其艺术成就是震古铄今，
                    闻名中外的。唐三彩是由一个健全强明的朝代所启毓而成，同时，它也具体而活跃的反映出此一健全强明的时代精神。</p>
                    <h2>从唐三彩马的造型看，大致可以把它们划分为五类。</h2>
                    <p>一是奔马俑。如腾空奔马俑，1966年西安出土,现藏西安市文物管理处。唐代三彩雕塑者抓住了奔马四蹄腾空一瞬间的景象，塑造了一匹极具动感的三彩马，其“胡马大宛名，锋棱瘦骨成。竹批双耳峻，风入四蹄轻”的形象有着十分强烈的视觉效果，让人回味无穷。奔马俑在出土彩绘陶器中屡有发现，但在出土唐三彩中却极为罕见。据现有资料显示，国内馆藏三彩器中挂蓝釉腾空骑马俑仅此一件，国外尚未发现有类似的三彩马俑。</p>
                    <p class="kong"></p>
                    <p>二是提腿马俑。唐三彩提腿马俑通常是三蹄落地，右前蹄抬起 。这匹挂蓝釉三彩马的构思非常精妙，三蹄踏于三角形底板之上，前腿直，后腿弓，右前腿略微抬起，腿部肌肉突显矫健。唐代匠师抓住了马的特点，塑造了一匹栩栩如生、异常健美的战马形象。</p>
                    <p class="kong"></p>
                    <p>三是马上人俑。马上人俑是唐三彩马中的重要品种。三彩马上人俑的坐骑一般都采用立姿，而马上人则多姿多彩，既有狩猎射箭者，又有打马球者；既有胡人，也有汉人；既有男人，还有女人。马上胡人通常都是深目高鼻，落腮胡子，面容粗犷，肌肉发达，反映出强悍豪放之气。马上女俑则婀娜多姿，衣着华丽，发髻高耸，体态丰腴，飒爽英姿。</p>
                    <p class="kong"></p>
                    <p>四是马拉车俑。在三彩马俑中，马拉车俑较罕见。拉车马体形虽然不大，但造型格外逼真。马头高昂，双目圆睁，仰天长啸，同时马尾上翘，富有生气，使一件静态的作品突显动感。</p>
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
      url: 'https://gd1.alicdn.com/imgextra/i3/0/TB1Ody0HpXXXXXEXFXXXXXXXXXX_!!0-item_pic.jpg',
      srcList: [
        'https://gd1.alicdn.com/imgextra/i3/0/TB1Ody0HpXXXXXEXFXXXXXXXXXX_!!0-item_pic.jpg'
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
