class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.loaned = false;
    }

    loanBook() {
        if (this.loaned === true) {
            return 'Esse livro já está emprestado';
        } else {
            this.loaned = true;
            return 'Livro emprestado';
        }
    }

    returnBook() {
        if (this.loaned === false) {
            return 'Esse livro não está emprestado';
        } else {
            this.loaned = false;
            return 'Livro devolvido';
        }
    }

    static sortBookByDate(booksArray) {
        const sortedBooksArray = booksArray.sort((book1, book2) => {
            if (book1.year !== book2.year) return book1.year - book2.year;
        });

        return sortedBooksArray;
    }
}

const twilight = new Book('Twilight', 'Stephenie Meyer', 2005);
const lordOfTheRings = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1954);
const lordOfTheRings2 = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1954);
const harryPotter = new Book('Harry Potter and the Philosopher\'s stone', 'J.K. Rowking', 1997);

const booksArray = [twilight, lordOfTheRings, harryPotter, lordOfTheRings2];
// console.log(Book.sortBookByDate(booksArray));

console.log(twilight instanceof Book);
console.log({ title: 'Livro1', author: 'Autor', year: 1950, loaned: false } instanceof Book);