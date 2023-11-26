<template>
    <form class="form" @submit.prevent="submit">
        <slot/>

        <div v-if="$slots.buttons" class="form__buttons">
            <slot name="buttons"/>
        </div>

        <div v-if="$slots.append" class="form__append">
            <slot name="append"/>
        </div>
    </form>
</template>

<script lang="ts" setup>
const emit = defineEmits(['handleSubmit'])
const submit = () => {
    emit('handleSubmit')
}
</script>

<style scoped lang="scss">
.form {
    margin: 0;

    &__buttons {
        display: flex;
        flex-direction: column;
        padding: 0 40px;
        margin-top: 40px;
    }

    &__append {
        margin-top: 40px;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
    }
}
</style>
