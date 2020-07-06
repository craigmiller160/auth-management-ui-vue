<template>
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
</template>

<script>
  import { reactive, onMounted } from 'vue';
  import Header from '@/components/ui/Header';
  import { getClients } from '@/service/BasicService';
  import { useStore } from 'vuex';
  import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';

  export default {
    name: 'Clients',
    components: { Header },
    setup() {
      const store = useStore();
      const state = reactive({
        data: []
      });

      onMounted(async () => {
        try {
          const clientData = await getClients();
          state.data = clientData.clients;
        } catch (ex) {
          console.log(ex);
          store.commit(MUTATION_SHOW_ERROR_ALERT, `Error loading clients: ${ex.message}`);
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
