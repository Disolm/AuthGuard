import type {IUser, TypeUsers} from "@/types";

export function setUserToLocalStorage(user: IUser | null): void {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserFromLocalStorage(): IUser | null {
    const result: string | null = localStorage.getItem('user');
    return result ? JSON.parse(result) : null;
}

export function getUsersArrayFromLocalStorage(): IUser[] | null {
    const result: string | null = localStorage.getItem('users');
    return result ? JSON.parse(result) : null;
}

export function setUsersArrayToLocalStorage(users: TypeUsers | null): void {
    if (users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
}

export function deleteUserFromLocalStorage(): void {
    delete localStorage.user;
}