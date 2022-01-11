var num = [1, 1, 1, 2, 3, 4, 4, 1]
var numObj = {}
num.map((n) => {
    if (numObj[n]) {
        numObj[n] = numObj[n] + 1
    } else {
        numObj[n] = 1
    }
})
console.log(numObj)