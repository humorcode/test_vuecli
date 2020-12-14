const father = {
    namespaced: true,
    modules: {
        grandson: {
            namespaced: true,
            state: () => ({ age: 2, vuex_grandson_message: '孙子的信息' }),
            getters: {
                grandson_age(state) { return state.age }, // -> grandson/age
                vuex_grandson_message(state) { return state.vuex_grandson_message }, // -> grandson/age
            },
            mutations: {
                grandson_age_plus(state) { state.age++ },
                set_vuex_grandson_message(state, payload) { state.vuex_grandson_message = payload.msg }
            },
            actions: {
                grandfather_age_plus({ commit }) { // action/mutation
                    console.log("grandson=>grandfather_age_plus");
                    commit('grandfather_age_plus', null, { root: true }) // 访问全局
                },
                grandson_age_plus: {
                    root: true, //注册全局 action
                    handler(namespacedContext) { namespacedContext.commit('grandson_age_plus') }
                },
                set_vuex_grandson_message({ commit }, payload) {
                    commit('set_vuex_grandson_message', payload)
                }
            }
        }
    }
}
export default {
    name: 'father',
    father: father
}