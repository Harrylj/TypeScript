const symbol1 = Symbol('1111')
const symbol2 = Symbol('2222')
const obj1 = {
    [symbol1]:'haryy',
    [symbol2]:'alan',
    age:29,
    sex:'man'
}
// 这四个都不能拿到symbol
// 1 for in 遍历
for(const key in obj1){
    // 注意在console看key,是不是没有遍历到symbol1
    console.log(key)
}
// 2 Object.keys 遍历
Object.keys(obj1)
console.log(Object.keys(obj1))
// 3 getOwnPropertyNames(obj1)
console.log(Object.getOwnPropertyNames(obj1))
// 4 Json.stringfy
console.log(JSON.stringify(obj1))

// 这两能拿到symbol
// 5 拿到具体的symbol属性，对象中有几个就会拿到几个
Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertySymbols(obj1))
// 6 es6 的Reflect拿到对象的所有属性
Reflect.ownKeys(obj1)
console.log(Reflect.ownKeys(obj1))


interface Item {
    age: number,
    name: string
}

const array:Item[] = [{ age: 111, name: "1" }, { age: 222, name: "2" }, { age: 333, name: "3" }]
console.log(array)
type mapTypes =  string | number
const map:Map<mapTypes,mapTypes> = new Map()
map.set('1','harry ')
map.set('2','alan ')

let set:Set<number> = new Set([1,1,2,2,3,3,4,5,6])
// let it:Iterator<Item> = array[Symbol.iterator]()
const gen = (erg:any):void =>{
    let it:Iterator<any> = erg[Symbol.iterator]()
    let next:any = {done:false}
    while(!next.done){
        next = it.next()
        if(!next.done){
            console.log(next.value)
        }
    }
}
gen(array)

for(let value of map){
    console.log(value)
}

 
const obj = {
    max: 5,
    current: 0,
    [Symbol.iterator]() {
        return {
            max: this.max,
            current: this.current,
            next() {
                if (this.current == this.max) {
                    return {
                        value: undefined,
                        done: true
                    }
                } else {
                    return {
                        value: this.current++,
                        done: false
                    }
                }
            }
        }
    }
}
console.log([...obj])
 
for (let val of obj) {
   console.log(val);
   
}