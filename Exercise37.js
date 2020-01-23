var string = 'JAVASCRIPT';
if(string.length>3){
    var new_str = string.substring(0,3);
    console.log(new_str.toLowerCase()+string.substring(3,string.length));
}
else{
    console.log(string.toUpperCase());
}