console.log('=-=-=-=-destructuring-=-=-=-=-=')
const person = {
    name:{
        first:'roberto',
        middle:'alessandro',
        last:'filho'},
    age:22,
    rg:123456789,
    cpf:12345872256,
}

let swap1 = 2;
let swap2 = 4; //<--- ponto e virgula obrigatorio nesse caso
[swap1, swap2] = [swap2, swap1] 
console.log(swap1 + "<>" + swap2)

const {name : nome, rg:id} = person

const idadeKey = 'age'
const {[idadeKey] : idade } = person // usar [colchetes] para usar o valor de uma variavel

const {first : firstName, last : lastName} = nome


console.log(firstName + " " + lastName)
console.log(idade)
console.log(id)

