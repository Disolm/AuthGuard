<template>
    <h1 class="logo">
        <router-link
            :to="{name: 'index'}"
            class="logo__link"
        >
            <img
                src="@/assets/images/lock-svgrepo-com.svg"
                alt="AuthGuard"
                class="logo__image"
            />
            <span class="logo__title">
                {{ 'authorization user'}}
            </span>
        </router-link>
    </h1>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.logo {
    &__link {
        display: block;
        text-align: center;
        margin: 12px auto;
        text-transform: uppercase;
        color: var(--body-color);
        text-decoration: none;
    }
    &__image{
        height: 30px;
        margin-right: 12px;
    }
    &__title {
        font-weight: 900;
        font-size: 34px;
        line-height: 30px;
    }
}
</style>
