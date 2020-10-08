import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuToggle: false,
        menuDropdown: false,
        user: true
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
