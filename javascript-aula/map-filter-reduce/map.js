const maca = 
{
    value: 2,
}

const laranja = 
{
    value: 3,
}


function mapComThis(arr, thisArg)
{
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

function mapSemThis(arr)
{
    return arr.map(function(item){
        return item * 2;
    });
}

const numeros = [1,2,3,4,5,6];

console.log("maca:    ", mapComThis(numeros, maca));

console.log("laranja: ", mapComThis(numeros, laranja));

console.log("semTHIS: ", mapSemThis(numeros));