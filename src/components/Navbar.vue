<template>
  <nav>
    <div class="nav-wrapper orange">
      <a href="#" class="sidenav-trigger" @click="toggleDrawer">
        <i class="material-icons">menu</i>
      </a>
      <a href="#" class="brand-logo">OAuth2 Management {{ state.drawerOpen }}</a>
      <ul class="show-drawer right hide-on-med-and-down">
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav orange closed">
    <li><a href="#" class="white-text">Login</a></li>
  </ul>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      drawerOpen: false
    });

    const toggleDrawer = () => {
      console.log('Click'); // TODO delete this
      state.drawerOpen = !state.drawerOpen;
    };

    onMounted(() => {

    });

    return {
      state,
      toggleDrawer
    };
  }
};
</script>

<style scoped lang="scss">
.nav-wrapper {
  padding: 0 1rem;

  .side-nav {
    &.closed {
      width: 20rem;
    }
  }
}
</style>
