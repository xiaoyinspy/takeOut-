<template>
  <header class="header">
    <slot name="search"></slot>
    <span class="ellipsis">{{title}}</span>
    <slot name="login"></slot>
  </header>
</template>
<script>
    export default {
        props: {
            title: String
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    left 0
    top 0
    z-index 10
    height 40px
    width 100%
    background #02a774
    color: #fff
    font-size 20px
    line-height 40px
    font-weight bolder
    display flex
    justify-content center
    text-align center
    vertical-align middlea
    >span
      width 60%
      display inline-block
      flex 3
      text-align center
    .item-icon
      float left
      margin-left: 10px
      margin-right: 10px
      flex 1
      color: #fff
    .login
      float right
      margin-left: 10px
      margin-right: 10px
      flex 2
      color: #fff
</style>
