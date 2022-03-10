module.exports = class Queue {
    #count = 0;
    #lowestCount = 0;
    #items = {};

    enqueue(item){
        this.#items[this.#count] = item;
        this.#count ++;
        return true;
    }

    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }

        let temp = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount];
        this.#lowestCount ++;
        return temp;
    }

    peek(){
        if (this.isEmpty()){
            return undefined;
        }

        return this.#items[this.#lowestCount]
    }

    isEmpty(){
        return this.#count - this.#lowestCount === 0
    }

    size(){
        return this.#count - this.#lowestCount
    }

    clear(){
        this.#count = 0
        this.#items = {}
        this.#lowestCount = 0
    }

    toString(){
        if (this.isEmpty()){
            return '';
        }
        let temp = ''
        for(let i = this.#lowestCount; i < this.#count; i++){
            temp = `${temp}${this.#items[i]} `
        }
        return temp;
    }
    
}