console.log('=-=-=-=-=-Array=-=-=-=-=-')

let newArr = new Array()
let newarr2 = new Array(7)
let newArr3 = new Array('monday', 'tuesday...')
//em js nao usamos a palavra new e declaramos apenas com 

let array = [];
let array2 = [0,1,2,3,4,5,6]

array2.push(7,8)        //add no final aceita mais de 1 parametro

Array.prototype.insertFirstPosition = function(value) { //criando a funçao para adicionar na pos [0]
    for(let i = this.length ; i >= 0 ;i--){
        this[i] = this[i-1]
    }
    this[0] = value
}
array2.insertFirstPosition(-1)
array2.unshift(-4,-3,-2) //adiciona no inicio a logica é a msm da funçao criada (aceita varios parametros)

array2.pop() //remove no final do array

Array.prototype.removeFirstPosition = function (){ //criando a funçao para remover na pos [0]
    for(let i = 0; i < this.length-1; i++){
        this[i] = this[i+1]
    }
    this.pop()
    
}
array2.removeFirstPosition()

array2.shift() //remove no inicio do array

array2.splice(2,3) //remove a partir da pos [2] 3 elementos

array2.splice(2,0,   0,1,2) //a partir do indice 2 vai remover 0 elementos depois vai adiconar os demais parametros no array

console.log(array2)

let matriz = [[0,1,2,3,4],[5,6,7,8,9]]

const showMatriz = (matriz)=>{
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            console.log(matriz[i][j]) //pode iterar sobre todos os elementos da Matriz
        }
    }
}
//showMatriz(matriz)
console.table(matriz)

//Matrix multidimensional

let matrix3x3x3 = []

for(let i = 0; i < 3;i++){
    matrix3x3x3[i] = []
    for(let j = 0; j< 3;j++){
        matrix3x3x3[i][j] = []
        for(let k = 0;k < 3; k++){
            matrix3x3x3[i][j][k] = i+j+k
        }
    }
}

console.table(matrix3x3x3)

//  Array functions

const zero = 0
const positiveNumbers = [1,2,3,4,5]
const negativenumbers = [-3,-2,-1]

let numbers = negativenumbers.concat(zero,positiveNumbers)
//console.log(numbers)

let numerosSomados = numbers.reduce((previous, current) => {return previous + current})
console.log(numerosSomados)

//      @@iterators

let aEntries = numbers.entries()
for (let i of aEntries){
    //console.log(i) // iterar sobre chave valor; devolve um array com [chave, valor]
}

for (let i of numbers.keys()){
    //console.log(i) //itera sobre todas as chaves 
}

for (let i of numbers.values()){
    //console.log(i) //itera sobre todos os valores
}

let newNumbersPares = Array.from(numbers, (val) => val%2===0) //cria um novo array a partir de um array;
// segundo argumento pode ser uma funçao de callback para mapear quais valores vaio ser copiados
console.log(newNumbersPares)