<template>
  <Header text="Users" />
  <div class="row">
    <div class="col">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="user in state.data"
          :key="user.email"
          @click="userClick(user.id)"
        >
          <td>{{ user.email }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <!-- TODO need client name and client filter for this page -->
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <router-link to="/users/new" class="btn btn-primary">New User</router-link>
    </div>
  </div>
</template>

<script>
  import { onMounted, reactive } from 'vue';
  import Header from '@/components/ui/Header';
  import { getUsers } from '@/service/UserService';
  import { useRouter } from 'vue-router';

  export default {
    name: 'Users',
    components: { Header },
    setup() {
      const router = useRouter();
      const state = reactive({
        data: []
      });

      onMounted(async () => {
        const userData = await getUsers();
        state.data = userData?.users ?? {};
      });

      const userClick = (id) => router.push(`/users/${id}`);

      return {
        state,
        userClick
      };
    }
  };
</script>

<style scoped>
  tr {
    cursor: pointer;
  }
</style>
