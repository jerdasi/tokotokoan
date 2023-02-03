import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import BerandaPage from "@/views/BerandaPage.vue";
import DetailProductPage from "@/views/DetailProductPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import BasePageLayout from "@/components/BasePageLayout.vue";

const routes = [
    {
        path: "/",
        name: "Beranda Page",
        component: BasePageLayout,
        children: [
            {
                path: "login",
                name: "Login Page",
                component: LoginPage
            },
            {
                path: "register",
                name: "Register Page",
                component: RegisterPage
            },
        ]
    },
    {
        path: "/product",
        name: "Product Page",
        component: ProductPage
    },
    {
        path: "/product/detail/:id",
        name: "Detail Product Page",
        component: DetailProductPage
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router