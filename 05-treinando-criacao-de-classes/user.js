class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password 
    }
    login(email, password) {
        if (this.email === email && this.password === password){
            console.log('Login bem sucedido')
        } else {
            console.log('Email ou senha incorretos. Tentativa de login falhou.')
        }
    }
}

const user = new User('Lucca C. Lopes', 'lucca.lcl26@gmail.com', 'senha123')

user.login('lucca.lcl26@gmail.com', 'senha123')
