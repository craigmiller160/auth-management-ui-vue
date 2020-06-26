<template>
  <Navbar />
  <Home />
  <Clients />
</template>

<script>
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Clients from '@/components/Clients';

export default {
  components: { Clients, Home, Navbar }
};
</script>

<style lang="scss">

</style>
