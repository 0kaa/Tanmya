import "bootstrap";
import App from "./App.vue";
import routes from "./routes";
import VueRouter from "vue-router";
import JQuery from "jquery";
import store from "./store";
import "popper.js";
import "bootstrap";
window.$ = window.JQuery = JQuery;
window.Vue = require("vue");

const files = require.context("./", true, /\.vue$/i);
files.keys().map(key =>
    Vue.component(
        key
            .split("/")
            .pop()
            .split(".")[0],
        files(key).default
    )
);

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { x: 0, y: 0 };
    },
    routes
});

const app = new Vue({
    router, // replace routes with router
    store,
    render: h => h(App) //indicate the App component inside render function
}).$mount("#app");
