import { createApp } from 'vue';
import { getAuthUser } from '@/service/AuthService';
import { MUTATION_SET_USER_DATA } from '@/store/modules/auth/keys';
import App from './App.vue';
import 'bootstrap/scss/bootstrap.scss';
import router from './router';
import store from './store';

console.log(require('vue')); // TODO delete this

const setup = async () => {
  const authUser = await getAuthUser();
  store.commit(MUTATION_SET_USER_DATA, authUser);

  createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
};

setup();
