var num = 100;
for(var i=1;i<=num;i++){
if(i%2==0 && i%3!=0){
    console.log("Fizz");
}
else if(i%3==0 && i%2!=0){
    console.log("Buzz");
}
else if(i%2 == 0 &&  i%3 == 0){
    console.log("Fizz Buzz");
}
else{
    console.log(i);
}
}
