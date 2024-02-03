class ListNode {
    value: any
    next: ListNode | null  

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null
    tail: ListNode | null

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToBack(value: any): void {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    traverse(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.addToBack(1);
list.addToBack(2);
list.addToBack(3);

list.traverse();