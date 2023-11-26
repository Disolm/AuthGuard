<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
    <div class="wrapper">
        <TheHeader/>
        <main class="main">
            <RouterView v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </RouterView>
        </main>
        <TheFooter/>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    background-color: var(--grey-light);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main {
    flex: 1 0 auto;
    flex-direction: column;
    display: flex;
    align-items: center;
}
</style>
