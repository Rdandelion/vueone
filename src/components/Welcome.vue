<template>
  <div class="all">
    <div class="header">
      <h1>欢迎来到工艺品后台管理系统</h1>
    </div>
    <div class="home-inner-pro">
      <div class="earth-box">
        <i class="banner-earth">
          <img src="../../public/images/earth01.png" alt="">
        </i>
      </div>
      <div class="banner-line">
        <!-- <i class="circle01"></i>
        <i class="circle02"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
.header {
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.all {
  // width: 1720px;
  // height: 908px;
  width: 100%;
  height: 100%;
  background-image: url(../../public/images/banner_bg.jpg);
  background-repeat: no-repeat;
  background-position: center top;
}
h1 {
 font-size: 38px;
 color: white;
}
.home-inner-pro {
  position: relative;
  top: 0;
  left: 0;
}
.earth-box {
  width: 500px;
  height: 500px;
  margin: 84px auto;
  // background-color: pink;
}
  // 星球
.earth-box img{
  width: 100%;
  height: 100%;
}

// 环
.banner-line {
  position: absolute;
  top: 50px;
  left: 35%;
  width: 500px;
  height: 500px;
  margin: auto;
  // background-color: pink;
}
.banner-line > i {
  position: absolute;
  top: 130px;
  bottom: 0;
  left: 0;
  // width: 500px;
  // height: 500px;
  display: block;
  margin: auto;
}
.circle01 {
  background-image: url(../../public/images/spr_bannerPathway.png);
  background-position: -2436px 0px;
  background-repeat: no-repeat;
  // background-size: 50% 50%;
  // width: 719px;
  // height: 719px;
  width: 419px;
  height: 419px;
  -webkit-animation: ani_line 30s linear infinite;
  animation: ani_line 30s linear infinite;
}
.circle02 {
  background-image: url(../../public/images/spr_bannerPathway.png);
  background-position: -2436px -724px;
  background-repeat: no-repeat;
  // background-size: 50% 50%;
  // width: 648px;
  // height: 674px;
  width: 348px;
  height: 374px;
  animation: ani_line 3s steps(180) infinite reverse;
}
@keyframes ani_line {
  0% {
    -webkit-transform: none;
    transform: none;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
}
</style>
