<template>
    <footer class="footer">
        <UiContainer>Глебский Дмитрий&copy; 2023-{{ new Date().getFullYear() }}</UiContainer>
    </footer>
</template>

<script lang="ts" setup>
import UiContainer from "@/components/UiContainer.vue";
</script>

<style scoped lang="scss">
.footer {
    height: $height-footer;
    background: var(--green-light);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
