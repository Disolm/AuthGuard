<template>
    <div class="sales-view">
        <TheLayoutNamedPages title="журнал покупок">
            <TheLoremParagraphs :paragraphs="4"/>
        </TheLayoutNamedPages>
    </div>
</template>

<script setup lang="ts">

import TheLoremParagraphs from "@/components/TheLoremParagraphs.vue";
import TheLayoutNamedPages from "@/components/TheLayoutNamedPages.vue";
</script>

<style scoped lang="scss">
.sales-view {
}
</style>