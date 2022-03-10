console.log('=-=-=-=-= pilha (stack) =-=-=-=-==-')

const StackArray = require('./Stack-array.js');
const stackArray = new StackArray()
const Stack = require('./Stack-private.js')
const stack = new Stack()
/*
console.log(stackArray.isEmpty())
stackArray.push(5)
stackArray.push(8)
console.log(stackArray.peek())
stackArray.push(11)
console.log(stackArray.size())
console.log(stackArray.isEmpty())
stackArray.push(15)
console.log(stackArray.pop());
console.log(stackArray.pop());




stack.push(2)
stack.push(6)
console.log(stack.toString())
console.log(stack.pop())
console.log(stack.toString())
console.log(stack.peek())
stack.push(10)
console.log(stack.toString())
*/

const decimalToBinary = (decNumber)=>{
    while (decNumber >= 1){
        stack.push(Math.floor(decNumber%2))
        decNumber = Math.floor(decNumber/2) ;
        //console.log(stack.toString() +'   ' +decNumber)
    }
    let resultString = ''
    //console.log(stack.size())
    while (stack.size() > 0){
        resultString += stack.pop()
    }
    return resultString
}

console.log('233: ' + decimalToBinary(233))
console.log('10: ' + decimalToBinary(10))
console.log('1000: ' + decimalToBinary(1000))

const baseConverter = (decNumber, base)=>{
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber;
    let rem;
    let baseString = ''

    if (!(base >= 2 && base <=36)){
        return ''
    }

    while (number > 0){
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number/base);
    }

    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }

    return baseString
}


console.log(baseConverter(100345,8))
console.log(baseConverter(100345,16))
console.log(baseConverter(100345,35))