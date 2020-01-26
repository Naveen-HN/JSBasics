let book1 = function(){
    book1.prototype.summary = function(){
        console.log("This is book1");
    }
}

let book2 = function(){
    book2.prototype.summary = Object.create(book1);
    book2.prototype.summary = function(){
        console.log("This is book2");
    }
}

let book3 = function(){
    book3.prototype.summary = Object.create(book2);
    book3.prototype.summary = function(){
        console.log("This is book3");
    }
}

let books = [new book1(), new book2(), new book3()];
books.forEach(function(books){
    books.summary();
})