var make= "Mclaren";
var model= "720s";
function fullName(){ 
    console.log(this.make+ " " + this.model);
}
var car = {    
    make:"Lamborghini",    
    model:"Huracán",    
    fullName:function () {    
        console.log (this.make + " " + this.model);    
    }}    
car.fullName(); // Lmborghini Huracán    
//window.fullName(); // Mclaren 720S    
fullName(); // Mclaren 720S

var name = 'Naveen';
console.log(this.name);