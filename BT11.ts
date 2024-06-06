async function fibonacci(n:number) {
    if (n <= 0) {
        throw new Error("Dữ liệu nhập vào không hợp lệ");
    }
    function math(n:number):number {
        if (n <= 1) return n;
        return math(n - 1) + math(n - 2);
    }
    const result = await new Promise((resolve) => {
        const fibNumber = math(n);
        resolve(fibNumber);
    });

    return result;
}
async function runFibonacci(n:number) {
    try {
        const result = await fibonacci(n);
        console.log(`Số Fibonacci thứ ${n} là ${result}`);
    } catch (error) {
        console.error(`${error}`);
    }
}

runFibonacci(10);
