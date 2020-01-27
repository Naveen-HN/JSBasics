const a = () => new Promise(resolve => {
    setTimeout(() => resolve("This is A"),1500);
});

const b = () => new Promise(resolve => {
    setTimeout(() => resolve("This is B"),500);
});

const c = () => new Promise(res => {
    setTimeout(() => res("This is C"),2500);
});


Promise.all( [ a(), b(), c(), { key: 'Success! Everything completed'}])
.then((data) => {
    console.log("Starting ", data);
})
.catch((err)=> {
    console.log("SOrry! ", err);
});