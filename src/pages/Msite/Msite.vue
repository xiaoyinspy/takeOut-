<template>
<div class="content">
  <section class="on">
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
      <router-link slot="search" to="/search" class="item-icon">
          <i class="iconfont icon-sousuo"></i>
      </router-link>
    <a class="login" id="loginIn" slot="login" to="/login" @click="login()">登录|注册</a>
    </HeaderTop>
    <div class="containerC take-out">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a class="item">
            <img src="./nav/1.jpg" alt="menu">
            <span>甜品饮品</span>
          </a>
          <a class="item">
            <img src="./nav/2.jpg" alt="menu">
            <span>商超便利</span>
          </a>
          <a class="item">
            <img src="./nav/3.jpg" alt="menu">
            <span>美食</span>
          </a>
          <a class="item">
            <img src="./nav/4.jpg" alt="menu">
            <span>简餐</span>
          </a>
          <a class="item">
            <img src="./nav/5.jpg" alt="menu">
            <span>新店特惠</span>
          </a>
          <a class="item">
            <img src="./nav/6.jpg" alt="menu">
            <span>准时达</span>
          </a>
          <a class="item">
            <img src="./nav/7.jpg" alt="menu">
            <span>订阅早餐</span>
          </a>
          <a class="item">
            <img src="./nav/8.jpg" alt="menu">
            <span>甜品饮品</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a class="item">
            <img src="./nav/1.jpg" alt="menu">
            <span>甜品饮品</span>
          </a>
          <a class="item">
            <img src="./nav/2.jpg" alt="menu">
            <span>商超便利</span>
          </a>
          <a class="item">
            <img src="./nav/3.jpg" alt="menu">
            <span>美食</span>
          </a>
          <a class="item">
            <img src="./nav/4.jpg" alt="menu">
            <span>简餐</span>
          </a>
          <a class="item">
            <img src="./nav/5.jpg" alt="menu">
            <span>新店特惠</span>
          </a>
          <a class="item">
            <img src="./nav/6.jpg" alt="menu">
            <span>准时达</span>
          </a>
          <a class="item">
            <img src="./nav/7.jpg" alt="menu">
            <span>订阅早餐</span>
          </a>
          <a class="item">
            <img src="./nav/8.jpg" alt="menu">
            <span>甜品饮品</span>
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!--附近商家-->
    <ShopList/>
  </div>
  </section>
</div>
</template>

<script>
import Swiper from 'swiper'
import "./../../../node_modules/swiper/dist/css/swiper.css"
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import ShopList from "../../components/ShopList/ShopList.vue"

export  default {
    components:{
        HeaderTop,
        ShopList
    },
    methods:{
      login(){
        this.$router.push("/login")
      }
    },
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      });
}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .content
    position relative
    height 100%
    >section
      width 100%
      display block
      .containerC
        padding-top 40px
        overflow hidden
        .swiper-container
          bottom-border-1px(#e6e6e6)
          height 180px
          .swiper-slide
            background white
            height 100%
            width 100%
            display flex
            flex-direction row //侧轴居中
            align-items center
            flex-wrap wrap
            font-size 12px
            .item
              text-align center
              margin-top 10px
              width 25%
              display flex
              flex-direction column
              align-items center
              justify-content space-around
              img
                width 50px
                margin-bottom 5px
                height 50px

</style>
