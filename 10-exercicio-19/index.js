const Author = require('./Author');
const john = new Author('John Doe')
const post = john.writePost('Título do post', 'Lorem ipsum dolor sic...')
post.addComment('Ciclano', 'fine')
post.addComment('Fulano', 'outra coisa')

console.log(john)
console.log(post)