class Book {
    #title
    #author
    #year
    #loaned

    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#loaned = false;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get year() {
        return this.#year;
    }

    get loaned() {
        return this.#loaned;
    }

    loanBook() {
        if (this.#loaned === true) {
            return 'Esse livro já está emprestado';
        } else {
            this.#loaned = true;
            return 'Livro emprestado';
        }
    }

    returnBook() {
        if (this.#loaned === false) {
            return 'Esse livro não está emprestado';
        } else {
            this.#loaned = false;
            return 'Livro devolvido';
        }
    }

    toJSON() {
        return {
            title: this.title,
            author: this.author,
            year: this.year,
            loaned: this.loaned
        }
    }

    static sortBookByDate(booksArray) {
        const sortedBooksArray = booksArray.sort((book1, book2) => {
            if (book1.year !== book2.year) return book1.year - book2.year;
        });

        return sortedBooksArray.map(arr => arr.toJSON());
    }
}

class HQ extends Book {
    #illustrator

    constructor(title, author, year, illustrator) {
        super(title, author, year);
        this.#illustrator = illustrator;
    }

    get illustrator() {
        return this.#illustrator;
    }

    toJSON() {
        return {
            title: this.title,
            author: this.author,
            year: this.year,
            loaned: this.loaned,
            illustrator: this.illustrator
        }
    }
}

const twilight = new Book('Twilight', 'Stephenie Meyer', 2005);
const lordOfTheRings = new Book('Lord of the Rings', 'J.R.R. Tolkien', 1954);
const harryPotter = new Book('Harry Potter and the Philosopher\'s stone', 'J.K. Rowking', 1997);

console.log(twilight.toJSON());

const booksArray = [twilight, lordOfTheRings, harryPotter];
// console.log(Book.sortBookByDate(booksArray));

const umbrellaAcademy = new HQ('Umbrella Academy', 'Gerard Way', 2008, 'Gabriel Bá');
const scottPilgrim = new HQ('Scott Pilgrim vs. the World', 'Lee O Maley', 2004, 'Lee O Maleu');
const watchmen = new HQ('Watchmen', 'Alan Moore', 1986, 'Dave Gibbons');

const hqArray = [umbrellaAcademy, scottPilgrim, watchmen];

const multiArray = [twilight, lordOfTheRings, harryPotter, umbrellaAcademy, scottPilgrim, watchmen];
// console.log(Book.sortBookByDate(multiArray));
// console.log(HQ.sortBookByDate(multiArray));

// console.log(HQ.sortBookByDate(hqArray));

// console.log(twilight.toJSON());
// console.log(umbrellaAcademy.toJSON());

// twilight.title = 'New Moon';
// console.log(twilight.toJSON());
