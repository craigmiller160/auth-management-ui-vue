<template>
  <div class="alert">
    <span></span>
  </div>
</template>

<script>
  import { useStore } from 'vuex';

  export default {
    name: 'Alert',
    setup() {
      const store = useStore();
    }
  };
</script>

<style scoped>

</style>
