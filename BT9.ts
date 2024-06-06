const sortArrayWithPromise =async (arr:any)=>{
    return new Promise((resolve,reject)=>{
       if (!Array.isArray(arr)) {
            reject(new Error( "Dữ liệu nhập vào ko phải mảng"));
            return;
       }
       if (arr.some((num) => typeof num !== "number" || isNaN(num))) {
        reject(new Error("Mảng phải chỉ chứa các số hợp lệ."));
        return;
      }
      resolve(arr.sort((a,b)=>a-b));
    })
}
 sortArrayWithPromise("a")
 .then((result)=>console.log(result) )
 .catch((error)=>{console.log(`${error}`);
 })
