<template>
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    console.log('组件创建|created')
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData01()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData01'
  },
  methods: {
    fetchData01 () {
      console.log('(路由有变化,重新触发该方法)获取数据01|fetchData01')
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      new Promise( function (resolve, reject) {
                    // 一段耗时的异步操作
                    // reject('失败了')
                    setTimeout(function(){
                          console.log(reject)
                           resolve('成功') 
                    },3000)
                // 数据处理完成
            } ).then(
                (res) => {
                    this.loading = false
                    console.log(res)
                    this.post = {title:'title123',body:'body123,导航完成后获取数据'}
                },  // 成功
                (err) => {
                    this.loading = false
                    console.log(err)
                    this.error = err.toString()
                } // 失败
        ) 
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('|beforeRouteEnter')
      next() 
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    console.log('|beforeRouteUpdate')
      next() 
  }
}
</script>