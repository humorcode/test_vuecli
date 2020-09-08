<template>
      <div id="app"> 
        <h4>路径={{myroute?myroute.path:'null'}};<br/>当前路由对象={{myroute}}</h4>
        <button @click="goBack">路由历史回退</button>
        <p>
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            声明式
          <router-link to="/HelloWorld">HelloWorld.   </router-link>
          <router-link to="/Foo?a=a">Foo.   </router-link>  
          <router-link to="/Bar">Bar.   </router-link>
          <router-link to="/User/uid123/name/uname123/child">User123+Child   </router-link>
          <router-link to="/User/uid456/name/uname456">User456.   </router-link>
        </p>
        <p>编程式 
          <button @click="to_route('HOME')">HOME</button>
          <button @click="to_route('Foo')">Foo</button>
          <button @click="to_route('User','123')">User123</button>
          <button @click="to_route('User','456')">User456</button>
          <input type="checkbox" id="User+Child" v-model="mychecked" />
           <label for="User+Child" >User+Child</label>
          </p>
          <p>组件传参 
              <router-link to="/ZJ_Param1/uname789">组件传参(布尔模式)</router-link>
              <router-link to="/ZJ_Param2/uname789">组件传参(对象模式)</router-link>
              <router-link to="/ZJ_Param3?uname=u147">组件传参(函数模式)</router-link><br/>
              <button @click="to_route('FetchData01')">获取数据(路由后,组件创建后)</button>
              <button @click="to_route('FetchData02')">获取数据(路由前)</button>
          </p>
        <hr/><p>
              <button @click="to_route('storecount01')">Vuex(Counter01)</button>
        </p>
        <hr/>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
       <transition name="slide-fade" mode="out-in">  <router-view></router-view></transition>
        <hr/>
        <transition-group name="component-fade" mode="out-in">
        <router-view name="a" key="a">a</router-view>
        <router-view name="b" key="b">b</router-view>
        <router-view name="c" key="c">c</router-view>
        </transition-group>
        <hr/>
      </div>
</template>

<script>
import myrouter from './myrouter'
import myvuex from './myvuex'

export default {
  name: 'App', 
  data: function(){return {myroute:null,mychecked:false}},
  router:myrouter.router,
  store:myvuex.store,
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    to_route(rname,arg1){   
      console.log(rname)
      if(this.mychecked){
        rname=rname+'Children'
      }
      var result = this.$router.push({ name: rname, params: { uid: arg1,uname:arg1+'name' },query: { utime: (new Date()).getTime() }})
      result.then((r)=>{
        console.log(r.matched)
        if(r.matched.length<=0)
          this.$router.push('404')
      }) 
        console.log(result)
    }
  },
  watch: {
    $route() { 
      this.myroute={path:this.$route.path,params:this.$route.params,query:this.$route.query}
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
  margin-top: 0px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .9s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
