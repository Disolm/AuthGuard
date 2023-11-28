<template>
    <div class="delete-user-icon">
        <UiIcon
            icon="trash-bin"
            key="delete"
            v-if="!deletionConfirmation"
            @click="deletionConfirmation = true"
            class="delete-user-icon_click"
        />
        <template v-if="deletionConfirmation">
            <UiIcon
                icon="check-mark"
                key="confirmation"
                @click="deleteLine"
                class="delete-user-icon_click"
            />
            <UiIcon
                icon="cross"
                key="cancellation"
                @click="cancellation"
                class="delete-user-icon_click"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import UiIcon from "@/components/UiIcon.vue";
import type {Ref} from "vue";
import {ref} from "vue";
import type {IUser, TypeUsers} from "@/types";
import {useAuthStore} from "@/stores/useAuthStore";
const emit = defineEmits(['cancellationDelete'])
const deletionConfirmation: Ref<boolean> = ref(false)
const authStore = useAuthStore();

interface IProps {
    user: IUser
}
const props = defineProps<IProps>()

const deleteLine = async (): Promise<void> => {
    const users: TypeUsers | null =  authStore.usersArray as TypeUsers | null
    if (!users) return
    const newArrayUsers: TypeUsers = users.filter(item => {
        return item.id !== props.user.id
    })
    await authStore.setUsersArrayToServer(newArrayUsers)
}
const cancellation = (): void => {
    deletionConfirmation.value = false
    emit('cancellationDelete')
}
</script>

<style scoped lang="scss">
.delete-user-icon {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    @include icon-edit
}
</style>