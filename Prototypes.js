var Person = function(name, yearofBirth, occupation){
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.occupation = occupation;
}

Person.prototype.calculateAge = function(){
    console.log(2020-this.yearofBirth);
}

var John = new Person('John',1987,'Mechanic');
var Jane = new Person('Jane',1995,'Teacher');

//console.log(John.yearofBirth);
John.calculateAge();