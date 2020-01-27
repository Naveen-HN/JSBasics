//Simplify your codebase with map(), reduce(), and filter() in JavaScript



// 1. Remove Duplicates in an array

const values = [3,3,3,5,5,6,7,7,13,13,67];
const new_values = [...new Set(values)];
console.log(new_values);

//

//A simple search (case-sensitive)

const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

let res = users.filter(id => id.name.includes('Oli'));
console.log("This is case sensitive",res);

// 3. A simple search (case-insensitive)

let res1 = users.filter(id => new RegExp('oli','i').test(id.name));
console.log("This is case insesitive:",res1);

//4. Check if any of the users have admin rights

let admin_rights = users.some(rights => {rights.group=='admin'});
console.log("Does anyone have admin rights?",admin_rights);


// 5. Flattening an array of arrays

let nested = [[1,3,5,7],[2,4,6,8]];
let flat = nested.reduce((acc, i)=> [...acc,...i]).sort();
console.log(flat);

//another method

let flat1 = [].concat.apply([],nested).sort();
console.log(flat1);


//6. Create an object that contains the frequency of the specified key 

const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

let groupbyage = users.reduce((acc,i) => {
    acc[i.age] = acc[i.age]+1||1; return acc;
},{});

console.log("Grouped by age :",groupbyage);


//7. Indexing an array of objects (lookup table)


//let uTable = users.reduce((acc,it) => (acc[it.name] = it,acc),{});

//console.log(uTable);

let listUser = [...new Set(users.map(it => it.group))];

console.log(listUser);


const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const Fahrenheit = celsius.map(t => t*1.8+32);
console.log(Fahrenheit);

console.log(users.map(({id,age,name}) => `\n${id} ${name} ${age}`).join(''));

console.log(JSON.stringify(users,['id','name','age']));

const upDatedUsers = users.map(
    p=> p.id!==47? p: {...p,age:p.age+1});

console.log(upDatedUsers);

