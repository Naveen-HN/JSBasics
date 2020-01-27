const a = () => new Promise(resolve =>
{
    setTimeout(() => resolve("This is A"),1000);
});

const b = () => new Promise(resolve =>
{
    setTimeout(() => resolve("This is B"),1500);
});

const c = () => new Promise(resolve => 
{    
    setTimeout(() => resolve("This is C"),250);
});

Promise.race([a(),b(),c()])
.then((data) => {
    console.log("Starting ",data);
})
.catch((err) => {
    console.log("Oops something went wrong!", err);
});
