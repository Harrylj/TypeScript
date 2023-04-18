// 定义类

// 使用public 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public
// 使用  private 修饰符 代表定义的变量私有的只能在内部访问 不能在外部访问
// 使用  protected 修饰符 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问
// static 静态函数 同样也是不能通过this 去调用 也是通过类名去调用
// 我们用static 定义的属性 不可以通过this 去访问 只能通过类名去调用
// 需注意： 如果两个函数都是static 静态的是可以通过this互相调用
class Person{
    public name:string = 'defaultName'
    private age:number = 0
    protected some:any
    static nb:string = '1234'
    constructor(name:string,age:number,some:any){
        this.name = name
        this.age = age
        this.some = some
        console.log(this.name ,this.age,this.some)
    }
    static runStatic (){
        return 'runStatic'
    }
    static more(){
        console.log(this.runStatic)
    }
    run (){
        return 'run'
    }
}
class Man extends Person{
    
    constructor(){
        super('wo',29,666)
        console.log(this.some,this.run)
    }
    create(){
        console.log(this.some,this.run)
    }
}

let man = new Man()
let alan = new Person('alan',22,'a some');
console.log(Person.nb,Man.nb)
console.log(Person.runStatic,alan.run)
console.log(man.name)