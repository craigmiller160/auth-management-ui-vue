import { createStore } from 'vuex';
import auth from './modules/auth';

const store = createStore({
  strict: process.env.NODE_ENV === 'development',
  modules: {
    auth
  }
});

export default store;
