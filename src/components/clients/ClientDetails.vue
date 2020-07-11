<template>
  <Header text="Client Details" />
  <div class="row">
    <div class="col-4 offset-4">
      <TextField
        name="client-name"
        label="Client Name"
        :value="state.client.name"
        @input="value => state.client.name = value"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <TextField
        name="client-key"
        label="Client Key"
        :value="state.client.clientKey"
        @input="value => state.client.clientKey = value"
      />
    </div>
    <div class="col-2 gen-btn">
      <button class="btn btn-info">Generate</button>
    </div>
    <div class="col-4">
      <TextField
        name="client-secret"
        label="Client Secret"
        type="password"
        :value="state.client.clientSecret"
        @input="value => state.client.clientSecret = value"
      />
    </div>
    <div class="col-2 gen-btn">
      <button class="btn btn-info">Generate</button>
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

<style scoped lang="scss">
  .gen-btn {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    button {
      margin-bottom: 1rem;
    }
  }
</style>
