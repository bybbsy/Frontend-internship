import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main'},
        component: Home
    },
    {
        path: '/bom',
        name: 'bom',
        meta: {layout: 'empty'},
        component: () => import('../views/NextPage.vue')
    },
    {
        path: '/products',
        name: 'products-page',
        meta: {layout: 'main'},
        component: () => import('../views/ProductsPage.vue'),
        children: [
            {
                path: '',
                name: 'products',
                component: () => import('../views/Products.vue'),
            },
            {
                path: 'id=:id',
                name: 'product',
                component: () => import('../views/Product.vue')
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'no-page',
        meta: {layout: 'empty'},
        component: () => import('../views/ErrorPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
