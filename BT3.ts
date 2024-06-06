const sumArrayWithPromise = (numbers: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(numbers)) {
      reject(new Error("Tham số phải là một mảng."));
      return;
    }
    if (numbers.some((num) => typeof num !== "number" || isNaN(num))) {
      reject(new Error("Mảng phải chỉ chứa các số hợp lệ."));
      return;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    resolve(sum);
  });
};
const numbersB3 = [1, 2, "a", 4, 5];
sumArrayWithPromise(numbersB3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log((error as Error).name);
  });

sumArrayWithPromise(numbersB3);
