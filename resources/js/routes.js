import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Notification from "./views/Notification.vue";
import MyAccount from "./views/MyAccount.vue";
import EditAccount from "./views/EditAccount.vue";
import ChangePassword from "./views/ChangePassword.vue";
import Subscriptions from "./views/Subscriptions.vue";

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
    },
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
    }
];

export default routes;
