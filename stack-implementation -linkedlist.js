class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.length===0){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }   
        this.length++;
    }

    pop(){
        if(!this.top){
            return null;
        }else{
            const value = this.top.value;
            this.top = this.top.next;
            this.length--;
            return value;
        }
    }

    peek(){
        return this.top ? this.top.value : null ;
    }

    isEmpty(){
        return this.length===0;
    }
}

let stk = new Stack();
console.log(stk.isEmpty());
stk.push(1);
stk.push(2);
stk.push(3);
console.log(stk.peek());
console.log(stk.pop());
