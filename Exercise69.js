var arr = [1,2,3,4,5,6];
function swap(a){
    var temp;
    for(var i=0;i<=a.length-1;i++){
    switch(a[i]){
    case a[0]: temp = a[a.length-1];
                a[a.length-1] = a[0];
                break;
    case a[a.length-1]: a[a.length-2]=temp;
                break;
    default: a[i-1]=a[i];
            break;
}
}
console.log(temp);
return a;
}
console.log("Array before swapping:"+arr);
console.log("Array after swapping:"+swap(arr));