<template>
  <Header text="Users" />
  <div class="row">
    <div class="col">
      <table class="table">
        <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in state.data" :key="user.email">
          <td>{{ user.email }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { reactive, onMounted } from 'vue';
  import Header from '@/components/ui/Header';
  import { getUsers } from '@/service/UserService';
  import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';

  export default {
    name: 'Users',
    components: { Header },
    setup() {
      const store = useStore();
      const state = reactive({
        data: []
      });

      onMounted(async () => {
        try {
          const userData = await getUsers();
          state.data = userData.users;
        } catch (ex) {
          console.log(ex);
          store.commit(MUTATION_SHOW_ERROR_ALERT, `Error loading users: ${ex.message}`);
        }
      });

      return {
        state
      };
    }
  };
</script>

<style scoped>

</style>
