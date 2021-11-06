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
    一覧ページ
  </p>
  <nuxt-link
    class="
      m-10
      p-2
      hover:opacity-50
      border-solid border-2 border-gray-200
    "
    to="/todo"
  >
      to todo
  </nuxt-link>
  <div
    class="
      m-5
    "
  >
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoItem from '~/components/TodoItem.vue'

export default Vue.extend({
  components: { TodoItem },
  computed: {
    getterTodos() {
      return this.$store.getters.getTodos;
    }
  }
})
</script>
