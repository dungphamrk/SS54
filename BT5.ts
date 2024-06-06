let isPrime: boolean[] = new Array(10001).fill(true); 
isPrime[0] = isPrime[1] = false; 


for (let i = 2; i * i <= 10000; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= 10000; j += i) {
            isPrime[j] = false;
        }
    }
}


const isPrimeWithPromise = (number: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        if (number < 0 || number > 10000) {
            reject("Lỗi");
        } else {
            resolve(isPrime[number]);
        }
    });
};


isPrimeWithPromise(29)
    .then(result => {
        console.log("29 is prime:", result); 
    })
    .catch(error => {
        console.log("Error:", error);
    });

isPrimeWithPromise(15)
    .then(result => {
        console.log("15 is prime:", result); 
    })
    .catch(error => {
        console.log("Error:", error);
    });

isPrimeWithPromise(10001)
    .then(result => {
        console.log("10001 is prime:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });
