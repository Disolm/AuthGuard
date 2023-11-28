<template>
    <div class="lorem-paragraphs">
        <div class="lorem-paragraphs__paragraph" v-for="idx in paragraphs">
                <span :key="idx">
                    {{ loremText() }}
                </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {LoremIpsum} from "lorem-ipsum"

const props = defineProps({
    paragraphs: {
        type: Number,
        default: 3,
        required: false
    },
})
const loremText = (): string => {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 40,
            min: 20
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    })
    return lorem.generateParagraphs(1)
}
</script>

<style scoped lang="scss">
.lorem-paragraphs {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: var(--grey-8);
    &__paragraph {
        margin: 20px;
        text-indent: 30px;
    }
}
</style>