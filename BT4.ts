const sum = (numbers: any[]): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers)) {
            reject(new Error("Tham số phải là một mảng."));
            return;
        }
        if (numbers.some(num => typeof num !== 'number' || isNaN(num))) {
            reject(new Error("Mảng phải chỉ chứa các số hợp lệ."));
            return;
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        resolve(sum);
    });
};
  const numbers = [1, 2, "a", 4, 5]; 
async function sumWithAsyncAwait(n:any[]) {
    try {
      
        const result = await sum(n);
        console.log("Tổng của các số trong mảng là:", result);
    } catch (error) {
        console.error("Đã xảy ra lỗi:", (error as Error).message);
    }
}

sumWithAsyncAwait(numbers);
