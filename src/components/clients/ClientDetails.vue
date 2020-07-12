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
  <div class="form-section">
    <h3>Keys</h3>
    <hr />
    <div class="row">
      <div class="col-6">
        <div class="row">
          <TextField
            name="client-key"
            label="Client Key"
            v-model="state.client.clientKey"
            :disabled="true"
            class="grow"
          />
          <div class="key-actions">
            <button class="btn btn-warning" @click="generateClientKey">Generate</button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <!-- TODO do I really want this hidden? The user does need to see this at some point -->
        <div class="row">
          <TextField
            name="client-secret"
            label="Client Secret"
            type="password"
            v-model="state.client.clientSecret"
            :disabled="true"
            class="grow"
          />
          <div class="key-actions">
            <button class="btn btn-info">{{ secretBtnLabel }}</button>
            <button class="btn btn-warning" @click="generateClientSecret">Generate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-section">
    <h3>Grants</h3>
    <hr />
    <div class="row">
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
  </div>
  <div class="form-section">
    <h3>Timeouts</h3>
    <hr />
    <div class="row">
      <div class="col-4">
        <TextField
          name="access-token-timeout"
          label="Access Token Timeout (Secs)"
          type="text"
          v-model="state.client.accessTokenTimeoutSecs"
        />
      </div>
      <div class="col-4 offset-2">
        <TextField
          name="refresh-token-timeout"
          label="Refresh Token Timeout (Secs)"
          type="text"
          v-model="state.client.refreshTokenTimeoutSecs"
        />
      </div>
    </div>
  </div>
  <div class="form-section">
    <h3>Actions</h3>
    <hr />
    <div class="row">
      <div class="col-4 action-btn-container">
        <button class="btn btn-info">Cancel</button>
      </div>
      <div class="col-4 action-btn-container">
        <button class="btn btn-primary">Save</button>
      </div>
      <div class="col-4 action-btn-container">
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/ui/Header';
  import {
    onMounted, onUpdated, reactive, computed
  } from 'vue';
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
        client: {},
        showSecret: false
      });

      const secretBtnLabel = computed(() => (state.showSecret ? 'Hide' : 'Show'));

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
        generateClientSecret,
        secretBtnLabel
      };
    }
  };
</script>

<style scoped lang="scss">
  .gen-btn { // TODO delete this
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    button {
      margin-bottom: 1rem;
    }
  }

  .grow {
    width: 60%;
  }

  .key-actions {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    button {
      margin-bottom: 1rem;
    }
  }

  .form-section {
    margin-top: 2rem;

    h3 {
      text-align: center;
    }
  }

  .action-btn-container {
    display: flex;
    justify-content: center;
  }
</style>
