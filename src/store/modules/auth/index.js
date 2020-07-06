/* eslint-disable no-param-reassign */

const state = {
  userData: null
};

const mutations = {
  setUserData(storeState, userData) {
    storeState.userData = userData;
  }
};

const getters = {
  isAuthorized(storeState) {
    return !!storeState.userData;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
