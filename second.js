const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const idades = usuarios.map(v => v.idade);
console.log("2.1 idades", idades);
//2.2
const trabRock = usuarios.filter(v => v.empresa === "Rocketseat" && v.idade >= 18);
console.log("2.2 trabalhadores de rockseat e +18", trabRock);
//2.3
const google = usuarios.find(v => v.empresa === "Google");
console.log("2.3 Trabalhador da Google ", google);
//2.4
// change to arrow Function
const idadeCinquenta = usuarios.map(function(v) {
    return {...v, idade: v.idade * 2 }
}).filter(function(v) {
    return v.idade <= 50;
})
console.log("2.4 Idades*2 e <= 50 ", idadeCinquenta);