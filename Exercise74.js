var arr = [1,2,3,4,5,6,7];
console.log("Array before changing: "+arr);
var largest = Math.max(arr[0],arr[arr.length-1]);
for(var i=0;i<arr.length;i++){
    arr[i] = largest;
}
console.log("Largest:"+ largest);
console.log("Array after changing: "+arr);