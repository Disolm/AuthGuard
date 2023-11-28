import type {IAccessRights, IAccessRightsOption, ITitleKey, IValuesAccess} from "@/types";

export const accessRights: IAccessRights = {
    admin: {title: 'admin', text: 'администратор', accessClosed: ['']},
    analyst: {title: 'analyst', text: 'аналитик', accessClosed: ['administrator']},
    sales: {title: 'sales', text: 'менеджер по продажам', accessClosed: ['administrator', 'shopping']},
    purchasing: {title: 'purchasing', text: 'менеджер по закупкам', accessClosed: ['administrator', 'sales']},
    none: {title: 'none', text: 'отсутствует', accessClosed: ['administrator', 'shopping', 'sales']},
}
export function accessRightsArr(): IAccessRightsOption[] {
    return Object.values(accessRights).map((item:IValuesAccess) => {
        return {value: item.title, text: item.text}
    })
}
export const titleKey: ITitleKey = {
    name: {title: "Имя", type: "text"},
    email: {title: "Email", type: "text"},
    password: {title: "Пароль", type: "password"},
    accessRights: {title: "Роль", type: "options"},
}