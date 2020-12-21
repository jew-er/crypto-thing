import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const bonusData = require("./crypto-extrainfo.json");
const URL = "https://yd5yvizovl.execute-api.us-east-1.amazonaws.com/prod/";

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
          item.description = bonusData[item.slug].description;
          item.website = bonusData[item.slug].website;
          item.website = bonusData[item.slug].website;
          item.hasData = true;
          item.url = item.slug;
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
        const data = JSON.parse(response.data.body).data.filter(
          x => bonusData[x.slug] !== undefined
        );
        commit("updateData", data);
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
