<template>
  <Header text="Client Details" />
  <div class="row">
    <div class="col-4 offset-4">
      <TextField
        name="client-name"
        label="Client Name"
        v-model="state.client.name"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <TextField
        name="client-key"
        label="Client Key"
        v-model="state.client.clientKey"
      />
    </div>
    <div class="col-2 gen-btn">
      <button class="btn btn-info">Generate</button>
    </div>
    <div class="col-4">
      <!-- TODO need placeholder value once I suppress the server-side value -->
      <TextField
        name="client-secret"
        label="Client Secret"
        type="password"
        v-model="state.client.clientSecret"
      />
    </div>
    <div class="col-2 gen-btn">
      <button class="btn btn-info">Generate</button>
    </div>
  </div>
  <div class="row checkboxes">
    <div class="col-3">
      <Checkbox
        name="enabled"
        label="Enabled"
        v-model="state.client.enabled"
      />
    </div>
    <div class="col-3">
      <Checkbox
        name="client-creds"
        label="Client Credentials Grant"
        v-model="state.client.allowClientCredentials"
      />
    </div>
    <div class="col-3">
      <Checkbox
        name="password"
        label="Password Grant"
        v-model="state.client.allowPassword"
      />
    </div>
    <div class="col-3">
      <Checkbox
        name="auth-code"
        label="Authorization Code Grant"
        v-model="state.client.allowAuthCode"
      />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/ui/Header';
  import { onMounted, reactive, onUpdated } from 'vue';
  import { useRouter } from 'vue-router';
  import { getClient } from '@/service/BasicService';
  import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';
  import { useStore } from 'vuex';
  import TextField from '@/components/ui/TextField';
  import Checkbox from '@/components/ui/Checkbox';

  export default {
    name: 'ClientDetails',
    components: { Checkbox, Header, TextField },
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

      onUpdated(() => {
        console.log(state.client); // TODO delete this
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

  .checkboxes {
    margin-top: 2rem;
  }
</style>
