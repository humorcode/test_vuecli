import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.debug = true

import App from './App.vue'
new Vue({
    render: h => h(App)
}).$mount('#app')

// -----------------------------
import { render } from './ex_chat/ex_chat'
render()