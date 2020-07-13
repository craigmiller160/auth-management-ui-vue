<template>
  <Header text="Clients" />
  <div class="row">
    <div class="col">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>Name</th>
          <th>Key</th>
        </tr>
        </thead>
        <tbody>
          <tr
            v-for="client in state.data"
            :key="client.key"
            @click="clientClick(client.id)"
          >
            <td>{{ client.name }}</td>
            <td>{{ client.clientKey }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <router-link to="/clients/new" class="btn btn-primary">New Client</router-link>
    </div>
  </div>
</template>

<script>
  import { onMounted, reactive } from 'vue';
  import Header from '@/components/ui/Header';
  import { getClients } from '@/service/ClientService';
  import { useRouter } from 'vue-router';

  export default {
    name: 'Clients',
    components: { Header },
    setup() {
      const router = useRouter();
      const state = reactive({
        data: []
      });

      onMounted(async () => {
        const clientData = await getClients();
        state.data = clientData?.clients ?? [];
      });

      const clientClick = (id) => router.push(`/clients/${id}`);

      return {
        state,
        clientClick
      };
    }
  };
</script>

<style scoped lang="scss">
  tr {
    cursor: pointer;
  }
</style>
