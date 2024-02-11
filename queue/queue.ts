class QueueNode {
    data: any
    next: QueueNode

    constructor(value: any) {
        this.data = value
        this.next = null
    }
}

class Queue {
    top: QueueNode | null
    length: number

    constructor() {
        this.top = null
        this.length = 0
    }

    enqueue(value: any) {
        const newQueueNode = new QueueNode(value)
        this.length++

        if(this.top === null) {
            this.top = newQueueNode
            return;
        }
        
        let queueNode = this.top

        while(queueNode.next) {
            queueNode = queueNode.next
        }

        queueNode.next = newQueueNode
    }

    dequeue() {
        let queueNode = this.top

        if(queueNode.next) {
            this.top = queueNode.next
            this.length--
        } else {
            this.top = null
            this.length--
        }
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
// queue.dequeue()

console.log(JSON.stringify(queue), queue.length)