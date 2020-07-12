<template>
  <Navbar />
  <div class="container">
    <Alert />
    <router-view></router-view>
    <Modal />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';
  import Alert from '@/components/ui/Alert';
  import Modal from '@/components/ui/modal/Modal';

  export default {
    name: 'App',
    components: { Modal, Alert, Navbar }
  };
</script>

<style lang="scss">

</style>
