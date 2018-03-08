小银的Vue外卖项目
> A Vue.js project
出现的问题：
  1.对于JS部分的引入位置 swiper.js
  swiper支持ES6，模块化引入 npm install swiper --save
  import Swiper from 'swiper'
  注：想要使用轮播效果，需要同时引入swiper的样式
   
  2.stylus 样式的注意点   是否需要摘清楚
  3. postman的使用  server向服务器发送请求
  4.浏览器警告：
  :8080/#/profile:1 Blink deferred a task in order to make scrolling smoother. Your timer and network tasks should take less than 50ms to run to avoid this. Please see https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/rail and https://crbug.com/574343#c40 for more information.
  5.组件模板到底是如何添加到页面的？？
  <template>
    <div id="app">
      <router-link></router-link>
      <!--显示当前路由组件-->
      <router-view></router-view>
      <FooterGuide></FooterGuide>
    </div>
  </template>
  6.初始包含块的概念
  7.组件引入模块： 就近引入
  8.2x &&  3x 图的使用
  9.使用<router-link></router-link>时必须添加to属性
    操作路由的两种方式：
        1.编程式路由导航
        2.使用<router-link></router-link>进行路由切换 设置to属性为切换路由即可。
