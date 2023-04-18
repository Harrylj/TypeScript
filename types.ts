// 泛型
function AA<T>(a:T,b:T,...c:T[]):T[]{
    return [a,b,...c]
}
console.log(AA<number>(1,2))
console.log(AA<string>('123','333','1','2'))

function Sub<T,U>(a:T,b:U):Array<T|U>{
    return [a,b]
}
console.log(Sub(1,true))

interface MyInter<T>{
    (arg:T):T
}
function fn<T>(arg:T):T{
    return arg
}
// let result:MyInter<number> = fn
let result:MyInter<number> = fn;
console.log(result(12345))

let foo:{ <T>(arg:T):T}
foo = function <T>(arg:T):T{
    return arg
}
console.log(foo(456))
