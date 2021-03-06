import * as types from './types';

export default {
  addUser({ commit }, payload) {
    commit(types.ADD_USER, payload);
  },
  toNextMonth({ commit }) {
    commit(types.TO_NEXT_MONTH);
  },
  toCurrentMonth({ commit }) {
    commit(types.TO_CURRENT_MONTH);
  },
  toPreviousMonth({ commit }) {
    commit(types.TO_PREVIUS_MONTH);
  },
  showFlashMessage({ commit }, payload) {
    commit(types.FLASH_MESSAGE_SHOW, payload);
  },
  hideFlashMessage({ commit }) {
    commit(types.FLASH_MESSAGE_HIDE);
  },
};
