<template>
    <div
        class="input"
    >
        <component
            :is="tag"
            ref="input"
            class="input__input"
            :value="modelValue"
            v-bind="$attrs"
            rows="3"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement | HTMLTextAreaElement ).value)"
            :placeholder="placeholder"
        />
    </div>
</template>
<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import type {Ref} from "vue";

defineOptions({
    inheritAttrs: false
})
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        default: ''
    },
    multiline: {
        type: Boolean,
        required: false,
        default: false
    },
    index: {
        type: Number,
        required: false
    }
})
const tag = computed<string>(() => {
    return props.multiline ? 'textarea' : 'input'
})
const input: Ref<HTMLInputElement | HTMLTextAreaElement | null> = ref(null)
const focus = (): void => {
    input.value?.focus()
}
onMounted(() => {
    focus()
})
</script>
<style scoped lang="scss">

.input {
    //width: 100%;

    &__input {
        width: 100%;
        min-width: 0;
        max-width: 300px;
        background: var(--green-light);
        color: var(--grey-8);
        resize: none;

        &::placeholder {
            color: var(--blue-light);
            font-size: .9em;
        }
    }
}
</style>