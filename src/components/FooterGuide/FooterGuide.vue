<template>
  <footer class=" footer on">
    <a href="javascript:" class="guide-item on">
            <span class="item-icon">
                <i class="iconfont icon-waimai"></i>
            </span>
      <span>外卖</span>
    </a>
    <a href="javascript:" class="guide-item">
            <span class="item-icon">
                <i class="iconfont icon-search"></i>
            </span>
      <span>搜索</span>
    </a>
    <a href="javascript:" class="guide-item">
            <span class="item-icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
      <span>订单</span>
    </a>
    <a href="javascript:" class="guide-item">
            <span class="item-icon">
                <i class="iconfont icon-geren"></i>
            </span>
      <span>我的</span>
    </a>
  </footer>
</template>
<script>
export default {}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .footer
    top-border-1px(#e6e6e6)
    position fixed
    left 0
    bottom 0
    right 0
    width 100%
    height 50px
    background white
    text-align center
    display: none
    &.on
      display: flex
    .guide-item
      display flex
      flex 1
      flex-direction column  //侧轴居中
      align-items center
      flex-wrap wrap
      font-size 12px
      color: #999
      &.on
        color  #02a774
      .item-icon
        margin 5px 0
        display block
        .iconfont
          font-size: 22px
</style>
