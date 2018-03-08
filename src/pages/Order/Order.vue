<template>
  <div class="content">
    <section >
     <HeaderTop title="订单列表"/>
      <div class="containerC">
        <div class="flex">
          <div class="container">
            <img src="./person.png" alt="">
            <span>登陆后查看外卖订单</span>
            <button @click="login()">立即登录</button>

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
   },
   methods:{
       login(){
           this.$router.push("/login")
       }
   }
 }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content
    position relative
    height 100%
    >section
      width 100%
      display block
      .containerC
        padding-top 40px
        overflow hidden
        .flex
          height 100%
          display flex
          flex-direction column
          flex-wrap wrap
          justify-content space-around
          align-items center
          .container
            width 70%
            height 70%
            display flex
            flex-direction column
            flex-wrap wrap
            justify-content  space-between
            align-items center
            >img
              width 100%
            >span
              font-size 23px
            >button
              border-style: none
              list-style-type none
              background #02a774
              height 40px
              width 50%
              display block
              border-radius 2px
              color white
              font-size 15px
              line-height 15px
              margin-top 20px
</style>
