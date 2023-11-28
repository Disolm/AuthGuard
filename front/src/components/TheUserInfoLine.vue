<template>
    <div class="user-line">
        <div class="user-line__title">
            <slot name='title'></slot>
        </div>
        <div class="user-line__description">
            <slot name='description'></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.user-line {
    height: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: flex-start;

    &__title {
        margin-right: 2px;
    }

    &__description {
    }

}
</style>