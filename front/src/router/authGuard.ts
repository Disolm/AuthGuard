import {useAuthStore} from '@/stores/useAuthStore';
import type {RouteLocationNormalized} from 'vue-router'
import {accessToPages} from "@/composables/accessToPages";

export function authGuard(to: RouteLocationNormalized) {
    const authStore = useAuthStore();
    const isAuthenticated: boolean = authStore.isAuthenticated;
    if (to.meta.requireGuest && isAuthenticated) {
        return {name: 'index'};
    } else if (to.meta.requireAuth && !isAuthenticated) {
        return {name: 'login', query: {from: to.path}};
    } else if (accessToPages(String(to.name)) && isAuthenticated) {
        return {name: 'index', query: {from: to.path}};
    }
}
