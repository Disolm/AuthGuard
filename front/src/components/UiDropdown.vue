<template>
    <div
        class='dropdown'
        :class="{'dropdown_opened': isOpen}"
        @click='isOpen = !isOpen'
    >
        <button
            type='button'
            class='dropdown__toggle'
        >
            <span>{{ optionActive.text }}</span>
        </button>
        <div
            class='dropdown__menu'
            role='listbox'
            v-show='isOpen'
        >
            <button
                class='dropdown__item'
                role='option'
                type='button'
                v-for='option in options'
                @click="$emit('update:modelValue', option.value)"
            >
                {{ option.text }}
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue';
import type {Ref, ComputedRef} from 'vue';
import type {IAccessRightsOption} from "@/types";

const isOpen:Ref<boolean> = ref(false)
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    options: {
        required: true,
        type: Array<IAccessRightsOption>,
    },
    modelValue: {
        required: true,
        type: String,
    },
    title: {
        required: false,
        type: String,
        defaults: ''
    },
})

const optionActive:ComputedRef<IAccessRightsOption> = computed(()=> {
    const optionDefault: IAccessRightsOption = {text: props.title || '', value: ''}
    if(Array.isArray(props.options)) {
        const optionsValue: string[] = props.options.map(option => option.value)
        const valueIsInArrayOptionsValue: boolean = props.modelValue ? optionsValue.includes(props.modelValue) : false
        if (valueIsInArrayOptionsValue) {
            return props.options.find(option => option.value === props.modelValue) || optionDefault
        } else {
            return optionDefault
        }
    }
    return optionDefault

})
</script>

<style scoped lang="scss">
.dropdown {
    --width-min: 220px;
    position: relative;
    display: inline-flex;
    flex-direction: row;
    &__toggle {
        display: inline-flex;
        flex-direction: row;
        background-color: var(--green-light);
        min-height: 1.5em;
        min-width: var(--width-min);
        background-position: calc(100% - 10px) calc(100% - 10px);
        border: 1px solid var(--blue-light);
        border-radius: 2px;
        position: relative;
        padding: 0 28px 0 2px;
        color: initial;
        text-align: center;
        transition-duration: 0.2s;
        transition-property: background-color, fill, color;
        outline: none;
        box-shadow: none;
        cursor: pointer;
        text-decoration: none;
        &:after {
            content: '';
            position: absolute;
            top: 2px;
            right: 8px;
            transform: none;
            background: url('@/assets/icons/icon-check.svg') no-repeat;
            background-size: cover;
            display: block;
            width: 14px;
            height: 14px;
            transition: 0.2s transform;
        }
    }
    &_opened &__toggle {
        min-width: var(--width-min);
        display: flex;
        flex-direction: row;
        border-color: var(--blue);
        border-bottom-color: transparent;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &:after {
            transform: rotate(180deg);
        }
    }
    &__menu {
        background-clip: padding-box;
        border-radius: 0 0 2px 2px;
        border: 1px solid var(--blue);
        border-top: none;
        bottom: auto;
        display: flex;
        flex-direction: column;
        left: 0;
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0;
        position: absolute;
        right: auto;
        top: -32px;
        transform: translate3d(0px, 52px, 0px);
        width: 100%;
        will-change: transform;
        z-index: 95;
        max-height: 400px;

        &::-webkit-scrollbar {
            display: block;
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--grey);
            border-radius: 2px;
        }

        &::-webkit-scrollbar-track-piece {
            background: var(--white);
        }
    }
    &__item {
        padding: 0 2px;
        line-height: 28px;
        background-color: var(--white);
        box-shadow: none;
        border: none;
        cursor: pointer;
        text-align: left;
        transition-duration: 0.2s;
        transition-property: background-color, border-color, color;
        outline: none;
        text-decoration: none;
        &:hover, &:focus {
            background-color: var(--green-light);
        }
    }
}
</style>
