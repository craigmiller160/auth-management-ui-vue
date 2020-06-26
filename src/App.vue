<template>
  <h1>Auth Management UI</h1>
  <p><strong>Count:</strong> {{ state.count }}</p>
  <button class="btn waves-effect waves-light" @click="increment">
    Increment
    <i class="material-icons right">send</i>
  </button>
  <button class="btn" @click="decrement">Decrement</button>
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
  body {
    padding: 2rem;
    h1 {
      color: blue;
    }
  }
</style>
