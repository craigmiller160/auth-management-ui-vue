import store from '@/store';
import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';
import api from './api';

export const logout = () => api.get('/oauth/logout');

export const getAuthUser = async () => {
  try {
    const res = await api.get('/oauth/user');
    return res.data;
  } catch (ex) {
    console.log(ex);
    if (ex.response?.status !== 401) {
      store.commit(MUTATION_SHOW_ERROR_ALERT, `Error getting Auth User: ${ex.message}`);
    }
    return undefined;
  }
};
