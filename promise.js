function wait(y) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(y*y);
        }, 1000);
    })
}
  
function populate() {
    return [1,2,3,4].map(async (obj) => {
        let a = wait(obj);
        return a;
    });
}

Promise.all(populate()).then((values) => {
    console.log(values);
});

// const computeResult = () => {
//     return 'sdas'
//  }
 
//  const asyncFunc = () => new Promise(resolve => 
//     setTimeout(() => resolve(computeResult()), 1000)
//  );
 
//  console.log("Wait for computeResult");
//  asyncFunc().then(r => console.log(r));