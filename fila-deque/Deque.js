module.exports = class Deque{
    #items = {};
    #count = 0;
    #lowestCount = 0

    addBack(element){
        this.#items[this.#count] = element;
        this.#count++;
    }
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element)
        }else{
            this.#lowestCount--;
            this.#items[this.#lowestCount] = element; 
        }

    }

    removeBack(){
        if (this.isEmpty()){
            return undefined
        }
        this.#count--;
        let temp = this.#items[this.#count]
        delete this.#items[this.#count]
        return temp;
    }
    
    removeFront(){
        if (this.isEmpty()){
            return undefined
        }
        let temp = this.#items[this.#lowestCount]
        delete this.#items[this.#lowestCount]
        this.#lowestCount++;
        return temp;
    }

    peekBack(){
        if (this.isEmpty()){
            return undefined;
        } 
        return this.#items[this.#count-1]
    }

    peekFront(){
        if (this.isEmpty()){
            return undefined
        }
        return this.#items[this.#lowestCount]
    }

    isEmpty(){
        return (this.#count - this.#lowestCount === 0);
    }

    size(){
        if (this.#lowestCount<0){
            return this.#count + Math.abs(this.#lowestCount)
        }
        return this.#count - this.#lowestCount;
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let temp = ''
        for(let i = this.#lowestCount; i < this.#count; i ++){
            temp = `${temp}${this.#items[i]} `
        }
        //esta printando para testes
        console.log(temp)
        return(temp)

    }

    clear(){
        this.#items = {};
        this.#count = 0;
        this.#lowestCount = 0;
    }
}