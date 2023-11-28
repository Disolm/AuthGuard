import {httpClient} from "@/api/httpClient";
import type {IUser, TypeResultUser, TypeUsers} from "@/types";
import {getUsersArrayFromLocalStorage, setUsersArrayToLocalStorage} from "@/services/authService";

export async function getUsers(): Promise<null | TypeUsers> {

    const localUsers: TypeUsers | null = getUsersArrayFromLocalStorage()
    if (localUsers) {
        return localUsers
    }

    let serverUsers: null | TypeUsers = null
    await httpClient.get('')
        .then(response => {
            serverUsers = response.data
        }).catch((error: Error): void => {
            console.log(error)
        })
    return serverUsers
}
export async function setUsersFromServer(users: TypeUsers) {
    if (users) {
        setUsersArrayToLocalStorage(users)
    }
    return httpClient.post('', users)
}


export async function loginUser(email: string, password: string): Promise<TypeResultUser> {
    let result: TypeResultUser = {success: false, data: null}
    await httpClient.get('')
        .then(response => {
            const resultId: number = response.data.findIndex((user: IUser): boolean => {
                return user.email === email && user.password === password
            })
            result.success = resultId !== -1
            result.data = response.data[resultId]
        }).catch((error: Error): void => {
            console.log(error)
        })
    return result
}

export async function registerUser(newUser: IUser): Promise<boolean> {
    /*
        сохранение данные в LocalStorage
    */
    const users: TypeUsers | null = await getUsers()
    if (users) {
        users.push(newUser)
        setUsersArrayToLocalStorage(users)
    }
    return httpClient.post('', newUser)

}

export function logoutUser(): TypeResultUser {
    return {success: true, data: null}
}
