import type {IAccessRights} from "@/types";

export const accessRights: IAccessRights = {
    admin: {title: 'admin', accessClosed: ['']},
    analyst: {title: 'analyst', accessClosed: ['administrator']},
    sales: {title: 'sales', accessClosed: ['administrator', 'shopping']},
    purchasing: {title: 'purchasing', accessClosed: ['administrator', 'sales']},
    none: {title: 'none', accessClosed: ['administrator', 'shopping', 'sales']},
}