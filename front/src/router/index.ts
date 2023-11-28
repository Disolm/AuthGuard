import {createRouter, createWebHistory,} from 'vue-router'
import type {Router} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {authGuard} from "@/router/authGuard";
import type {RouteLocationNormalized} from 'vue-router'

export const routes = [
    {
        path: '/',
        name: 'index',
        component: HomeView,
    },
    {
        path: '/sales',
        name: 'sales',
        meta: {
            requireAuth: true,
        },
        component: () => import('../views/SalesView.vue')
    },
    {
        path: '/shopping',
        name: 'shopping',
        meta: {
            requireAuth: true,
        },
        component: () => import('../views/ShoppingView.vue')
    },
    {
        path: '/administrator',
        name: 'administrator',
        redirect: (to:RouteLocationNormalized) => ({ name: 'administrator.usersInfo', params: to.params }),
        meta: {
            requireAuth: true,
        },
        component: () => import('../views/AdministrationView.vue'),
        children: [
            {
                path: 'users',
                name: 'administrator.usersInfo',
                component: () => import('../views/UsersEditView.vue'),
            },
            {
                path: 'register',
                name: 'administrator.userRegister',
                component: () => import('../views/RegisterView.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            requireGuest: true,
        },
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            requireAuth: true,
        },
        component: () => import('../views/RegisterView.vue')
    },

    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import('../views/NotFoundView.vue')
    },
]

export const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach(authGuard);
