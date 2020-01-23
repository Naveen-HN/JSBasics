var city = "Los Angeles";
function city_check(c){
    if((c.substring(0,3)=='Los')||(c.substring(0,3)=='New')){
        return c;
    }
    else{
        return null;
    }
}
console.log("City name is: "+city_check(city));