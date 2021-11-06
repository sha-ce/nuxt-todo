<template>
  <div 
    class="
      text-center
    "
  >
  <div
    class="
      mx-auto
      max-w-screen-lg
      border
      flex
      justify-between
    "
  >
  <div
    class="
      px-4
    "
  >
    {{ name }}
  </div>
  <button
      class="
        p-2
        border
        hover:opacity-50
        
      "
      @click="todoDelete()"
    >
      削除
    </button>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
      default: 'error'
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    todoDelete() {
      this.$store.dispatch('deleteTodo', this.index)
    }
  }
})
</script>
