<template>
  <Navbar />
  <div class="container">
    <Alert />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';
  import Alert from '@/components/ui/Alert';

  export default {
    name: 'App',
    components: { Alert, Navbar }
  };
</script>

<style lang="scss">

</style>
