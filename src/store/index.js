import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      count: 1,
      allProducts: []
    }
  },
  getters: {
    getAllProducts: state => {
      return state.allProducts
    },
    
  },
  mutations: {
    setProducts(state,payload){
      state.allProducts = payload
    }
    // increment (state) {
    //   state.count++
    // },
    // decrement(state){
    //     state.count--;
    // },
    // incrementBy(state, payload) {
    //     state.count += payload.amount;
    // }
  },
  actions:{
      // incrementAsync({ commit }) {
      //     setTimeout(() => {
      //       commit('increment')
      //     }, 2000);
      // }

      setProducts({commit}, payload){
        commit('setProducts', payload)
      }
  }
})


// Install the store instance as a plugin
// store.commit('increment')

// console.log(store.state.count) // -> 1
// console.log(store.getters.findById(1)) // -> 1

// // store.commit('incrementBy', {amount: 23})
// store.commit({
//     type: 'incrementBy',
//     amount: 20
// })
// console.log(store.state.count)

