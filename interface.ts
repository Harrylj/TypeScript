interface PersonClass{
    get(type:boolean):boolean
}

interface PersonClass2{
    set():void,
    asd:string
}

class A{
    name:string
    constructor(){
        this.name = '123'
        console.log(this.name)
    }
}

class Person extends A implements PersonClass,PersonClass2{
    asd:string
    constructor(){
        super()
        this.asd ='234'
        console.log(this.asd)
    }
    get(type: boolean): boolean {
        return type
    }
    set(): void {
        
    }
}
new Person()