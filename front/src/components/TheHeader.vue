<template>
    <header class="header">
        <TheLogo/>
        <TheNavBar/>
    </header>
</template>

<script lang="ts" setup>
import TheNavBar from "@/components/TheNavBar.vue";
import TheLogo from "@/components/TheLogo.vue";

</script>

<style scoped lang="scss">
.header {
    min-height: $height-header;
    padding-bottom: 10px;
    background-color: var(--blue-light);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
