<template>
      <div id="app">
        <h1>Hello App!{{route.path}}</h1>
        <h4>当前路由对象{{route}}</h4>
        <button @click="goBack">路由历史回退</button>
        <p>
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/foo">Go to Foo.   </router-link>  
          <router-link to="/bar">Go to Bar.   </router-link>
        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import myrouter from './myrouter'

export default {
  name: 'App',
  router:myrouter.router,
  components: {
    // HelloWorld
  },
  computed: {
    route() {
      // 我们很快就会看到 `params` 是什么
      return this.$route   
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
