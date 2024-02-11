class StackNode {
    value: any
    next: StackNode | null

    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class Stack {
    top: StackNode | null
    length: number

    constructor() {
       this.top = null 
       this.length = 0
    }

    push(value: any) {
        const newStackNode = new StackNode(value)
        this.length++

        if(this.top === null) {
            this.top = newStackNode
            return;
        }

        const topNode = this.top

        this.top = newStackNode
        this.top.next = topNode
    }

    pop() {
        const topNode = this.top

        this.top = topNode.next
        this.length--
    }

    isEmpty() {
        this.length === 0
    }
}

const stack = new Stack()
stack.push(3)
stack.push(2)
stack.push(1)
console.log(JSON.stringify(stack))

stack.pop()
// stack.pop()
console.log(JSON.stringify(stack))