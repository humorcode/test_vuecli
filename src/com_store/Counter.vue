<template>
      <div>
        <button @click="method_mutation_cpp(1)">method mutation count+1(同步)</button>
        <button @click="map_mutation_cpp({amount:5})">mapMutations count+5(同步)</button><br/>
        <button @click="method_action_cpp(5)">method action count+5(异步)</button>
        <button @click="async_map_action_cpp({amount:5})">mapActions async count+5(异步)</button>
        <button @click="await_map_action_0001({amount:5})">mapActions await_0001 count+5(异步,等待,Promise)</button>
        <button @click="await_map_action_0002({amount:100000})">mapActions await_0002 count+100000(异步,等待,async/await)</button>
            <p><b>mapState =></b>
                count={{count}}, count01={{count01}}, countAlias={{countAlias}}, 
                countPlusLocalstate={{countPlusLocalstate}}
            </p> 
            <p><b>mapGetters =></b>
                doneTodos={{doneTodos}}, doneTodosCount={{doneTodosCount}}, getTodoById={{getTodoById(2)}}
            </p>
      <hr/> 
          <button @click="grandson_age_plus">孙子+1</button>
          <button @click="grandfather_age_plus">爷爷+1</button>
            <p>
              <b>孙子 =></b> 年龄={{grandson_age}} <br/>
              <b>爷爷 =></b> 年龄={{grandfather_age}}
            </p>
      </div>
</template>

<script> 
import { mapState,mapGetters, mapMutations, mapActions } from 'vuex';
// const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')
export default {
  name: 'Counter',
  data:function(){return{localCount:44}},
  computed: {
      ...mapGetters(['doneTodos','doneTodosCount','getTodoById']),
      ...mapState(['count']),
      ...mapState({ 
        count01:state => state.count,
        countAlias: 'count',
        countPlusLocalstate(_state){ return _state.count+this.localCount },
        grandfather_age:'age'
      }),
      ...mapGetters('father/grandson',['grandson_age'])
  },
  methods:{
    method_mutation_cpp:function(i){ this.$store.commit({type:'increment',amount:i})},
    ...mapMutations({map_mutation_cpp:'increment'}),
    method_action_cpp:function(i){ this.$store.dispatch({type:'increment',amount:i})},
    ...mapActions({async_map_action_cpp:'incrementAsync',
        await_map_action_0001:'incrementAwait_0001',
        await_map_action_0002:'incrementAwait_0002'}),
    ...mapActions(['grandson_age_plus']),
    ...mapActions('father/grandson',['grandfather_age_plus']),
  }
}
</script> 
<style>
 div {text-align : left}
</style>