<template>
    <div class="user-form">
        <TheUserInfoLine
            v-for="(item, key) in titleKey"
            :key="key + user.id"
        >
            <template v-slot:title>
                <span>{{ item.title }}</span><span>:</span>
            </template>
            <template
                v-if="!clickOnEdit"
                v-slot:description
            >
                {{ userFormatted(key, user) }}
            </template>
            <template
                v-else-if="clickOnEdit "
                v-slot:description
            >
                <UiDropdown
                    v-if="item.type === 'options'"
                    :options="accessRightsArr()"
                    :modelValue="userFormatted(key, <IUser>localUser)"
                    @update:modelValue="changeOptions(key, $event)"
                    title="-"
                />
                <UiInput
                    v-else
                    placeholder=""
                    :modelValue="userFormatted(key, <IUser>localUser)"
                    @update:modelValue="changeInput(key, $event)"
                />
<!--                :type="item.type"-->
            </template>
        </TheUserInfoLine>
    </div>
</template>

<script setup lang="ts">
import TheUserInfoLine from "@/components/TheUserInfoLine.vue";
import UiDropdown from "@/components/UiDropdown.vue";
import UiInput from "@/components/UiInput.vue";
import {accessRights, accessRightsArr, titleKey} from "@/composables/permanent";
import type {IUser} from "@/types";
import {ref, watch} from "vue";
import type {shallowRef} from "vue";
import {klona} from "klona";
interface IProps {
    clickOnEdit: boolean
    user: IUser
}
const props = defineProps<IProps>()
const localUser: shallowRef<IUser | null> = ref(klona(props.user))
const emit = defineEmits(['localUserChang'])
watch(() => localUser.value, ()=> {
    emit('localUserChang', localUser.value)
},{ deep: true })
const userFormatted = (key:string, userData:IUser):string => {
    if (!userData) return ''
    if (key === 'password' && !props.clickOnEdit) {
        const length: number = userData[key]?.length || 6
        const max: number = 6
        const min: number = 2
        const randomLength: number = Math.floor(Math.random() * (max - min + 1)) + min
        return '*'.repeat(length + randomLength)
    }
    if (key === 'accessRights') {
        return props.clickOnEdit ? accessRights[userData.accessRights].title : accessRights[userData.accessRights].text
    }
    return String(userData[key] as string | number)
}
const changeInput = (key: string, event: string): void => {
    localUser.value[key] = event
}
const changeOptions = changeInput
</script>

<style scoped lang="scss">

</style>