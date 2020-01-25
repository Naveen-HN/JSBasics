var main_array = [1,2,3,4,5];
var result = [0,0];
for(var i=0;i<main_array.length;i++){
    if(i%2){
        result[0]+=main_array[i];}
        else{
            result[1]+=main_array[i];
        }
    }
console.log(result);