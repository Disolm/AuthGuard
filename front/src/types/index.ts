
export interface IUser extends Record<string, string | number> {
    "id": number,
    "name": string,
    "email": string,
    "password": string,
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
export interface IValuesAccess {title: string, text:string, accessClosed: string[]}

export interface IAccessRightsOption {
    value: string,
    text: string
}
export interface ITitleKey {
    name: IKeyForTitle,
    email: IKeyForTitle,
    password: IKeyForTitle,
    accessRights: IKeyForTitle,
}
export interface IKeyForTitle {
    title: string, type: string
}