//1.类装饰器 ClassDecorator 
//2.属性装饰器 PropertyDecorator
//3.参数装饰器 ParameterDecorator
//4.方法装饰器 MethodDecorator PropertyDescriptor 'https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10'
//5.装饰器工厂
import axios from 'axios'
import 'reflect-metadata' // 元数据存储 可以快速存储元数据然后在用到的地方取出来 defineMetadata getMetadata
const Base = (base:string)=>{
    const fn:ClassDecorator = (target)=>{
        target.prototype.base = base
    }
    return fn
}

const Get = (url:string)=>{
    const fn:MethodDecorator = (target:any,key,descriptor:PropertyDescriptor)=>{
        axios.get(url).then(res=>{
            const key = Reflect.getMetadata('key',target)
            descriptor.value(key ? res.data[key]:res.data)
        })
    }
    return fn
}
const Post = (url:string,params:any)=>{
    const fn:MethodDecorator = (target:any,key,descriptor:PropertyDescriptor)=>{
        console.log(url,params)
        axios.post(url,params).then(res=>{
            const key = Reflect.getMetadata('key',target)
            descriptor.value(key ? res.data[key]:res.data)
        })
    }
    return fn
}
const result =()=>{
    const fn:ParameterDecorator = (target:any,key,index)=>{
        Reflect.defineMetadata('key','result',target)
    }
    return fn
}

const Bt:PropertyDecorator = (target:any,key)=>{
    console.log(target,key)
}
@Base('/api')
class Http{
    @Bt
    alan:string
    constructor(){
        this.alan = 'harry'
    }
    // @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(@result() data:any){
        // console.log(data)
    }
    
    @Post('https://api.apiopen.top/api/login',{"account": "309324904@qq.com","password": "123456"})
    postList(@result() data:any){
        console.log(data)
    }
}
const http = new Http() as any