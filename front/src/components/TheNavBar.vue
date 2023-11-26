<template>
    <nav class="nav">
        <template v-if="!authStore.isAuthenticated">
            <router-link
                :to="{name: 'login'}"
                class="nav__link"
                exact-active-class="nav__link_active"
            >
                Вход
            </router-link>
            <router-link
                :to="{name: 'register'}"
                class="nav__link"
                exact-active-class="nav__link_active"
            >
                Регистрация
            </router-link>
        </template>
        <template v-if="authStore.isAuthenticated">
            <RouterLink
                v-if="!accessToPages('sales')"
                :to="{name: 'sales'}"
                class="nav__link"
                exact-active-class="nav__link_active"
            >
                журнал покупок
            </RouterLink>
            <RouterLink
                v-if="!accessToPages('shopping')"
                :to="{name: 'shopping'}"
                class="nav__link"
                exact-active-class="nav__link_active"
            >
                журнал продаж
            </RouterLink>
            <RouterLink
                v-if="!accessToPages('administrator')"
                :to="{name: 'administrator'}"
                class="nav__link"
                exact-active-class="nav__link_active"
            >
                администрирование
            </RouterLink>
            <router-link
                :to="{name: 'index'}"
                class="nav__link"
                @click.prevent='logout()'
            >
                ({{ nameUser }})Выход
            </router-link>
        </template>
        <router-link
            :to="{name: 'about'}"
            class="nav__link"
            exact-active-class="nav__link_active"
        >
            О проекте
        </router-link>
    </nav>
</template>

<script lang="ts" setup>
import {useAuthStore} from "@/stores/useAuthStore";
import {router} from "@/router";
import {computed} from "vue";
import type {ComputedRef} from "vue";
import {accessToPages} from "@/composables/accessToPages";

const authStore = useAuthStore()
const nameUser: ComputedRef<string> = computed(() => {
    return authStore.user ? authStore.user.name : ''
})

const logout = async (): Promise<void> => {
    await authStore.logout()
    await router.push({name: 'index'});
}

</script>

<style scoped lang="scss">
.nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    &__link {
        font-size: 20px;
        line-height: 28px;
        color: var(--body-color);
        text-decoration: none;
        padding: 0 20px;
        position: relative;
        display: inline-flex;

        &:hover {
            color: var(--blue);

        }

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-2px, -50%);
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: var(--grey);
        }
    }

    &__link_active {
        border-bottom-color: var(--blue);
        color: var(--blue);
        animation: blink-1 0.6s both;
    }
}

@keyframes blink-1 {
    0%, 50%, 100% {
        opacity: 1;
    }
    25%, 75% {
        opacity: 0;
    }
}
</style>
