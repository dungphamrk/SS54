let isPrimeB12: boolean[] = new Array(10001).fill(true);
isPrimeB12[0] = isPrimeB12[1] = false;

for (let i = 2; i * i <= 10000; i++) {
  if (isPrimeB12[i]) {
    for (let j = i * i; j <= 10000; j += i) {
      isPrimeB12[j] = false;
    }
  }
}
let arrPrime:any = [];
for (let i = 2; i <= 10000; i++) {
  if (isPrimeB12[i]) {
    arrPrime.push(i);
  }
}

const generatePrimes = async (n: any) => {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("loi du lieu dua vao");
  }

  const result = await new Promise<number[]>((resolve) => {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(arrPrime[i]);
    }
    resolve(result);
  });

  return result;
};

async function runGeneratePrimes(n: any) {
  try {
    const primes = await generatePrimes(n);
    console.log(`Các số nguyên tố từ 2 đến ${n} là: ${primes.join(", ")}`);
  } catch (error) {
    console.error(`${error}`);
  }
}

runGeneratePrimes(10);
