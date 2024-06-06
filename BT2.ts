const validateB2 = async (a:number,b:number)=>{
    return new Promise((resolve,reject)=>{
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error("Phải nhập vào hai số"));
            return;
        }
        if (b===0) {
            reject(new Error("Không thể chia cho 0."));
            return;
        }
        let result=a/b;
        resolve(result)
    })
}
const divideNumbers= async (a:any,b:any)=>{
    try {
        let result= await validateB2(a,b);
        console.log(result);
    } catch (error) {
        console.log("Đã xảy ra lỗi: ",(error as Error).message);
    }
    finally{
        console.log("Kết thúc hàm divideNumbers");
    }
}

divideNumbers(10, 2)
divideNumbers(10, 0)
divideNumbers("abc", 2)

