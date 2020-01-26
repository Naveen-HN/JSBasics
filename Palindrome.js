function palindrome(str){

let rever = str.split('').reverse().join('');
//console.log(new_str);
if(str==rever){
    return true;
}
else
{
    return false;
}
}

console.log(palindrome('HANAH'));

