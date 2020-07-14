import axios from 'axios';
import store from '@/store';
import { MUTATION_SHOW_ERROR_ALERT } from '@/store/modules/alert/keys';

const instance = axios.create({
  baseURL: '/api'
});

class MessageBuilder {
  constructor(message = '') {
    this.message = message;
  }

  append(part) {
    if (part) {
      return new MessageBuilder(`${this.message} ${part}`);
    }
    return new MessageBuilder(this.message);
  }
}

const handleError = (ex, errorMsg = '') => {
  const { status, data: { message } } = ex.response ?? {};
  const fullMessage = new MessageBuilder(errorMsg)
    .append(status ? `Status: ${status}` : '')
    .append(message ? `Message: ${message}` : '')
    .message;
  console.log(fullMessage, ex);
  store.commit(MUTATION_SHOW_ERROR_ALERT, fullMessage);
};

const get = async ({ uri, config = {}, errorMsg = '' }) => {
  try {
    const res = await instance.get(uri, config);
    return res.data;
  } catch (ex) {
    handleError(ex, errorMsg);
    return undefined;
  }
};

const post = () => {};
const put = () => {};

export default {
  get,
  post,
  put
};
