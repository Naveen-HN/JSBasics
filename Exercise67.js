var str = "Pepperoni";
function check_str(a){
    if((a.charAt(0)=='P')||a.charAt(a.length-1)=='p'){
        var new_str = a.substring(1,a.length-1);
        return new_str;
    }
    else{
        return a;
    }
}
console.log(check_str(str));