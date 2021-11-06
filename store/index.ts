import { Store as VuexStore } from 'vuex'

/* Vuex: vue全体のデータストア */

/**
 * -state: データを持っておくオブジェクト(基本的に直接変更を加えない)
 * -mutations: stateに変更を加える関数群
 * -actions: mutationsを利用して色々処理をする関数群
 * -(getters): ゲッター
 */

export default () => (new VuexStore<{
  todos: string[]
}>({
  state: {
    todos: []
  },
  getters: {
    getTodos (state) :string[] {
      return state.todos
    }
  },
  mutations: {
    ADD_TODO(state, newTodo: string) {
      state.todos.push(newTodo)
    },
    DELETE_TODO(state, index: number) {
      state.todos = state.todos.filter(function (_, i) {
        return i !== index
      })
    }
  },
  actions: {
    addTodo(context, t) {
      // if(context.state.todos.filter((_t) => t === _t)) return
      context.commit('ADD_TODO', t)
    },
    deleteTodo(context, i) {
      context.commit('DELETE_TODO', i)
    }
  }
}))
