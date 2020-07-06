/* eslint-disable no-param-reassign */

const state = {
  details: {
    show: false,
    message: '',
    type: ''
  }
};

const mutations = {
  showErrorAlert(storeState, message) {
    storeState.details = {
      show: true,
      message,
      type: 'error'
    };
  },
  showSuccessAlert(storeState, message) {
    storeState.details = {
      show: true,
      message,
      type: 'success'
    };
  },
  hideAlert(storeState) {
    storeState.details = {
      show: false
    };
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
