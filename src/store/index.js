import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      count: 1,
      todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true },
        ]
    }
  },
  getters: {
    doneTodo: state => {
        return state.todos.filter(todo => todo.done)
    },
    countTodo: (state, getters)=> {
        return getters.doneTodo.length
    },
    findById: (state)=> (id)=>{
        return state.todos.find(todo=> todo.id==id )
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement(state){
        state.count--;
    },
    incrementBy(state, payload) {
        state.count += payload.amount;
    }
  },
  actions:{
      incrementAsync({ commit }) {
          setTimeout(() => {
            commit('increment')
          }, 2000);
      }
  }
})


// Install the store instance as a plugin
// store.commit('increment')

// console.log(store.state.count) // -> 1
console.log(store.getters.findById(1)) // -> 1

// store.commit('incrementBy', {amount: 23})
store.commit({
    type: 'incrementBy',
    amount: 20
})
console.log(store.state.count)

