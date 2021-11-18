import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '/', 
            name: 'home', 
            meta: { layout: 'main' },
            component: Home
        },
        {
            path: '/bom',
            name: 'bom',
            meta: { layout: 'empty'},
            component: () => import('../views/NextPage.vue')
        },
        {
            path: '/products',
            name: 'products',
            meta: { layout: 'main' },
            component: () => import('../views/Products.vue')
        },
        {
            path: '*',
            name: 'no-page',
            meta: { layout: 'empty' },
            component: () => import('../views/ErrorPage.vue')
        }
    ]
})
