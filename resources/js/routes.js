// Pages
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

// Login
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";

// Account
import Notification from "./views/Notification.vue";
import MyAccount from "./views/MyAccount.vue";
import EditAccount from "./views/EditAccount.vue";
import ChangePassword from "./views/ChangePassword.vue";
import Subscriptions from "./views/Subscriptions.vue";

// Single Event
import SingleEvent from "./views/SingleEvent.vue";

const routes = [
    // Pages

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

    // Login

    {
        path: "/signin",
        name: "SignIn",
        component: SignIn
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    },

    // Account

    {
        path: "/notification",
        name: "Notification",
        component: Notification
    },
    {
        path: "/my-account",
        name: "MyAccount",
        component: MyAccount
    },
    {
        path: "/my-account/edit",
        name: "EditAccount",
        component: EditAccount
    },
    {
        path: "/my-account/change-password",
        name: "ChangePassword",
        component: ChangePassword
    },
    {
        path: "/my-account/subscriptions",
        name: "Subscriptions",
        component: Subscriptions
    },

    // Single Event

    {
        path: "/event/:permalink",
        name: "Single Event",
        component: SingleEvent
    }
];

export default routes;
