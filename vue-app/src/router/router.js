import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

console.log(Router)
// let Home = { template: '<div>User</div>'}
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: Home },
        // { path: '/bom', name: 'bom', component: '' },
        { path: '/products', name: 'products', component: () => import('../views/Products.vue') }
    ]
})
