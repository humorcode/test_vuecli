// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 1. 定义 (路由) 组件。 也可以从其他文件 import 进来
//  vue有两种形式的代码 compiler（模板）模式
//   runtime模式（运行时,该模式不能动态编译template,.vue文件可以预编译为函数渲染）
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
 import C404 from './components/404.vue'
 import Foo from './components/Foo.vue'
 import Bar from './components/Bar.vue'
 import HelloWorld from './components/HelloWorld.vue'
 import User from './components/User.vue'
 import UserChildren from './components/UserChildren.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { name:'HOME', path: '/', components: {
      a:Foo,
      b:Bar,
      c:User,
      }},
  { name:'Foo', path: '/Foo', component: Foo },
  { name:'Bar', path: '/Bar', component: Bar },
  { name:'HelloWorld', path: '/HelloWorld', component: HelloWorld },
  { name:'User', path: '/User/:uid/name/:uname', component: User , 
    children:[{name:'UserChildren', path:'child',component:UserChildren}]},
  { name:'*', path:'*',component:C404}
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

// new Vue({
//   router
// }).$mount('#app')



export default {
    name: 'myrouter',router
  }