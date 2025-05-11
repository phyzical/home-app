import generateStore from './store'
import config from './config'

export function currentYear () {
    return new Date().getFullYear()
}

let store

export function getStore () {
    if (!store) {
        store = generateStore()
    }
    return store
}

export function getConfig () {
    return config
}

export function getRouter (context) {
    return context.$router
}
