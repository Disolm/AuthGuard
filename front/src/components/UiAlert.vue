<template>
    <div class="alert">
        <slot>{{ text }}</slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: {
        type: String,
        default: "Error...",
        required: false
    },

})
</script>

<style scoped lang="scss">
.alert {
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 28px;
    color: var(--blue-2);
    border: 2px solid var(--blue-light);
    border-radius: 8px;
    margin: 32px 0;
}
</style>
