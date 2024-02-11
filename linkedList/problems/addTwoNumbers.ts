// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1] 

import linkedList from '../doublyLinkedList'

function addTwoNumbers(l1: linkedList | null, l2: linkedList | null): linkedList | null {
    

    return null
};

const l1 = new linkedList()
l1.addToFront(3)
l1.addToFront(4)
l1.addToFront(2)

const l2 = new linkedList()
l2.addToFront(5)
l2.addToFront(6)
l2.addToFront(4)

addTwoNumbers(l1, l2)