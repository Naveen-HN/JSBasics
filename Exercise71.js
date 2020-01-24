var arr = [8,2,3,4];
function check_arr(a){
    if(a.length>1){
        if(a[0]==1||a[a.length]==1){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        console.log("Array length less than 1");
    }
}
console.log(check_arr(arr));