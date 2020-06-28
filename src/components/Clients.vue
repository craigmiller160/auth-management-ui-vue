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
              <td>{{ client.clientKey }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, onMounted } from 'vue';
  import Header from '@/components/ui/Header';
  import { getClients } from '@/service/BasicService';

  export default {
    name: 'Clients',
    components: { Header },
    setup() {
      const state = reactive({
        data: []
      });

      onMounted(async () => {
        const clientData = await getClients();
        state.data = clientData.clients;
      });

      return {
        state
      };
    }
  };
</script>

<style scoped>

</style>
