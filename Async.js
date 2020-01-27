const a = () => new Promise(resolve => {
    setTimeout(()=> resolve("This is A"),1500);
});

const b = () => new Promise(resolve => {
    setTimeout(() => resolve("This is B"),500);
});

const c = () => new Promise(resolve => {
    setTimeout(() => resolve("This is C"),1345);
});

const Obj = async() => {
    let resultA = await a();
    let resultB = await b();
    let resultC = await c();

    return [resultA,resultB,resultC];
};

Obj()
.then((resolve) => {
    console.log("Success!!", resolve);
})
.catch((err) => {
    console.log("SOmething's not right", err);
});