<template>
  <h1>Auth Management UI</h1>
  <p><strong>Count:</strong> {{ state.count }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0
    });

    const increment = () => state.count++;
    const decrement = () => state.count--;

    return {
      state,
      increment,
      decrement
    };
  }
};
</script>

<style lang="scss">
  h1 {
    color: blue;
  }
</style>
