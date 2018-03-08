<template>
  <div id="app">
    <router-link to="/msite"></router-link>
    <router-link to="/search"></router-link>
    <router-link to="/order"></router-link>
    <router-link to="/profile"></router-link>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>

  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
  export default {
    components: {
        FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #app
    height 100%

</style>
