import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/insertar',
        component: () => import('@/pages/ProductoInsertar.vue')
    },
    {
        path: '/consultar',
        component: () => import('@/pages/ProductoConsultar.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/PageNotFond.vue')
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router