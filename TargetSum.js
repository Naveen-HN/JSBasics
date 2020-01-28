let arr = [4,5,12,-2,8,9];
const target = 17;
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j]==target){
       console.log([arr[i],arr[j]]);
    }
}
}