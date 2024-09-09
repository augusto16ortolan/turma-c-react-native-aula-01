x = 10.5;
y = 5;
console.log(typeof x);
x = "Augusto";
console.log(typeof x);
console.log(typeof true);

pessoa = {
  nome: "Augusto",
  idade: 23,
};

lista = [1, 2, 3, 4, 5];

console.log(Array.isArray(lista));

console.log(typeof pessoa);

//const é utilizado para variáveis imutáveis, que não mudam de valor durante o código
const BASE_URL = "localhost:8080";
console.log(BASE_URL);

var numero = 10;
if (numero == 10) {
  var numero = 20;
  console.log("Numero", numero);
}
console.log("Numero", numero);

var nome = "Augusto";
nome = "Eduardo";

console.log(nome);
