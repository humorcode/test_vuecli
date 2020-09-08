<template>
      <div><button @click="cpp">c++</button>
      我是Counter|count01={{count01}}|countPlusLocalState={{countPlusLocalState}}|
      countAlias:{{countAlias}}|localComputed={{localComputed}}
      <br/> doneTodos={{doneTodos}} || doneTodosCount={{doneTodosCount}} 
      || getTodoById={{getTodoById(2)}}
      </div>
</template>

<script> 
import { mapState,mapGetters } from 'vuex';
export default {
  name: 'Counter',
  data:function(){return{localCount:44,getTodoById01:'null'}},
  computed: {
      localComputed(){
        return this.localCount
      },
      ...mapState({ 
        count01:state => state.count,
        countAlias: 'count',
        countPlusLocalState(statearg){
          return statearg.count+this.localCount
        }
      }),
      ...mapGetters(['doneTodos','doneTodosCount','getTodoById'])
  },
  methods:{
    cpp:function(){
      this.$store.commit("increment")
    }
  }
}
</script> 