
export interface IUser {
    "id": number,
    "name": string,
    "email": string,
    "password"?: string,
    "accessRights": string
}

export type TypeUsers = IUser[]
export type TypeResultUser = {
    success: boolean
    data: IUser | null
}

export interface IAccessRights {
    [key: string]: IValuesAccess
}
export interface IValuesAccess {title: string, accessClosed: string[]}