import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state.js'
// import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        total: 0,
        arr: []
    },
    mutations: {
        addTotal (state) {
            state.total++
        },
        subTotal (state) {
            state.total--
        },
        addArr (state, id) {
            state.arr.push(id)
            console.log(state.arr)
        },
        subArr (state, id) {
            state.arr.remove(id)
            console.log(state.arr)
        }
    }
})