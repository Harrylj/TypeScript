type A = '小李' | '大李' | '老李' | 'alan'

function isWho(val:A){
    switch(val){
        case '小李':
            console.log(1)
            break;
        case '大李':
            console.log(2)
            break;
        case "老李":
            console.log(3)
            break;
        case "alan":
            console.log(4)
            break;  
        default:
            // 用于兜底逻辑
            const error:never = val;
            return error
    }
}
isWho('alan')