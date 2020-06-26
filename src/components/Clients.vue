<template>
  <div class="container">
    <Header text="Clients" />
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Key</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in state.data" :key="client.key">
              <td>{{ client.name }}</td>
              <td>{{ client.key }}</td>
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

const clients = [
  {
    name: 'Client 1',
    key: 'key1'
  },
  {
    name: 'Client 2',
    key: 'key2'
  }
];

export default {
  name: 'Clients',
  components: { Header },
  setup() {
    const state = reactive({
      data: clients
    });

    return {
      state
    };
  }
};
</script>

<style scoped>

</style>
