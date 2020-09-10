const father = {
    namespaced: true,
    modules: {
        grandson: {
            namespaced: true,
            state: () => ({ age: 2 }),
            getters: {
                grandson_age(state) { return state.age }, // -> grandson/age
            },
            mutations: {
                grandson_age_plus(state) { state.age++ }
            },
            actions: {
                grandfather_age_plus({ commit }) { // action/mutation
                    commit('grandfather_age_plus', null, { root: true }) // 访问全局
                },
                grandson_age_plus: {
                    root: true, //注册全局 action
                    handler(namespacedContext) { namespacedContext.commit('grandson_age_plus') }
                }
            }
        }
    }
}
export default {
    name: 'father',
    father: father
}