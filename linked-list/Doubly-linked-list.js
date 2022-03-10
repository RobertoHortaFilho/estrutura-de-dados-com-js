const { defaultEquals } = require('../util.js');
const LinkedList = require('./Linked-list.js')
module.exports = class DoublyLinkedList extends LinkedList{
    #tail = undefined
    #count = 0
    #head = undefined
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
    }

    push(element){  //add tail
        const node = new DoublyNode(element)
        if (this.#head == null){
            this.#head = node;
            this.#tail = node;
        }else{
            let current = this.#tail
            current.next = node;
            node.prev = current;
            this.#tail = node;
        }
        this.#count += 1;
    }

    insertAt(element, index){   //add index
        if (index >= 0 && index <= this.#count){
            const node = new DoublyNode(element)
            let current = this.#head;
            if (index === 0){
                if (this.#head == null){
                    this.head = node;
                    this.#tail = node;
                }else{
                    node.next = this.#head;
                    current.prev = node
                    this.#head = node;
                }
            }else if (index === this.#count){
                current = this.#tail;
                current.next = node;
                node.prev = current;
                this.#tail = node;
            }else{
                const previous = this.getElementAt(index -1);
                current = previous.next;
                
                node.next = current;
                previous.next = node;
                
                node.prev = previous;
                current.prev = node;
            }
            this.#count ++;
            return true;
        }
        return false;
    }

    removeAt(index){
        if (this.isEmpty()){
            return undefined;
        }
        if (index >=0 && index < this.#count){
            let current = this.#head
            if (index === 0){
                this.#head = current.next
                if (this.#count === 1){
                    this.#tail = undefined;
                }else{
                    this.#head.prev = undefined;
                }
            }else if(index === this.#count -1){
                current = this.#tail;
                this.#tail = current.prev;
                if (!(this.#tail == undefined)){     
                    this.#tail.next = undefined ;
                }
            }else{
                current = this.getElementAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.count --;
            return current.element
        }
        return undefined
    }


    getElementAt(index){    //get element for index
        if (index >= 0 && index <= this.#count){
            if (index === 0){
                //console.log(`index = ${index}`)
                return this.#head;
            }
            let current = this.#head.next
            for(let i = 1; i< index && current.next != null; i++){
                current = current.next
               // console.log(`posiçao ${i} :  ${current.element}`)
            }
            return current
        }
        return undefined
    }

    indexOf(element){
        let current = this.#head
        for (let i= 0; i < this.#count && current != null; i++){
            if(this.equalsFn(current.element, element)){
                return i
            }
            current = current.next
        }
        return -1
    }
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index) 
    }
    
    getHead(){
        return this.#head;
    }

    getTail(){
        return this.#tail;
    }

    size(){
        return this.#count;
    }

    isEmpty(){
        return this.#count === 0
    }

    printar(){
        if (this.isEmpty()){
            console.log( '')
        }
        let str = ''
        let current = this.#head
        for(let i = 0; i< this.#count && current != null; i++){
            str = `${str}${current.element} `
            current = current.next;
        }

        
        console.log(str)
    }
}












class Node{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}

class DoublyNode extends Node{
    constructor(element,next,prev){
        super(element,next)
        this.prev = prev
    }
}
