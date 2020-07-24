//3
// 3.1
const arr = [1, 2, 3, 4, 5];
const arrN = arr.map(item => item + 10);
console.log("3.1 + 10", arrN);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const monstrarIdade = () => usuario.idade;
console.log("3.2 mostraIdade", monstrarIdade(usuario));

// 3.3
const nome = "Diego";
const idade = 23;
const mostrarUsuario = (nome = 'Diego', idade = 18) => `${nome}, ${idade}`;
console.log("3.3 nome e usuario", mostrarUsuario(nome, idade));
console.log("3.3 nome apenas", mostrarUsuario(nome));
// 3.4
const promise = () => new Promise(function(resolve, reject) {
    return resolve;
});