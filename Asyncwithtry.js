const a = () => new Promise(resolve => {
    setTimeout(() => 
        resolve("this is A"),1500);
});

const b = () => new Promise(resolve => {
    setTimeout(() => resolve("This is B"),1244);
});

const c = () => new Promise((resolve,reject) => {
    setTimeout(() => reject("C is crashed"),500);
});

const obj = async() => {
    try{
    let resultA = await a();
    let resultB = await b();
    let resultC = await c();

    return [resultA,resultB,resultC];}
    catch(error){
        return [null,null,null];
    }
};

obj().then((result) => {
    console.log("Success!",result);
})
.catch((err) => {
    console.log("This is error!",err);
});