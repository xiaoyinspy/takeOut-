<template>
  <!--登录与注册页面-->
  <div id="login-item" >
    <!--回退按钮-->
    <i class="iconfont icon-jiantou2" @click="$router.back()"></i>
    <div class="login-flex">
      <header class="loginHeader">硅谷外卖</header>
      <div class="loginTitle">
        <div class="title ">短信登录</div>
        <div class="title active">密码登录</div>
      </div>
      <div class="loginContent">
        <section class="loginMess1">
          <input type="text" placeholder="手机号">
          <a>获取验证码</a>
        </section>
        <section class="loginMess2">
          <input type="text" placeholder="验证码">
        </section>
        <section class="loginMess">
                            <span>温馨提示：未注册硅谷外卖帐号的手机号，
                                登录时将自动注册，且代表已同意
                            </span>
          <span class="item">《用户服务协议》</span>
        </section>
      </div>
      <div class="loginContent active">
        <section class="loginMess2">
          <input type="text" placeholder="手机/邮箱/用户名">
        </section>
        <section class="loginMess1">
          <input type="text" placeholder="密码">
          <div class="switch">
            <div class="circle"></div>
            <span>...</span>
          </div>
        </section>
      </div>
      <span  class="login" @click="login()">登录</span>
      <span>关于我们</span>
    </div>
  </div>
</template>
<script>
    export default {
        methods:{
          login(){
              this.$router.push("/profile")
          }
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  #login-item
    display block
    position relative
    height 100%
    background white
    .iconfont
      position absolute
      left 10px
      top 10px
      font-size 15px
    .login-flex
      background white
      height 50%
      padding-top 100px
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      .loginHeader
        color #02a774
        font-size 40px
        margin-bottom 30px
      .loginTitle
        width 50%
        display flex
        justify-content space-between
        .title
          width 35%
          font-weight 500
          height 20px
          &.active
            color #02a774
            border-bottom solid 2px #02a774
      .login
        width 80%
        height 35px
        color white
        font-weight 500
        font-size 16px
        text-align center
        line-height 35px
        background lightgreen
      .loginContent
        width 80%
        color #7e8c8d
        font-size 13px
        display none
        &.active
          display block
        .loginMess1
          background white
          border solid 1px #7e8c8d
          margin-bottom 10px
          height 35px
          border-radius 3px
          display flex
          align-items stretch
          justify-content space-around
          >a
            line-height 35px
          .switch
            margin auto 0
            width 50px
            height 22px
            border-radius 10px
            border solid 1px rgba(0,0,0, .4)
            vertical-align baseline
            .circle
              width 20px
              height 20px
              display inline-block
              border-radius 10px
              margin auto 0
              border solid 1px  rgba(0,0,0, .4)
              vertical-align middle
        .loginMess2
          background white
          border solid 1px #7e8c8d
          margin-bottom 10px
          height 35px
          border-radius 3px
          display flex
          align-items stretch
          padding-left 20px
        .loginMess
          line-height 20px
          .item
            color #02a774
            font-weight bold
</style>
