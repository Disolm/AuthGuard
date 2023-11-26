<template>
    <div
        class="form-group"
        :class="{ 'form-group_inline': inline }"
    >
        <label
            v-if="label"
            class="form-group__form-label"
        >
            {{ label }}
        </label>
        <slot/>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    inline: {
        type: Boolean,
        default: false,
        required: false
    },
    label: {
        type: String,
        required: false
    }
})
</script>

<style scoped lang="scss">
.form-group {
    position: relative;
    margin-bottom: 24px;
    margin-left: 16px;
    width: 100%;

    &_inline {
        display: inline-block;
        margin-bottom: 0;
    }

    &__form-label {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: var(--body-color);
        margin-bottom: 10px;
        display: block;
    }
}
</style>
