class DoublyListNode {
  value: any
  next: DoublyListNode | null
  prev: DoublyListNode | null

    constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
    }
  }
  
  class DoublyLinkedList {
    head: DoublyListNode
    tail: DoublyListNode

    constructor() {
      this.head = null
      this.tail = null
    }
  
    addToBack(value: any): void {
      const prevNode = this.tail
      const newNode = new DoublyListNode(value)
        
      if(this.head === null) {
        this.head = newNode
        this.tail = newNode
        return;
      } 
  
      this.tail.next = newNode
      newNode.prev = prevNode
      this.tail = newNode
    }
  
    addToFront(value: any): void {
      const head = this.head
      const newNode = new DoublyListNode(value)
        
      head.prev = newNode
      this.head = newNode
      this.head.next = head
    }
  
    insertAt(data: any, position: number): void {
      if(position === 1) {
        this.addToFront(data)
        return;
      }
  
      const newNode = new DoublyListNode(data)
        
      let head = this.head
      let next = head.next
      let count = 2
  
      while(count < position) {
        next = next.next
        count++
      }
  
      next.prev = newNode
      newNode.next = next
    }
  
    removeFromFront(): void {
      const next = this.head.next 
      this.head = next
      this.head.prev = null
    }
  
    removeFromBack(): void {
      const secondLastNode = this.tail.prev
      secondLastNode.next = null
      this.tail = secondLastNode
    }
  
    printLinkedList(): void {
      let head = this.head
  
      while(head) {
        console.log(head.value)
        head = head.next
      }
    }
  }
  
  const linkedList = new DoublyLinkedList()
  linkedList.addToBack(1)
  linkedList.addToBack(2)
  linkedList.addToBack(3)
  linkedList.addToBack(4)
  linkedList.addToBack(5)
  linkedList.addToFront(0)
  linkedList.addToFront(-1)
  linkedList.insertAt(0.5, 1)
  linkedList.insertAt(0.4, 1)
  linkedList.removeFromFront()
  linkedList.removeFromBack()
  linkedList.printLinkedList()

  export default DoublyLinkedList