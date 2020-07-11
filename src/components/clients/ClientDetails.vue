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
        :disabled="true"
      />
    </div>
    <div class="col-2 gen-btn">
      <button class="btn btn-info" @click="generateClientKey">Generate</button>
    </div>
    <div class="col-4">
      <!-- TODO need placeholder value once I suppress the server-side value -->
      <!-- TODO do I really want this hidden? The user does need to see this at some point -->
      <TextField
        name="client-secret"
        label="Client Secret"
        type="password"
        v-model="state.client.clientSecret"
        :disabled="true"
      />
    </div>
    <div class="col-2 gen-btn">
      <button class="btn btn-info" @click="generateClientSecret">Generate</button>
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
  import { onMounted, onUpdated, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { generateGuid, getClient } from '@/service/ClientService';
  import TextField from '@/components/ui/TextField';
  import Checkbox from '@/components/ui/Checkbox';

  export default {
    name: 'ClientDetails',
    components: { Checkbox, Header, TextField },
    setup() {
      const router = useRouter();
      const state = reactive({
        client: {}
      });

      onMounted(async () => {
        const { id } = router.currentRoute.value.params;
        const data = await getClient(id);
        state.client = data ?? {};
      });

      onUpdated(() => {
        console.log(state.client); // TODO delete this
      });

      const generateClientKey = async () => {
        const guid = await generateGuid();
        if (guid) {
          state.client.clientKey = guid;
        }
      };

      const generateClientSecret = async () => {
        const guid = await generateGuid();
        if (guid) {
          state.client.clientSecret = guid;
        }
      };

      return {
        state,
        generateClientKey,
        generateClientSecret
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
