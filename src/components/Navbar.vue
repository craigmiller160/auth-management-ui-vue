<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>
  </nav>
  <h1>Hello World</h1>
</template>

<script>

export default {
  name: 'Navbar'
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";
  h1 {
    color: $blue;
  }
</style>
