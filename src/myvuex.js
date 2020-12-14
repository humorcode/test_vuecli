import Vue from 'vue'
import Vuex from 'vuex'
import storefather from './com_store/vuex.module'

Vue.use(Vuex)

const myPlugin = store => {
    console.log('当 store 初始化, 开启严格模式')
    let c = 0
    store.subscribe((mutation, state) => {
        console.log(++c, '每次 mutation 之后调用', mutation, state)
    })
}

const store = new Vuex.Store({
    strict: true,
    state: {
        count: 100,
        todos: [{ id: 1, text: '.1..', done: true }, { id: 2, text: '.2..', done: false }],
        age: 88
    },
    getters: {
        doneTodos: state => { return state.todos.filter(todo => todo.done) },
        doneTodosCount: (state, getters) => { return getters.doneTodos.length },
        getTodoById: (state) => (id) => { return state.todos.find(todo => todo.id === id) }
    },
    mutations: {
        increment(state, payload) { console.log("mutations=increment"); state.count += payload.amount },
        grandfather_age_plus(state) { state.age++ }
    },
    actions: {
        increment({ commit }, payload) { console.log("actions=increment"); commit('increment', payload); return '00.result' },
        incrementAsync({ commit }, payload) { setTimeout(() => { commit('increment', payload) }, 1000); },
        increment_01({ commit }, payload) {
            return new Promise((resolve) => {
                console.log('01.boot,timeout=1s,-----------------------');
                setTimeout(() => {
                    console.log('01.run');
                    commit('increment', payload);
                    console.log('01.done');
                    resolve('01.result');
                }, 1000);
            })
        },
        increment_02({ commit }, payload) {
            return new Promise((resolve) => {
                console.log('02.boot,timeout=1s,-----------------------');
                setTimeout(() => {
                    console.log('02.run');
                    commit('increment', payload);
                    console.log('02.done');
                    resolve('02.result');
                }, 1000);
            })
        },
        incrementAwait_0001({ dispatch }, payload) {
            return new Promise((resolve) => {
                dispatch('increment_01', payload).then(r => {
                    console.log('result=' + r);
                    dispatch('increment_02', payload).then(r => {
                        console.log('result=' + r);
                        resolve('incrementAwait_0001.done');
                    })
                })
            }).then(r => console.log(r))
        },
        async incrementAwait_0002({ dispatch }, payload) {
            let r = await dispatch('increment', payload);
            console.log('result=' + r);
            r = await dispatch('increment_01', payload);
            console.log('result=' + r);
            r = await dispatch('increment_02', payload);
            console.log('result=' + r);
            console.log('incrementAwait_0002.done');
        }
    },
    modules: {
        father: storefather.father
    },
    plugins: [myPlugin]
})


export default {
    name: 'myvuex',
    store
}