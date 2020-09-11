import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.debug = true

import App from './App.vue'
new Vue({
    render: h => h(App)
}).$mount('#app')

// -----------------------------
import { ex_chat_render } from './ex_chat/ex_chat'
ex_chat_render();
// -----------------------------
import { ex_shopping_cart_render } from './ex_shopping_cart/ex_shopping_cart'
ex_shopping_cart_render();