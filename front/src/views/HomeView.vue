<template>
    <div class="home-view">
        <TheLayoutNamedPages title="Главная страница">
            <TheLoremParagraphs :paragraphs="5"/>
        </TheLayoutNamedPages>
    </div>
</template>
<script setup lang="ts">
import TheLoremParagraphs from "@/components/TheLoremParagraphs.vue";
import TheLayoutNamedPages from "@/components/TheLayoutNamedPages.vue";
</script>
<style scoped lang="scss">
.home-view {
}
</style>
