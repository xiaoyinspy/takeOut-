<template>
  <div class="shop">
    <div class="title">
      <span>
          <i class="iconfont icon-wenbenduiqi"></i>
      </span>
      <a href="javascript:">附近商家</a>
    </div>
    <a class="merchant">
      <img src="./shop/1.jpg" alt="shop">
      <div class="des">
        <div class="brand">品牌</div>
        <div class="name">锄禾日当午...</div>
        <div class="server">
          <span>保</span><span>准</span><span>票</span>
        </div>
        <br>
        <div class="star">
          <img  class="star1" alt="">
          <img  class="star1" alt="">
          <img  class="star1" alt="">
          <img  class="star2" alt="">
          <img  class="star3 "alt="">
          <span class="fen">3.6</span><span class="count">月销106单</span>
        </div>
        <span class="time">准时达</span>
        <span class="express">硅谷专送</span>
        <br>
        <span class="price">¥20起送/配送费约¥5</span>
      </div>
    </a>
    <a class="merchant">
      <img src="./shop/2.jpg" alt="shop">
      <div class="des">
        <div class="brand">品牌</div>
        <div class="name">锄禾日当午...</div>
        <div class="server">
          <span>保</span><span>准</span><span>票</span>
        </div>
        <br>
        <div class="star">
          <img class="star1" alt="">
          <img class="star1" alt="">
          <img class="star1" alt="">
          <img class="star1" alt="">
          <img class="star2" alt="">
          <span class="fen">4.1</span><span class="count">月销106单</span>
        </div>
        <span class="time">准时达</span>
        <span class="express">硅谷专送</span>
        <br>
        <span class="price">¥20起送/配送费约¥5</span>
      </div>
    </a>
    <a class="merchant">
      <img src="./shop/3.jpg" alt="shop">
      <div class="des">
        <div class="brand">品牌</div>
        <div class="name">锄禾日当午...</div>
        <div class="server">
          <span>保</span><span>准</span><span>票</span>
        </div>
        <br>
        <div class="star">
          <img class="star1"alt="">
          <img class="star1" alt="">
          <img class="star1" alt="">
          <img class="star1" alt="">
          <img class="star2" alt="">
          <span class="fen">4.1</span><span class="count">月销106单</span>
        </div>
        <span class="time">准时达</span>
        <span class="express">硅谷专送</span>
        <br>
        <span class="price">¥20起送/配送费约¥5</span>
      </div>
    </a>
    <a class="merchant">
      <img src="./shop/4.jpg" alt="shop">
      <div class="des">
        <div class="brand">品牌</div>
        <div class="name">锄禾日当午...</div>
        <div class="server">
          <span>保</span><span>准</span><span>票</span>
        </div>
        <br>
        <div class="star">
          <img class="star1" alt="">
          <img class="star1" alt="">
          <img class="star1" alt="">
          <img class="star3"  alt="">
          <img class="star3" alt="">
          <span class="fen">4.1</span><span class="count">月销106单</span>
        </div>
        <span class="time">准时达</span>
        <span class="express">硅谷专送</span>
        <br>
        <span class="price">¥20起送/配送费约¥5</span>
      </div>
    </a>
  </div>
</template>
<script>
    export default {}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .shop
    margin-top: 10px
    width 100%
    background white
    .title
      color #7e8c8d
      font-size 15px
      margin 5px 0
      padding-top 10px
    .merchant
      position relative
      overflow hidden
      padding 10px
      >img
        width 80px
        height 80px
        position absolute
        top 20px
        left 10px
      .des
        color black
        width 100%
        height 100px
        box-sizing border-box
        padding 0 20px 5px 110px
        overflow hidden
        .brand
          float left
          font-size 12px
          background  yellow
          font-weight 200
          margin 3px
        .name
          font-size 20px
          font-weight bolder
          float left
        .server
          margin 3px
          font-size 12px
          position relative
          overflow hidden
          >span
            float right
            border solid 1px #7e8c8d
            margin-left  4px
            color #7e8c8d
            font-weight 200
        .star
          float left
          font-size 10px
          >img
            width 10px
            height 10px
            &.star1
              bg-image("./stars/star24_on",10px,10px)
            &.star2
              bg-image("./stars/star24_half",10px,10px)
            &.star3
              bg-image("./stars/star24_off",10px,10px)
          .fen
            font-size 12px
            color  darkgoldenrod
          .count
            font-size 7px
        .price
          padding-top 90px
          font-size 12px
        .express
          background #02a774
          font-size 8px
          color white
          float right
          margin-right 5px
        .time
          color #02a774
          line-height 8px
          font-size 8px
          border solid 1px #02a774
          float right
</style>
