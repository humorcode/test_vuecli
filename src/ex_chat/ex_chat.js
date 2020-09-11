import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { getAllMessages } from './store/actions'

Vue.filter('timefilter', timestamp => {
    return new Date(timestamp).toLocaleTimeString()
})

export function ex_chat_render() {
    new Vue({
        el: '#ex_chat',
        store,
        render: h => h(App)
    })
    getAllMessages(store)
}