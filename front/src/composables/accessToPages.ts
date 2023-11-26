import type {IValuesAccess} from "@/types";
import {accessRights} from "@/composables/permanent";
import {useAuthStore} from "@/stores/useAuthStore";

export function accessToPages(nameLink: string): boolean {
    const authStore = useAuthStore()
    if (!authStore.user) return false
    const arrValues: IValuesAccess[] = Object.values(accessRights)
    return arrValues.some((item: IValuesAccess):boolean => {
        return item.title === authStore.user?.accessRights && item.accessClosed.includes(nameLink)
    })
}