const findElement =(arrB10:any,n:number)=>{
    return new Promise((resolve,reject)=>{
        if (arrB10.indexOf(n)==-1) {            
            reject(new Error(`Ko tim thay phan tu ${n}`));
            return;
        }
        resolve(arrB10.indexOf(n));
    })
}
findElement([1, 2, 3, 4, 5], 3)
    .then ((result)=>{console.log(`Phần tử ${3} tìm thấy ở vị trí ${result}`);
    })
    .catch((error)=>{console.log(error);
    })
findElement([1, 2, 3, 4, 5], 6)
    .then ((result)=>{console.log(result);
    })
    .catch((error)=>{console.log(`${error}`);
     ;
    })