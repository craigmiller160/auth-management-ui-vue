<template>
  <div class="container">
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
  </div>
</template>

<script>
  import { reactive } from 'vue';
  import Header from '@/components/ui/Header';

  const users = [
    {
      email: 'craig@gmail.com',
      firstName: 'Craig',
      lastName: 'Miller'
    },
    {
      email: 'bob@gmail.com',
      firstName: 'Bob',
      lastName: 'Saget'
    }
  ];

  export default {
    name: 'Users',
    components: { Header },
    setup() {
      const state = reactive({
        data: users
      });

      return {
        state
      };
    }
  };
</script>

<style scoped>

</style>
