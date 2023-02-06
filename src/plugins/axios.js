import axios from "axios";
import Vue from "vue";

const devInstance = createInstance(process.env.VUE_APP_API_URL);

function createInstance(baseURL) {
  return axios.create({
    baseURL,
  });
}

export default {
  install() {
    Vue.prototype.$axios = devInstance;
  },
};
