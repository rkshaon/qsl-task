import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name :'home',
        component: HelloWorld
    },
    {
        path: '/home',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/product',
        name: 'product',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router