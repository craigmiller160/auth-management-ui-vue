<template>
  <Navbar />
  <Home />
  <Clients />
  <Users />
</template>

<script>
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Clients from '@/components/Clients';
import Users from '@/components/Users';

export default {
  components: {
    Users, Clients, Home, Navbar
  }
};
</script>

<style lang="scss">

</style>
