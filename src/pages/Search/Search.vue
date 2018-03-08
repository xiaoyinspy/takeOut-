<template>
  <div class="content">
    <section class="search">
      <HeaderTop title="搜索"/>
      <div class="containerC">
        <div class="searchInput">
          <input type="text" placeholder="请输入商家或美食名称">
          <button class="button">提交</button>
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
        .searchInput
          margin-top
          height 60px
          background white
          padding 10px
          >input
            width 80%
            height 40px
            padding 0px
            background #f5f5f5
            font-weight 200
          .button
            border-style: none
            list-style-type none
            background #02a774
            font-weight bolder
            height 40px
            width 15%
            color white
            font-size 20px
            line-height 20px
</style>
