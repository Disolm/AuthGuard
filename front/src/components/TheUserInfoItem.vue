<template>
    <div class="user-info-item"
         @mouseover="userEditedCursor = true"
         @mouseleave="mouseleaveMainDiv"
         v-clickOutside="() => {clickOnEdit = false; userEditedCursor = false}"
    >
        <TheUserInfoForm
            :user="user"
            :clickOnEdit="clickOnEdit"
            @localUserChang="localUser = $event"
        />
        <UiTransitionGroupFade class="user-info-item__icons">
            <template v-if="userEditedCursor && proviso()">
                <EditUserIcon
                    class="user-info-item__icon"
                    key="EditCitizenIcon"
                    @mouseup="clickOnEdit = true"
                    @cancellationEdit="clickOnEdit = false"
                    @save-changes="saveChanges()"
                    v-if="!clickOnDelete"
                />
                <DeleteUserIcon
                    class="user-info-item__icon"
                    key="DeleteCitizenIcon"
                    v-if="!clickOnEdit"
                    @mouseup="() => {clickOnDelete = true}"
                    @cancellationDelete="clickOnDelete = false"
                    :user="user"
                />
            </template>
        </UiTransitionGroupFade>
    </div>
</template>

<script setup lang="ts">
import type {IUser, TypeUsers} from "@/types";
import {klona} from "klona";
import {ref} from "vue";
import type {Ref} from "vue";
import TheUserInfoForm from "@/components/TheUserInfoForm.vue";
import UiTransitionGroupFade from "@/components/UiTransitionGroupFade.vue";
import DeleteUserIcon from "@/components/DeleteUserIcon.vue";
import EditUserIcon from "@/components/EditUserIcon.vue";
import {useAuthStore} from "@/stores/useAuthStore";
const localUser: Ref<IUser | null> = ref(null)
interface IProps {
    user: IUser
}
const emit = defineEmits(['localUser'])
const props = defineProps<IProps>()
const clickOnEdit: Ref<boolean> = ref(false)
const clickOnDelete: Ref<boolean> = ref(false)
const userEditedCursor: Ref<boolean> = ref(false)
const saveChanges = async () => {
    const authStore = useAuthStore();
    const allUsers: TypeUsers | null = authStore.usersArray as TypeUsers | null
    clickOnEdit.value = false
    if (!allUsers) return
    let replaceUserIndex: number = allUsers.findIndex(user => user.id === localUser.value?.id)
    allUsers[replaceUserIndex] = klona(localUser.value) as IUser
    await authStore.setUsersArrayToServer(allUsers)
}
const mouseleaveMainDiv = ():void => {
    if (!clickOnEdit.value) userEditedCursor.value = false
    clickOnDelete.value = false
}
const proviso = ():boolean => {
    const authStore = useAuthStore();
    return props.user.name !== authStore.user?.name || false
}


</script>

<style scoped lang="scss">
.user-info-item {
    position: relative;
    padding: 10px;
    margin: 10px;
    border: 2px solid var(--grey);
    border-radius: 8px;
    width: 400px;
    &__icons {
        height: 26px;
        position: absolute;
        right: 10px;
        top: 10px;
        display: flex;
        flex-direction: row;
        //justify-content: flex-end;
    }
    &__icon {
        width: 26px;
    }
}
</style>