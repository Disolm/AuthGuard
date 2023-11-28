<template>
    <component
        :is="tag!"
        class="button"
        :class="[classForButton, {'button_block': block}]"
        :[type]="'button'"
    >
        <slot/>
    </component>
</template>

<script lang="ts" setup>
import {computed} from 'vue';

const props = defineProps({
    tag: {
        type: String,
        required: false,
        default: 'button'
    },
    variant: {
        type: String,
        required: false,
        validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value),
        default: 'secondary'
    },
    block: {
        type: Boolean,
        required: false,
        default: false
    }
})
const classForButton = computed<string>(() => {
    return `button_${props.variant}`
})
const type = computed<string>(() => {
    return props.tag === 'button' ? 'type' : 'null';
})
</script>

<style scoped lang="scss">
.button {
    display: inline-block;
    padding: 6px 12px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: initial;
    text-align: center;
    border: 2px solid transparent;
    border-radius: 2px;
    transition-duration: 0.2s;
    transition-property: background-color, border-color, color;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;

    &_block {
        display: block;
        width: 100%;
    }

    &_primary {
        background-color: var(--blue);
        border-color: var(--blue);
        color: var(--white);

        &:hover {
            background-color: var(--blue-light);
            border-color: var(--blue-light);
        }
    }

    &_secondary {
        background-color: var(--white);
        border-color: var(--blue);
        color: var(--blue);

        &:hover {
            border-color: var(--blue-light);
        }
    }

    &_danger {
        background-color: var(--white);
        border-color: var(--red);
        color: var(--red);

        &:hover {
            border-color: var(--red-light);
        }
    }
}
</style>
