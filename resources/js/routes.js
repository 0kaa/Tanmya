import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/aboutus",
        name: "About",
        component: About
    },
    {
        path: "/contactus",
        name: "Contact",
        component: Contact
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    }
];

export default routes;
