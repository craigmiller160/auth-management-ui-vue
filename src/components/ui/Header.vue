<template>
  <div class="header">
    <h1 class="text-center">{{ props.text }}</h1>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text: String
  },
  setup(props) {
    return {
      props
    };
  }
};
</script>

<style scoped>
  .header {
    margin-top: 1rem;
  }
</style>
