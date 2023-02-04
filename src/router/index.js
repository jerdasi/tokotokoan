import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import BerandaPage from "@/views/BerandaPage.vue";
import DetailProductPage from "@/views/DetailProductPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import BasePageLayout from "@/components/BasePageLayout.vue";
import ProfilPage from "@/views/ProfilPage.vue";
import CartPage from "@/views/CartPage.vue";

const routes = [
    {
        path: "/",
        name: "Home Page",
        redirect: {
            name: "Beranda Page"
        },
        component: BasePageLayout,
        children: [
            {
                path: "",
                name: "Beranda Page",
                component: BerandaPage
            },
            {
                path: "profil",
                name: "Profil Page",
                component: ProfilPage
            },
            {
                path: "product",
                name: "Product Page",
                component: ProductPage
            },
            {
                path: "product/:id/detail",
                name: "Detail Product Page",
                component: DetailProductPage
            },
            {
                path: "cart",
                name: "Cart Page",
                component: CartPage
            }
        ]
    },
    {
        path: "/login",
        name: "Login Page",
        component: LoginPage
    },
    {
        path: "/register",
        name: "Register Page",
        component: RegisterPage
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router