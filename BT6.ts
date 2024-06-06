let Prime: boolean[] = new Array(10001).fill(true);
Prime[0] = Prime[1] = false;

for (let i = 2; i * i <= 10000; i++) {
  if (Prime[i]) {
    for (let j = i * i; j <= 10000; j += i) {
      Prime[j] = false;
    }
  }
}

const validatePrime = async (a: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (a < 0 || a > 10000) {
      reject("Lỗi");
    } else {
      resolve(Prime[a]);
    }
  });
};
const isPrimeWithAsyncAwait = async (a: number) => {
  try {
    let result = await validatePrime(a);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

isPrimeWithAsyncAwait(2)
isPrimeWithAsyncAwait(3)
isPrimeWithAsyncAwait(4)

