import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import type { Ref, ComputedRef } from 'vue';
import { loginUser, logoutUser } from '@/api/authApi';
import { setUserToLocalStorage, getUserFromLocalStorage, deleteUserFromLocalStorage } from '@/services/authService';
import type {IUser, TypeResultUser} from "@/types";

export const useAuthStore = defineStore('auth', ()=>{
    const user:Ref<IUser | null> = ref(getUserFromLocalStorage())
    const isAuthenticated:ComputedRef<boolean> = computed(() => !!user.value);
    const accessRightsUser:ComputedRef<string | null> =computed(()=> {
        return  user.value?.accessRights || null
    })
    const setUser = (value: IUser | null) => {
        user.value = value;
    };
    const login = async (email:string, password:string): Promise<TypeResultUser> => {
        const result:TypeResultUser = await loginUser(email, password);
        if (result.success) {
            setUser(result.data);
            setUserToLocalStorage(result.data);
        }
        return result
    };
    const logout = async () => {
        const result:TypeResultUser = await logoutUser();
        if (result.success) {
            setUser(null);
            deleteUserFromLocalStorage();
        }
    };
    return {
        user,
        isAuthenticated,
        accessRightsUser,
        setUser,
        login,
        logout,
    };
})