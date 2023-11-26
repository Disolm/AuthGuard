<template>
    <Transition name="fade" mode="out-in">
        <slot/>
    </Transition>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
