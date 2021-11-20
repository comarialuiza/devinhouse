class User {
    #name
    #email
    #password
    #admin

    constructor(name, email, password) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
        
        this.setAdmin();
    }

    get admin() {
        return this.#admin;
    }

    setAdmin() {
        this.#admin = false;

        if (this instanceof Admin) {
            this.#admin = true;
        }
    }

    isAdmin() {
        if (this.#admin) {
            return 'Você é administrador.';
        } else if (this.#admin === false) {
            return 'Você não é administrador.';
        }
        
        return 'Não sei o que você é.';
    }
}

class Admin extends User {
    constructor(name, email, password) {
        super(name, email, password);
    }
}

const user = new User('Tony Stark', 'tony@stark.com', '1234');
console.log(user.isAdmin());

const admin = new Admin('Bucky Barnes', 'bucky@barnes.com', '4321');
console.log(admin.isAdmin());
