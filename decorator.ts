//1.类装饰器 ClassDecorator 
//2.属性装饰器 PropertyDecorator
//3.参数装饰器 ParameterDecorator
//4.方法装饰器 MethodDecorator PropertyDescriptor 'https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10'
//5.装饰器工厂
namespace Decorator{
    // 需要在tsconfig.ts里修改配置才能使用Decorator,"experimentalDecorators": true,
    
    // 装饰器
    const watcher:ClassDecorator = (target:Function)=>{
        target.prototype.getParams = <T>(params:T):T=>{
            return params
        }
    }
    @watcher
    class A{
        constructor(){

        }
    }
    const a = new A();
    // console.log((a as any).getParams('123'))

    // 装饰器工厂
    const watcherTwo = (name:string):ClassDecorator =>{
        return (target:Function)=>{
            target.prototype.getParams = <T>(params:T):T =>{
                return params
            }
            target.prototype.getOptions = ():string =>{
                return name
            }
        }
    }
    @watcherTwo('name')
    class B {
        constructor(){

        }
    }
    const b = new B();
    // console.log((b as any).getParams('1234'));

    //装饰器组合
    const watcherThree = (name:string):ClassDecorator =>{
        return (target:Function)=>{
            target.prototype.getNames = ():string =>{
                return name
            }
        }
    }
    @watcherThree('Name2')
    @watcherTwo('name')
    class C{
        constructor(){

        }
    }
    const c =new C();
    // console.log((c as any).getOptions())
    // console.log((c as any).getNames())

    //  方法装饰器
    const met:MethodDecorator = (...args) =>{
        // console.log(args)
    }
    class D{
        constructor(){

        }
        @met
        getName ():string{
            return 'alan'
        }
    }
    const d = new D;
    // console.log(d)

    // 属性装饰器
    const metTwo:PropertyDecorator = (...args)=>{
        // console.log(args);
    }
    class E{
        @metTwo
        name?:string = '123'
        constructor(){

        }
    }
    const e = new E();
    // console.log(e)

    // 参数装饰器
    const metThree:ParameterDecorator = (...args)=>{
        console.log(args)
    }
    class F{
        constructor(){

        }
        setParams(@metThree name:string = '213'){

        }
        setParamsTwo(@metThree age:number = 29){

        }
    }
    const f = new F()
}
