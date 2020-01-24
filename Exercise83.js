var arr = ['Hello','my','is','Naveen'];
var largest=0;
var str;
for(var i=0;i<arr.length;i++){
    if(arr[i].length>largest){
        largest=arr[i].length;
        var str=arr[i];
    }
    console.log("Longest string in the array is: "+str);
}
for(var j=0;j<arr.length;j++){
    if(arr[j].length==largest){
        console.log("Longest string in the array is: "+arr[j]);
    }
} 