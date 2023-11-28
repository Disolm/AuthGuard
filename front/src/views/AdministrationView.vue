<template>
    <div class="administration-view">
        <TheLayoutNamedPages title="администратор">
            <div class="administration-view__buttons">
                <UiButton
                    tag='router-link'
                    variant='primary'
                    :to="{ name: 'administrator.usersInfo' }"
                    class='administration-view__aside-button'
                >
                    Users
                </UiButton>
                <UiButton
                    tag='router-link'
                    variant='primary'
                    :to="{ name: 'administrator.userRegister' }"
                    class='administration-view__aside-button'
                >
                    Add user
                </UiButton>
            </div>

            <RouterView/>
        </TheLayoutNamedPages>
    </div>
</template>

<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import TheLayoutNamedPages from "@/components/TheLayoutNamedPages.vue";
</script>

<style scoped lang="scss">
.administration-view {
    &__buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        grid-gap:20px
    }
    &__aside-button{
        margin: 0 10px;
    }
}
</style>