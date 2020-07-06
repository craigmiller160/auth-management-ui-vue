/* eslint-disable import/prefer-default-export */
import api from './api';

export const logout = () => api.get('/authcode/logout');
