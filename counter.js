var temArr = []
function flattenArray(arr){
    for(let i in arr){
        if(typeof arr[i] === 'number'){
            temArr.push(arr[i])
        }
        else{
            flattenArray(arr[i])
        }
    }
}

const arr = [1, 2, [3, 4, [5, 6], [7,8],9],10,11];
flattenArray(arr)
console.log(temArr)
