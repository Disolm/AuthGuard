import {useAuthStore} from '@/stores/useAuthStore';
import type {RouteLocationNormalized} from 'vue-router'
import {accessToPages} from "@/composables/accessToPages";

export function authGuard(to: RouteLocationNormalized) {
    const authStore = useAuthStore();
    const isAuthenticated: boolean = authStore.isAuthenticated;
    const mainPath: string[] = String(to.name).split('.')
    if (to.meta.requireGuest && isAuthenticated) {
        return {name: 'index'};
    } else if (accessToPages(mainPath[0]) && isAuthenticated) {
        return {name: 'index', query: {from: to.path}};
    } else if (to.meta.requireAuth && !isAuthenticated) {
        return {name: 'login', query: {from: to.path}};
    }
}
