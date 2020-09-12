import { STORAGE_KEY } from './mutations'
import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
    store.subscribe((mutation, { todos }) => {
        let _todos = JSON.stringify(todos);
        console.log('设置localStorage:', _todos)
        window.localStorage.setItem(STORAGE_KEY, _todos)
    })
}

export default [createLogger(), localStoragePlugin]