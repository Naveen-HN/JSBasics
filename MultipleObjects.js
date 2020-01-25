function Book(title, author, year){
    this.title=title;
    this.author=author;
    this.year=year;
}

const book1 = new Book('The Alchemist','Paulo Coelho','1988');
console.log(book1.author);
console.log(book1 instanceof Book);