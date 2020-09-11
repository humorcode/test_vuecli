import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = true

export default new Vuex.Store({
    modules: {
        cart,
        products
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})