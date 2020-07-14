import axios from 'axios';
import store from '@/store';
import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';
import MessageBuilder from '@/util/MessageBuilder';

const instance = axios.create({
  baseURL: '/api'
});

const handleError = (ex, errorMsg = '', suppressError = () => false) => {
  if (!suppressError(ex)) {
    const { status, data: { message } } = ex.response ?? {};
    const fullMessage = new MessageBuilder(errorMsg)
      .append(status ? `Status: ${status}` : '')
      .append(message ? `Message: ${message}` : '')
      .message;
    console.log(fullMessage, ex);
    store.commit(MUTATION_SHOW_ERROR_ALERT, fullMessage);
  }
};

const get = async ({
  uri,
  config = {},
  errorMsg = '',
  suppressError = () => false
}) => {
  try {
    const res = await instance.get(uri, config);
    return res.data;
  } catch (ex) {
    handleError(ex, errorMsg, suppressError);
    return undefined;
  }
};

const post = async ({
  uri,
  body = {},
  config = {},
  errorMsg = '',
  suppressError = () => false
}) => {
  try {
    const res = await instance.post(uri, body, config);
    return res.data;
  } catch (ex) {
    handleError(ex, errorMsg, suppressError);
    return undefined;
  }
};

const put = async ({
  uri,
  body = {},
  config = {},
  errorMsg = '',
  suppressError = () => false
}) => {
  try {
    const res = await instance.put(uri, body, config);
    return res.data;
  } catch (ex) {
    handleError(ex, errorMsg, suppressError);
    return undefined;
  }
};

const doDelete = async ({
  uri,
  config = {},
  errorMsg = '',
  suppressError = () => false
}) => {
  try {
    const res = await instance.delete(uri, config);
    return res.data;
  } catch (ex) {
    handleError(ex, errorMsg, suppressError);
    return undefined;
  }
};

export default {
  get,
  post,
  put,
  delete: doDelete
};
