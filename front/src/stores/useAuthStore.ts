import {defineStore} from 'pinia';
import type {ComputedRef, Ref} from 'vue';
import {computed, ref} from 'vue';
import {getUsers, loginUser, logoutUser, setUsersFromServer} from '@/api/authApi';
import {deleteUserFromLocalStorage, getUserFromLocalStorage, setUserToLocalStorage,} from '@/services/authService';
import type {IUser, TypeResultUser, TypeUsers} from "@/types";

export const useAuthStore = defineStore('auth', () => {
    const user: Ref<IUser | null> = ref(getUserFromLocalStorage())
    const usersArray: Ref<TypeUsers | null> = ref(null)
    const isAuthenticated: ComputedRef<boolean> = computed(() => !!user.value);
    const accessRightsUser: ComputedRef<string | null> = computed(() => {
        return user.value?.accessRights || null
    })
    const setUser = (value: IUser | null) => {
        user.value = value;
    };
    const setUsersArrayToServer = async (value: TypeUsers | null) => {
        if (value) {
            await setUsersFromServer(value)
            usersArray.value = value;
        }
    };
    const getUsersArrayFromServer = async (): Promise<void> => {
        usersArray.value = await getUsers()
    }
    const login = async (email: string, password: string): Promise<TypeResultUser> => {
        const result: TypeResultUser = await loginUser(email, password);
        if (result.success) {
            setUser(result.data);
            setUserToLocalStorage(result.data);
        }
        return result
    };
    const logout = async () => {
        const result: TypeResultUser = await logoutUser();
        if (result.success) {
            setUser(null);
            deleteUserFromLocalStorage();
        }
    };
    return {
        user,
        usersArray,
        isAuthenticated,
        accessRightsUser,
        setUser,
        setUsersArrayToServer,
        getUsersArrayFromServer,
        login,
        logout,
    };
})