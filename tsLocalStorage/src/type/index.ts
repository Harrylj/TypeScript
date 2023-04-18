import { Dictionaries } from "../enum";
export type Key = string //key类型
export type expire  = Dictionaries.permanent | number // 有效期类型
export interface Data<T>{   // 格式化data类型
    value:T
    [Dictionaries.expire]:Dictionaries.expire | number
}
export interface Result<T>{ // 返回值类型
    message:string,
    value:T | null
}
export interface StorageCls {// calss方法约束
    set:<T> (key:Key,value:T,expote:expire) => void 
    get:<T> (key:Key) =>Result<T |null>
    remove:(key:Key)=>void
    clear:()=>void
}