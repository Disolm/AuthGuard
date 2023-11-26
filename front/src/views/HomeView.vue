<template>
    <div class="home-view">
        <UiContainer>
            <h2 class="title">IndexPage</h2>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import UiContainer from "@/components/UiContainer.vue";
</script>
<style scoped lang="scss">
.home-view {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
}
</style>
