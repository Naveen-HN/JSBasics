var str = "Naveen";
function string_act(a,n){
    if(a.length>=n){
        var new_str = a.substring(0,n) + a.substring(a.length-n,a.length);
        return new_str;
    }
    else{
        return null;
    }
}
console.log(string_act(str,2));