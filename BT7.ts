const myFirstPromise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve("success");
    }, 1000);
});
myFirstPromise.then((value)=>{
    console.log(value);
})
