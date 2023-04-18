// 我们在A类定义了 getName 抽象方法但为实现
// 我们B类实现了A定义的抽象方法 如不实现就不报错 我们定义的抽象方法必须在派生类实现
abstract class A{
    name:string
    constructor(name:string){
        this.name = name
    }
    print():string{
        return this.name
    }
    abstract getName():string
}
class B extends A{
    constructor(){
        super('alan')
    }
    getName(): string {
        return this.name
    }
}

let b= new B()
console.log(b.getName(),b.print())