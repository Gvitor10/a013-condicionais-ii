const num = Number(prompt('Escolha um numero e o digite aqui!'));

// If's alternados

if ((num % 2) === 0){
    if ((num % 3 === 0)){
        console.log('Este numero é divisivel por 2 ou 3');
    } else {
        console.log('Este numero nao é divisivel por 2 ou 3');
    }
} else {
    console.log('Este numero nao é divisivel por 2 ou 3')
}

// Operador lógico

if ((num % 2) === 0  && (num % 3) === 0){
    console.log('Este numero é divisivel por 2 ou 3');
} else {
    console.log('Este numero nao é divisivel por 2 ou 3');
}