// a linked list to find out if there is cycle or not

// Node class to create the linked list nodes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create the linked list with a cycle
let head = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
// console.log(hasCycle(head)); // Output: true

// Happy number
// Question: Write a function to determine if a given number is a Happy number.
// A Happy number is a number that, when repeatedly replaced by the sum of the squares of its digits, eventually reaches 1.
// If it loops endlessly in a cycle that does not include 1, it is not a Happy number.

// example
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

const calculateSquare = (num) =>{

    let result=0
    while(num >10){
       let rem = num%10
       result += rem * rem 
       num = num/10
    }
    return result

}



const isHappy = (num) =>{
    let slow = num 
    let fast = num 

    while(true){
        slow = calculateSquare(slow)
        fast = calculateSquare(calculateSquare(fast))
    
        if (slow === fast) {
            // Cycle found, not a Happy number
            return false;
          }
      
          if (slow === 1) {
            // Reached 1, Happy number
            return true;
          }
    }

}

console.log(isHappy(19))