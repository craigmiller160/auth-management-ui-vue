/* eslint-disable no-param-reassign */

// TODO delete this
const sampleData = { // eslint-disable-line no-unused-vars
  firstName: 'Craig',
  lastName: 'Miller',
  username: 'craig@gmail.com'
};

const state = {
  userData: sampleData
};

const mutations = {
  setUserData(storeState, userData) {
    storeState.userData = userData;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
