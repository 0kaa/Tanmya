import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuToggle: false,
        menuDropdown: false
    },

    mutations: {
        sideMenuToggle(state, status) {
            state.menuToggle = status;
        },
        menuDropdownToggle(state, status) {
            state.menuDropdown = status;
        }
    },
    getters: {}
});
