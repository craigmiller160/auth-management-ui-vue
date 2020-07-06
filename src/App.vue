<template>
  <Navbar />
  <div class="container">
    <Alert />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar';
  import Alert from '@/components/ui/Alert';
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { getAuthUser } from '@/service/BasicService';
  import { MUTATION_SET_USER_DATA } from '@/store/modules/auth/keys';
  import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';

  export default {
    name: 'App',
    components: { Alert, Navbar },
    setup() {
      const store = useStore();

      onMounted(async () => {
        try {
          const authUser = await getAuthUser();
          store.commit(MUTATION_SET_USER_DATA, authUser);
        } catch (ex) {
          if (ex.response?.status !== 401) {
            store.commit(MUTATION_SHOW_ERROR_ALERT, `Error getting Auth User: ${ex.message}`);
          }
        }
      });
    }
  };
</script>

<style lang="scss">

</style>
