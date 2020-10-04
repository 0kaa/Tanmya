import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuToggle: false
    },

    mutations: {
        sideMenuToggle(state, status) {
            state.menuToggle = status;
        }
    },
    getters: {}
});
