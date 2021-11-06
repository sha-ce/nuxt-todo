<template>
  <div
    class="
      text-center
    "
  >
    <p
      class="
        text-5xl
        p-2
        m-8
        font-bold
      "
    >
      todo
    </p>
    <nuxt-link
      class="
        m-10
        p-2
        hover:opacity-50
        border-solid border-2 border-gray-200
      "
      to="/"
    >
      to index
    </nuxt-link>
    <!-- 入力フォーム -->
    <form
      class="
      "
      method="post"
      novalidate="true"
      @submit.prevent
    >
      <input
        v-model="todo"
        type="text"
        class="
          border
          p-2
          m-5
        "
      />
      <button
        class="
          border
          p-2
          hover:opacity-50
        "
        @click="add"
      >
        追加
      </button>
    </form>
    <todo-item
      v-for="(item, i) in getterTodos"
      :key="item"
      :name="item"
      :index="i"
      class="
        m-2
        justify-center
      "
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoItem from '~/components/TodoItem.vue'

export default Vue.extend({
  components: { TodoItem },
  data(): {
    todo: string
  } {
    return {
      todo: ''
    }
  },
  computed: {
    getterTodos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    // 追加ボタン
    add() {
      if(this.todo === '') return;
      // this.todos.push(this.todo);
      this.$store.dispatch('addTodo', this.todo);
      this.todo = '';
    }
  }
})
</script>
