export const sortFunction=<T>(prev: T, compare: T, property: keyof T): number=>{
    return prev[property] > compare[property] 
        ? 1
        : prev[property] < compare[property]
        ? -1
        : 0
};