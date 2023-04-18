
// type a = string | number;
// let b:a = 1234
// console.log(b)
// type c = ()=> number;
// let d:c = ()=> 111
// console.log(d())

// interface a {
//     aa:string
// }
// interface a{
//     bb:string
// }
// let b:a = {
//     aa:'111',
//     bb:'123',
// }
// console.log(b)

type a = string | number | (()=> number);
let d:a= ()=> 111
console.log(d())

// let a:any =123;
// a = '123'
// a = true
// a = 111111112
// let b:boolean = a
// console.log(b)
