const { defaultEquals } = require('../util.js');
module.exports = class SortedLinkeList{
    #count = 0
    #head = undefined;
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare){
        this.equalsFn = equalsFn;
        this.compareFn = compareFn;
    }

    
    removeAt(index){
        if(this.isEmpty()){
            return undefined;
        }
        let prev = this.#head;

        for (let i =0; i< index -1 && prev.next != undefined;i++){
            prev = prev.next
        }

        let current = prev.next
        prev.next = current === undefined ? undefined : current.next;

        this.#count --
        return current;
        
    }

    indexOf(element){
        if(this.isEmpty()){
            return -1;
        }
        let current = this.#head;
        for(let i = 0; i< this.#count && current!= undefined; i++){
            if(current.element === element){
                return i
            }
            current = current.next
        }
        return -1
    }

    getElementAt(index){
        if(this.isEmpty()){
            return undefined;
        }
        let current = this.#head
        for(let i =0; i < index && current != undefined; i++){
            current = current.next;
        }
        return current.element;
    }

    remove(element){
        const index = this.indexOf(element)
        if (index == -1){
           return undefined 
        }
        return this.removeAt(index)
    }

    getHead(){
        return this.#head;
    }

    insert(element, index = 0){
        if (this.isEmpty()){
            const node = new Node(element)
            this.#head = node;
            this.#count ++
            return true;
        }
        const pos = this.getIndexNextSortedElement(element)
        console.log(pos)
        return this.insertAt(element,pos)
    }

    insertAt(element,pos){
        const node = new Node(element)
        if (pos === 0){
            let current = this.#head;
            node.next = current;
            this.#head = node;
        }
        let current = this.#head;
        for(let i = 1; i<pos && current.next != undefined;i++){
            current = current.next;
        }
        const next = current.next;
        current.next = node;
        node.next = next;

        this.#count ++
    }

    getIndexNextSortedElement(element){
        let current = this.#head;
        let i = 0;
        for(;i < this.size() && current != null; i++){
            const comp = this.compareFn(element, current.element)
            if (comp === compare.BIGGER_THAN){
                console.log(element + '- ' + current.element+'--'+i )
                return i;
                
            }
            current = current.next;
        }
        return i;
    }




    isEmpty(){
        return this.#count === 0
    }

    size(){
        return this.#count
    }

    toString(){
        if (this.isEmpty()){
            return ''
        }
        
        let txt = '';
        let current = this.#head;
        
        for(let i = 0; i < this.#count; i++){
            txt = `${txt}${current.element} `
            current = current.next;
        }
        return txt;
    }
    printar(){
        console.log(this.toString())
    }

}




const compare = {
    LESS_THAN : -1,
    BIGGER_THAN : 1
}

function defaultCompare(a,b){
    if (a === b){
        return 0
    }
    return a > b ? compare.LESS_THAN: compare.BIGGER_THAN;
}

class Node {
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}