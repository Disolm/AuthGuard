import {httpClient} from "@/api/httpClient";
import type {IUser, TypeResultUser, TypeUsers} from "@/types";
export async function getUsers(): Promise<null | TypeUsers> {
    let users: any = null
    await httpClient.get('')
        .then(response => {
            users = response.data.map((user: IUser): IUser => {
                delete user.password
                return user
            })
        }).catch((error: Error): void => {
            console.log(error)
        })
    return users
}


export async function loginUser(email: string, password: string): Promise<TypeResultUser> {
    let result:TypeResultUser = {success: false, data: null}
    await httpClient.get('')
        .then(response => {
            const resultId:number = response.data.findIndex((user: IUser): boolean=> {
                return user.email === email && user.password === password
            })
            result.success = resultId !== -1
            result.data = response.data[resultId]
        }).catch((error: Error): void => {
            console.log(error)
        })
    return result
}

export async function registerUser(user: { password: string; name: string; id: number; email: string }): Promise<boolean> {
    const newUser: IUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password!,
        accessRights: "none",
    }
    return httpClient.post('', newUser)
}
export function logoutUser():TypeResultUser {
    return {success: true, data: null}
}
