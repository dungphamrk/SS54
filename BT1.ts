
const checkValue = async (weight: any, height: any): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof weight !== 'number' || typeof height !== 'number') {
                reject(new Error("Cân nặng và chiều cao phải là số."));
                return;
            }
            if (isNaN(weight) || isNaN(height)) {
                reject(new Error("Cân nặng và chiều cao không được là NaN."));
                return;
            }
            if (weight <= 0 || height <= 0) {
                reject(new Error("Cân nặng và chiều cao phải lớn hơn 0."));
                return;
            }
            const bmi = weight / (height * height);
            resolve(bmi);
        }, 1000);
    });
};
 const calculateBMI =async (weight:any,height:any)=>{
    try {
        const result = await checkValue(weight, height);
        console.log("BMI:", result);
    } catch (error) {
        console.error("Đã xảy ra lỗi:", (error as Error).message);
    }
};

calculateBMI(70, 1.75)
calculateBMI("70", 1.75)
calculateBMI(70, -1.75)

