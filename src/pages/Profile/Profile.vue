<template>
  <div class="content">
    <section class="">
      <HeaderTop title="我的"/>
      <div class="containerC">
        <div class="mess">
          <div class="item-icon">
            <i class="iconfont icon-ren"></i>
          </div>
          <div class="mess1">
                        <span class="item-icon right">
                        <i class="iconfont icon-jiantou1"></i>
                        </span>
            <span>登录/注册</span><br>
            <div class="item-icon">
              <i class="iconfont icon-shouji"></i>
              <span>暂无绑定手机号</span>
            </div>
          </div>
        </div>
        <div class="munber">
          <div>
            <div class="num"><span class="yue">0.00</span><span>元</span></div>
            <span class="text">我的余额</span>
          </div>
          <div>
            <div class="num"><span class="youhui">0</span><span>个</span></div>
            <span class="text">我的优惠</span>
          </div>
          <div>
            <div class="num"><span class="jifen">0</span><span>分</span></div>
            <span class="text">我的积分</span>
          </div>
        </div>
        <div class="items">
          <div class="item">
                            <span class="item-icon">
                                <i class="iconfont icon-dingdan"></i>
                             </span>
            <div class="box">
              <span>我的订单</span>
              <span class="item-icon">
                                <i class="iconfont icon-jiantou1"></i>
                        </span>
            </div>
          </div>
          <div class="item">
                            <span class="item-icon">
                                <i class="iconfont icon-jifen"></i>
                             </span>
            <div class="box">
              <span>积分商城</span>
              <span class="item-icon">
                                <i class="iconfont icon-jiantou1"></i>
                        </span>
            </div>
          </div>
          <div class="item">
                            <span class="item-icon">
                                <i class="iconfont icon-vip"></i>
                             </span>
            <div class="box">
              <span>尚硅谷外卖会员卡</span>
              <span class="item-icon">
                                <i class="iconfont icon-jiantou1"></i>
                        </span>
            </div>
          </div>
          <div class="item">
                            <span class="item-icon">
                                <i class="iconfont icon-fuwu"></i>
                             </span>
            <div class="box">
              <span>服务中心</span>
              <span class="item-icon">
                                <i class="iconfont icon-jiantou1"></i>
                            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

  export default {
    components:{
      HeaderTop
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
        .mess
          top-border-1px($bc)
          color white
          height 80px
          width 100%
          box-sizing border-box
          background #02a774
          padding 20px 10px
          position relative
          >div.item-icon
            position absolute
            left 20px
            top 20px
            border-radius 25px
            background #7e8c8d
            width 50px
            height 50px
            overflow hidden
            .iconfont
              font-size 50px
              line-height 50px
          .mess1
            width 100%
            padding-left 60px
            padding-right 20px
            >span
              font-size 18px
              float left
              margin-left 15px
            .item-icon
              font-size 15px
              margin-top 5px
              line-height 25px
              .iconfont
                font-size 25px
                margin-right -8px
                vertical-align middle
            .right
              position absolute
              right 20px
              top 50%
              transform translateY(-50%)
              >.iconfont
                font-size 15px
        .munber
          width 100%
          height 80px
          background white
          display flex
          justify-content space-around
          >div
            height 100%
            width 0
            flex 1
            right-border-1px(#e6e6e6)
            bottom-border-1px(#e6e6e6)
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            .num :nth-child(1)
              font-weight bolder
              font-size 25px
            .yue
              color orange
            .youhui
              color red
            .jifen
              color green
        .items
          margin-top 10px
          top-border-1px(#e6e6e6)
          .item
            height 50px
            background white
            vertical-align middle
            text-align center
            line-height 50px
            display flex
            justify-content space-around
            .box
              top-border-1px(#e6e6e6)
              padding-right 20px
              height 100%
              width 80%
              float right
              display flex
              justify-content space-between
            >span
              font-size 20px
              line-height 50px
            >span .iconfont
              font-size 20px
            >span .icon-jiantou1
              float right
              font-size 15px
            .icon-dingdan
              color green
            .icon-jifen
              color red
            .icon-vip
              color orange
            .icon-fuwu
              color green
</style>
