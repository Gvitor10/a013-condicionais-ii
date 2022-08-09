//código a ser reescrito

const nome = prompt('Qual o seu nome?');
const idade = Number(prompt('Digite aqui a sua idade!'));

/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/
// Reescrevendo o codigo

// a-
console.log(nome === 'jose' ? 'Oi, Zé!' : 'Olá, ' + nome);

// b-
console.log(idade >= 18 ? 'Pode tirar carteira de motorista!' : 'Ainda nao pode tirar a carteira de motorista');