<template>
    <div class="user-view">
        <template v-if="users">
            <div v-for="user in users">
                <TheUserInfoItem :user="<IUser>user" :key="user.id"/>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/useAuthStore";
import type {IUser} from "@/types";
import {computed, onMounted} from "vue";
import TheUserInfoItem from "@/components/TheUserInfoItem.vue";

const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUsersArrayFromServer();
})
const users = computed(()=> {
    return authStore.usersArray
})
</script>

<style scoped lang="scss">

</style>