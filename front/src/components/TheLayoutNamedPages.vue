<template>
    <div class="layout-named-pages">
        <UiContainer>
            <UiPageTitle class="layout-named-pages__title">
                {{ title }}
            </UiPageTitle>
            <slot/>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import UiContainer from "@/components/UiContainer.vue";
import UiPageTitle from "@/components/UiPageTitle.vue";

const props = defineProps({
    title: {
        type: String,
        default: "Authentication user",
        required: false
    },
})
</script>

<style scoped lang="scss">
.layout-named-pages {
    width: 100%;
    margin: 0 auto;
    padding: 48px 0;

    &__title {
        text-align: center;
    }
}

</style>