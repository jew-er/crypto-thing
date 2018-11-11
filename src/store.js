import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const bonusData = require("./crypto-extrainfo.json");
const URL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

export default new Vuex.Store({
  state: {
    apidata: [],
    loading: true
  },
  mutations: {
    updateData(state, data) {
      state.apidata = data;
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    },
    addMoreData(state, bonusData) {
      state.apidata.forEach(item => {
        if (bonusData[item.id]) {
          item.description = bonusData[item.id].description;
          item.website = bonusData[item.id].website;
          item.website = bonusData[item.id].website;
          item.hasData = true;
          item.url = item.id;
        } else {
          item.hasData = "false";
          item.url = "undefined";
        }
      });
    }
  },
  actions: {
    loadData({ commit }) {
      axios.get(URL).then(response => {
        commit("updateData", response.data);
        commit("changeLoadingState", false);
        commit("addMoreData", bonusData);
      });
    }
  },
  getters: {
    returnData(state) {
      return state.apidata;
    }
  }
});
