import Vue from 'vue'
import store from './store'
import App from './components/App.vue'

export function ex_todomvc_render() {
    new Vue({
        store, // inject store to all children
        el: '#ex_todomvc',
        render: h => h(App)
    })
}