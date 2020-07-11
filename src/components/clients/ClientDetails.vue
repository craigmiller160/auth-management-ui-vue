<template>
  <Header text="Client Details" />
  <div class="row">
    <div class="col">
      <TextField
        name="client-name"
        label="Client Name"
        v-model="state.client.name"
      ></TextField>
      <p>{{ state.client.name }}</p>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/ui/Header';
  import { onMounted, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { getClient } from '@/service/BasicService';
  import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';
  import { useStore } from 'vuex';
  import TextField from '@/components/ui/TextField';

  export default {
    name: 'ClientDetails',
    components: { Header, TextField },
    setup() {
      const router = useRouter();
      const store = useStore();
      const state = reactive({
        client: {}
      });

      onMounted(async () => {
        const { id } = router.currentRoute.value.params;
        try {
          state.client = await getClient(id);
        } catch (ex) {
          console.log(ex);
          store.commit(MUTATION_SHOW_ERROR_ALERT, `Error loading client details: ${ex.message}`);
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
