import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/classified',
            name: 'classified',
            component: () => import('../views/Classified.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/mi',
            name: 'mi',
            component: () => import('../views/Mi.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/Cart.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/Profile.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('../views/Detail.vue'),
            meta: {
                keepAlive: true
            }
        },
    ]
})

export default router