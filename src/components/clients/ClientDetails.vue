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
        <div class="row">
          <TextField
            name="client-secret"
            label="Client Secret"
            type="text"
            v-model="state.client.clientSecret"
            :disabled="true"
            class="grow"
          />
          <div class="key-actions">
            <!-- TODO include a warning before saving to store the secret in a safe place -->
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
          type="number"
          v-model="state.client.accessTokenTimeoutSecs"
        />
      </div>
      <div class="col-4 offset-2">
        <TextField
          name="refresh-token-timeout"
          label="Refresh Token Timeout (Secs)"
          type="number"
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
        <button class="btn btn-info" @click="cancelCheck">Cancel</button>
      </div>
      <div class="col-4 action-btn-container">
        <button class="btn btn-primary" :disabled="!hasChanges" @click="doSave">Save</button>
      </div>
      <div class="col-4 action-btn-container">
        <!-- TODO include warning before delete... also implement functionality -->
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
  <ConfirmModal
    :title="state.modal.title"
    :message="state.modal.message"
    :show="state.modal.show"
    @modal-action="handleModalAction"
  />
</template>

<script>
  import Header from '@/components/ui/Header';
  import {
    onMounted, reactive, computed
  } from 'vue';
  import { isEqual } from 'lodash-es';
  import { useRouter } from 'vue-router';
  import { generateGuid, getClient, updateClient } from '@/service/ClientService';
  import TextField from '@/components/ui/form/TextField';
  import Checkbox from '@/components/ui/form/Checkbox';
  import ConfirmModal from '@/components/ui/modal/ConfirmModal';
  import { MODAL_YES } from '@/components/ui/modal/modalConstants';
  import { MUTATION_SHOW_SUCCESS_ALERT } from '@/store/modules/alert/keys';
  import { useStore } from 'vuex';

  export default {
    name: 'ClientDetails',
    components: {
      ConfirmModal,
      Checkbox,
      Header,
      TextField
    },
    setup() {
      const router = useRouter();
      const store = useStore();
      const state = reactive({
        client: {},
        oldClient: {},
        modal: {
          show: false,
          title: '',
          message: '',
          successCallback: null
        }
      });
      const hasChanges = computed(() => !isEqual(state.oldClient, state.client));

      onMounted(async () => {
        const { id } = router.currentRoute.value.params;
        if (id !== 'new') {
          const client = (await getClient(id)) ?? {};
          state.client = { ...client };
          state.oldClient = client;
        } else {
          const [key, secret] = await Promise.all([generateGuid(), generateGuid()]);
          state.client = {
            clientKey: key,
            clientSecret: secret
          };
        }
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

      const handleModalAction = (event) => {
        state.modal.show = false;
        if (MODAL_YES === event && state.modal.successCallback) {
          state.modal.successCallback();
        }
      };

      const doCancel = () => router.push('/clients');

      const cancelCheck = () => {
        if (hasChanges.value) {
          state.modal = {
            show: true,
            title: 'Unsaved Changes',
            message: 'If you cancel, all unsaved changes will be lost. Are you sure?',
            successCallback: doCancel
          };
        } else {
          doCancel();
        }
      };

      const doSave = async () => {
        const { id } = router.currentRoute.value.params;
        await updateClient(id, state.client);
        router.push('/clients');
        store.dispatch(MUTATION_SHOW_SUCCESS_ALERT, `Successfully updated client ${id}`);
      };

      return {
        state,
        generateClientKey,
        generateClientSecret,
        hasChanges,
        cancelCheck,
        doSave,
        handleModalAction
      };
    }
  };
</script>

<style scoped lang="scss">
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
