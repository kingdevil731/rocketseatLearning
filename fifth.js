//5
//rest
// r1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
//r2
function soma(...params) {
    //return params.reduce(function(x, y) { return x + y });
    // clean to arrow Function
    return params.reduce((x, y) => x + y);

}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
//Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: "Gabriel" };
const usuario3 = {...usuario, cidade: "Lontras" };
console.log(usuario2);
console.log(usuario3);