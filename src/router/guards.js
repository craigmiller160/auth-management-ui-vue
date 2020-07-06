/* eslint-disable import/prefer-default-export */
import store from '@/store';
import { GETTER_IS_AUTHORIZED } from '@/store/modules/auth/keys';

export const isAuthorizedGuard = (to, from, next) => {
  if (store.getters[GETTER_IS_AUTHORIZED]) {
    next();
  } else {
    next({ name: 'Home' });
  }
};
