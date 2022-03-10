console.log('=-=-=-=-= Linked List =-=-=-=-=')
const LinkedList = require('./Linked-list.js')
const linkedList = new LinkedList()

linkedList.push(15)
linkedList.push(10)
linkedList.push(16)
linkedList.push(1)
linkedList.insertAt(999, 0)     


//console.log(linkedList.indexOf(16))
//console.log(linkedList.removeAt(1))
linkedList.printar()

console.log('=-=-=-=doubly=-=-=-=')
const DoublyLinkedList = require('./Doubly-linked-list.js')
const dll = new DoublyLinkedList()
dll.push(5)
dll.push(9)
dll.push(48)
dll.insertAt(20,3)
dll.insertAt(88,2)
//console.log(dll.insertAt(5,1))
dll.printar()
//console.log(dll.size())
//console.log(dll.getElementAt(4).element)
console.log(dll.remove(20))
dll.printar()

console.log('=-=-=-=sorted=-=-=-=')

const SortedLinkeList = require('./Sorted-linked-list');
const sll = new SortedLinkeList()
sll.insert(6)
sll.insert(9)
sll.insert(3)
sll.insert(2)
sll.insert(1)
console.log(sll.indexOf(9))
sll.printar()


class linkedStack{
    #stack = new DoublyLinkedList()

    push(element){
        this.#stack.push(element)
    }

    pop(){
        if (this.#stack.size()-1 >= 0){
            return this.#stack.removeAt(this.#stack.size()-1)
        }
    }

    size(){
        return this.#stack.size();
    }

    isEmpty(){
        return this.#stack.isEmpty();
    }

    peek(){
        return this.#stack.getTail();
    }

    printar(){
        this.#stack.printar()
    }
}

console.log('=-=-=pilha-=-=-')
const pilha = new linkedStack()

pilha.push(6)
pilha.push(5)
pilha.push(9)
console.log(pilha.pop())
console.log(pilha.pop())
console.log(pilha.pop())


pilha.printar()