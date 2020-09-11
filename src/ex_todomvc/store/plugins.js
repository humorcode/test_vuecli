import { STORAGE_KEY } from './mutations'
import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
    store.subscribe((mutation, { todos }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    })
}

export default [createLogger(), localStoragePlugin]