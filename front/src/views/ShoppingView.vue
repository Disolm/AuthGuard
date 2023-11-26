<template>
    <div class="shopping-view">
        <TheLayoutNamedPages title="журнал продаж">
            <TheLoremParagraphs :paragraphs="3"/>
        </TheLayoutNamedPages>
    </div>
</template>

<script setup lang="ts">

import TheLoremParagraphs from "@/components/TheLoremParagraphs.vue";
import TheLayoutNamedPages from "@/components/TheLayoutNamedPages.vue";
</script>

<style scoped lang="scss">

</style>