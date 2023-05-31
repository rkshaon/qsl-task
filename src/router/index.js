import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '../components/HomeComponent.vue'
import ProductComponent from '../components/ProductComponent.vue'

const routes = [
    {
        path: '/',
        name :'home',
        component: HomeComponent
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/product',
        name: 'product',
        component: ProductComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router