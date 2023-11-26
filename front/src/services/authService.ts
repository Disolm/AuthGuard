import type {IUser} from "@/types";

export function setUserToLocalStorage(user: IUser | null):void {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserFromLocalStorage(): IUser | null {
  const result: string | null = localStorage.getItem('user');
  return result ? JSON.parse(result) : null;
}

export function deleteUserFromLocalStorage():void {
  delete localStorage.user;
}