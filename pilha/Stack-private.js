module.exports = class Stack{

    #count = 0
    #items = {}
    constructor(){
        
    }

    push(element){
        this.#items[this.#count] = element;
        this.#count++;
    }

    isEmpty(){
        return this.#count === 0
    }

    size(){
        return this.#count
    }

    pop(){
        if (this.isEmpty()){
            return undefined
        }
        this.#count --;
        const result = this.#items[this.#count];
        delete this.#items[this.#count]
        return result
    }

    peek(){
        if (this.isEmpty()){
            return undefined
        }
        return this.#items[this.#count-1]
    }

    clear(){
        while(this.isEmpty()){
            this.pop();
        }
    }

    toString(){
        if (this.isEmpty()){
            return ""
        }

        let objString = `${this.#items[0]}`
        for(let i = 1; i < this.#count; i++){
            objString = `${objString}, ${this.#items[i]}`
        }
        return objString;
    }
}