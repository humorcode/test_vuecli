<template>
      <div>
        <div>我是{{this.$route.params}}</div>
        <router-view></router-view>
      </div>
</template>

<script> 
export default {
  name: 'User' , 
  beforeRouteEnter (to, from, next) {
    console.log('组件内 导航守卫 | beforeRouteEnter')
      next() 
  },
    beforeRouteUpdate (to, from,next) {//组件内 导航守卫
      // 对路由变化作出响应...
      console.log('组件内 导航守卫 | beforeRouteUpdate')
      // console.log(from)
      // console.log(to)
      // console.log(next) 
      next()
    } 
}
</script> 