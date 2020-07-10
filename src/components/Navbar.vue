<template>
  <nav class="navbar navbar-expand navbar-dark">
    <router-link to="/" class="navbar-brand">OAuth2 Management</router-link>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <template v-if="isAuthorized">
          <li class="nav-item">
            <!-- TODO need to find a way to make these show active -->
            <router-link to="/users" class="nav-link">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/clients" class="nav-link">Clients</router-link>
          </li>
        </template>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item" v-if="!isAuthorized">
          <a href="/api/oauth/authcode/login" class="nav-link">Login</a>
        </li>
        <li class="nav-item dropdown" v-if="isAuthorized">
          <a @click="toggleDropdown" class="nav-link dropdown-toggle">
            {{ userData.firstName }} {{ userData.lastName }}
          </a>
          <div :class="dropdownClasses">
            <a class="dropdown-item" @click="doLogout">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import { GETTER_IS_AUTHORIZED, MUTATION_SET_USER_DATA } from '@/store/modules/auth/keys';
  import { logout } from '@/service/AuthService';
  import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';
  import { useRouter } from 'vue-router';

  export default {
    name: 'Navbar',
    setup() {
      const router = useRouter();
      const store = useStore();
      const showDropdown = ref(false);

      const dropdownClasses = computed(() => {
        const show = showDropdown.value ? 'show' : '';
        return `dropdown-menu ${show}`;
      });

      const userData = computed(() => store.state.auth.userData);
      const isAuthorized = computed(() => store.getters[GETTER_IS_AUTHORIZED]);

      const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;
      };

      const doLogout = async () => {
        try {
          await logout();
          store.commit(MUTATION_SET_USER_DATA, null);
          router.push('/');
        } catch (ex) {
          console.log(ex);
          store.commit(MUTATION_SHOW_ERROR_ALERT, `Error logging out: ${ex.message}`);
        }
      };

      return {
        userData,
        isAuthorized,
        showDropdown,
        toggleDropdown,
        dropdownClasses,
        doLogout
      };
    }
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

        &.dropdown-toggle {
          cursor: pointer;
        }
      }
    }

    .dropdown-menu {
      .dropdown-item {
        cursor: pointer;
      }
    }
  }
</style>
