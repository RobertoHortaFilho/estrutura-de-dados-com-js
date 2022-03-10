console.log('=-=-=-=-= Fila queue =-=-=-=-=')
const Queue = require('./Queue');

const queue = new Queue();

console.log(queue.isEmpty())
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(9)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(88)
console.log(queue.toString())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.peek() +' peek')
console.log(queue.toString())
console.log(queue.size())
queue.clear()
console.log(queue.toString())

// =-=-=-=-=-==-=-=-=-=-
console.log('deuque')
const Deque = require('./Deque.js')
const deque = new Deque();
deque.addBack(2)
deque.addBack(4)
deque.addBack(8)
deque.addBack(16)
deque.addFront(999)
deque.addFront(888)
console.log(deque.peekFront()+ ' front')
console.log(deque.peekBack()+ ' back')
deque.removeFront()
deque.removeBack()


console.log(deque.size())
deque.toString()


console.log('=-=-= hot Potato =-=-=')
function hotPotato(elementList, num){
    var queue = new Queue()
    const eliminetedList = [];

    for (let i=0; i<elementList.length; i ++){
        queue.enqueue(elementList[i]); //colocando todos na queue
    }
    while(queue.size() > 1){
        for (let i=0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminetedList.push(queue.dequeue())
    }

    return {
        elimineted: eliminetedList,
        winner: queue.dequeue()
    }
}

const names = ['roberto', 'joao','luana','isabela','jhonata','lucas','rodrigo']
const result = hotPotato(names,4)
result.elimineted.forEach( name => console.log(`${name} was elimineted from the potatoGame`))
console.log(result.winner+ ' vencedor')

console.log('=-=-=palindrome Checker=-=-=-=')

function palindromeChecker(aString){
    if (aString === undefined || 
        aString === null || 
        (aString !== null && aString.length === 0)){
            return false
        }
    const deque = new Deque()
    const lowerString = aString.toLowerCase().split(' ').join('')
    let isEqual = true;
    let firstChar, lastChar;
    for(let i = 0; i < lowerString.length; i++){
        deque.addBack(lowerString.charAt(i))
    }

    while (deque.size() > 1 && isEqual){
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        //console.log(`${firstChar} + ${lastChar}`)
        if (firstChar !== lastChar){
            isEqual = false
        }
    }

    return isEqual
}


console.log(palindromeChecker('a') + ': a')
console.log(palindromeChecker('kayak') + ': kayak')
console.log(palindromeChecker('arara') + ': arara')
console.log(palindromeChecker('Was it a car or a cat I saw') + ': Was it a car or a cat I saw')
