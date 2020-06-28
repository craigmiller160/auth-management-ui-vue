import { createStore } from 'vuex';

const store = createStore({
  strict: process.env.NODE_ENV === 'development'
});

export default store;
