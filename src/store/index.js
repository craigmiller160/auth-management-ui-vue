import { createStore } from 'vuex';
import auth from './modules/auth';
import alert from './modules/alert';

const store = createStore({
  strict: process.env.NODE_ENV === 'development',
  modules: {
    auth,
    alert
  }
});

export default store;
