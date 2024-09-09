let idade = 21;
let genero = "feminino";
let condicao = idade >= 18 && genero != "masculino";

//condição ternária
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

if (idade > 18) {
  console.log("Maior de idade");
} else if (idade == 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

let imposto = "SIMPLES_NACIONAL";

switch (imposto) {
  case "SIMPLES_NACIONAL":
    console.log("Imposto 44");
    break;
  case "IRRF":
    console.log("Imposto 16");
    break;
  default:
    console.log("Nenhum imposto encontrado");
    break;
}
