const Book = function(author, title, year){
    //private variables
    this.author = author;
    this.title = title;
    this.year = year;

    //public method
    this.title = function(){
        return title;
    }

    //private method
    const summary = function(){
        return `${title} is written by ${author} in ${year}`
    }

    //public mathod which has access to private method
    this.givesummary = function(){
        return summary()
    }
}

const book1 = new Book('JK Rowling','Harry Potter','2000');
console.log(book1.title());
//book1.summary(); Throws an error "book1.summary is not a function"
console.log(book1.givesummary());