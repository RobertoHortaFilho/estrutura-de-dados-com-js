const { defaultEquals } = require('../util.js');
//const { Node } = require('./models/linked-list-models');
module.exports = class LinkedList{
    #count = 0;
    #head = undefined;
    constructor(equalsFn = defaultEquals){
        this.equalsFn = equalsFn;
    }

    push(element){
        const node = new Node(element);
        let current;
        if (this.#head == null){
            this.#head = node;
        }else{
            current = this.#head
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.#count ++;
    }

    removeAt(index){
        if (index >= 0 && index <= this.#count){
            let current = this.#head
            if (index === 0){    
                this.#head = current.next;
            }else{
                const previous = this.getElementAt(index-1 )
                current = previous.next;
                if (current == undefined){
                    return undefined
                }
                previous.next = current.next;
            }
            this.#count--;
            return current.element
        }
        return undefined
    }

    insertAt(element,index){
        if (index >=0 && index <= this.#count){
            const node = new Node(element)
            if (index === 0){   //first index
                const current = this.#head
                node.next = current;
                this.#head = node;
            }else{
                const previous = this.getElementAt(index-1)
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    indexOf(element){
        let current = this.#head;
        for(let i =0; i< this.#count && current!= null; i++){
            if (this.equalsFn(element, current.element)){
                return i
            }
            current = current.next;
        }
        return -1
    }


    getElementAt(index){
        if (index >=0 && index <=this.#count){
            let node = this.#head
            for (let i = 0; i < index && node!=null;i++){
                node = node.next
            }
            return node
        }
        return undefined
    }

    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    size(){
        return this.#count
    }

    isEmpty(){
        return this.size() === 0
    }

    getHead(){
        return this.#head;
    }

    toString(){
        if(this.#head == null){
            return ''
        }
        let str = `${this.#head.element} `
        let current = this.#head.next;
        for (let i = 1; i < this.size() && current != null; i++){
            str = `${srt}${current.element}`
            current = current.next;
        }
        return str
    }
    printar(){
        let str = ``
        let current = this.#head;
        while(current != null){
            str = `${str}${current.element} `
            current = current.next
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
