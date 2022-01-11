function getType(value){
    if(isArray(value)){
        return "array"
    }
    else {
        return typeof value;
    }
}

console.log(getType(12))
console.log(getType('12'))
console.log(getType([12,34,34]))
console.log(getType({name:"ankit",age:28}))
