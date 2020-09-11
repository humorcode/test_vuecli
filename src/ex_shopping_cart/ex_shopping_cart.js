import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './currency'

Vue.filter('filtercurrency', currency)

export function ex_shopping_cart_render() {
    new Vue({
        el: '#ex_shopping_cart',
        store,
        render: h => h(App)
    })
}