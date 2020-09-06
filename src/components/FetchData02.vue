<template>
  <div class="post"> 
     error={{ error }}
      |||||post=
      <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p> 
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  created () {
    console.log('组件创建|created') 
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    // '$route': 'xx_function_name'
  },
  methods: {
    setData (err, post) {
      console.log('获取数据02|setData')
      this.error = err
      this.post = post 
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('组件路由进入前|beforeRouteEnter')
    new Promise( function (resolve, reject) {
                    // 一段耗时的异步操作 
                    setTimeout(function(){ console.log(resolve)
                           reject('获取异常0201..')  },3000) 
            } ).then(
                (res) => {  console.log(res)  },  // 成功
                (err) => { next(vm => vm.setData(err,null))  } // 失败
            ) 
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    console.log('组件路由更新前|beforeRouteUpdate')
    new Promise( function (resolve, reject) {
                    // 一段耗时的异步操作 
                    setTimeout(function(){ console.log(resolve)
                           reject('获取异常0202@'+new Date().toLocaleTimeString())  },3000) 
            } ).then(
                (res) => {  console.log(res)  },  // 成功
                (err) => { this.setData(err,null); next()  } // 失败
            ) 
  }
}
</script>