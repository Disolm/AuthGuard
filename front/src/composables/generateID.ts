export function generateID():string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2)
}