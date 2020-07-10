import { createApp } from 'vue';
import { getAuthUser } from '@/service/AuthService';
import { MUTATION_SET_USER_DATA } from '@/store/modules/auth/keys';
import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';
import App from './App.vue';
import 'bootstrap/scss/bootstrap.scss';
import router from './router';
import store from './store';

const setup = async () => {
  try {
    const authUser = await getAuthUser();
    store.commit(MUTATION_SET_USER_DATA, authUser);
  } catch (ex) {
    if (ex.response?.status !== 401) {
      store.commit(MUTATION_SHOW_ERROR_ALERT, `Error getting Auth User: ${ex.message}`);
    }
  }

  createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
};

setup();
