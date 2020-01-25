var string = "JavaScript";
var string1 = "Java";
function check(str){
    if(str.substring(4,10)=='Script'){
        new_str = str.substring(0,4);//+str.substring(10,str.length);
        return new_str;
    }   
    else{
        return str;
    }
}
console.log(check(string));
console.log(check(string1));