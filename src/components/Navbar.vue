<template>
  <nav class="navbar navbar-expand navbar-dark">
    <a class="navbar-brand" href="#">OAuth Management</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="#" class="nav-link">Users</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Clients</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar'
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .navbar {
    background-color: $orange;

    &.navbar-expand {
      .navbar-toggler {
        margin-right: 1rem;
      }

      .nav-link {
        color: $white;
      }
    }
  }
</style>
