import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import BerandaPage from "@/views/BerandaPage.vue";

const routes = [
    {
        path: "/",
        name: "Beranda Page",
        component: BerandaPage
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router