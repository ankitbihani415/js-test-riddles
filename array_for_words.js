// ["baseball", "b, as, base, abcd, ball"]

// you have to break first word in such a way that i is exist in second string
// e.g. baseball  then it should return base , ball else return no match found

function getWords(arr){
    var mainWord = arr[0];
    var words = arr[1].split(", ")
    var output = "Not found";
    var fword;
    for(let i in words){
        fword = words[i];
        for(let j in words){
            if(mainWord === `${fword}${words[j]}`){
                output = `${fword},${words[j]}`;
                break;
            }
            else if (mainWord === `${words[j]}${fword}`){
                output = `${words[j]},${fword}`
                break;
            }
        }
        if(output !== "Not found"){
            break;
        }
    }
    return output;
}

console.log(getWords(["baseball", "b, as, base, abcd, ball"]))
console.log(getWords(["cricketmatch", "crick, cricket, base, match, ball"]))