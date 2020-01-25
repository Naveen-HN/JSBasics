const Book = {
    summary: function(){
         console.log(`${this.title} is written by ${this.author}`);
    }
}
const book1 = Object.create(Book);
book1.author = 'JK Rowling';
book1.title = 'Harry Potter';
book1.summary();



