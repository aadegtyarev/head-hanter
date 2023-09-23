import axios from "axios";

export const authModule = {
  state: () => ({
    isAuth: false,
    isAdmin: false,
    isHR: false,
    isBoss: false,
  }),
  getters: {},
  mutations: {},
  actions: {},
  namespaced: true,
};
