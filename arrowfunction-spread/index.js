//arrow function com spread operator
// ...variavel spread operator é usado para passar numero indefinido de parametros 
const soma = (...valores) =>{
    let soma = 0
    for (let value of valores){
        soma += value
    }
    return soma
}

console.log(soma(2,3,5))
console.log(soma(1)) 
console.log(soma(1,4,5,6,7))
console.log(soma(1,3))