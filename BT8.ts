function countDown(n:number) {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject(new Error("n must be a positive integer"));
            return;
        }

        let remainingTime = n;
        console.log(remainingTime); // In ra số giây bắt đầu

        const intervalId = setInterval(() => {
            remainingTime -= 1;
            if (remainingTime > 0) {
                console.log(remainingTime); // In ra số giây còn lại
            } else {
                clearInterval(intervalId);
                console.log("Hoàn thành quá trình đếm");
                resolve(1);
            }
        }, 1000);
    });
}
countDown(5)
