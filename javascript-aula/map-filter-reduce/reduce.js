function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    }, 0);
}

const meuArray = [1,2,3, 4, 5];

console.log(somaNumeros(meuArray));

function retiraDoSaldo(arr, saldo) {
    return arr.reduce(function(prev, current) {
        return prev - current;
    }, saldo);
}

console.log(retiraDoSaldo(meuArray, 20));