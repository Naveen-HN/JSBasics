let character = function(name, comics){
    this.name = name;
    this.comics = comics;
}

let superman = new character('superman','DC');
let spiderman = new character('spiderman','Marvel');


let superheroes = {
    'Category' : "Super Hero",
    "characters":[]
}

superheroes.characters.push(superman);
superheroes.characters.push(spiderman);

console.log(superheroes);