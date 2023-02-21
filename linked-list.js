/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    this.length = this.length + 1;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next= newNode;
      this.tail = newNode
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    this.length = this. length + 1;
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head){
      throw('empty');
    }else if (this.length === 1){
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }else{
      this.length = this.length - 1;
      let current = this.head;
      while(current.next !== null){
        if (current.next === this.tail){
          current.next = null;
          let tailVal = this.tail.val;
          this.tail = current;
          return tailVal;
        }else{
          current = current.next;
        }
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      throw('empty');
    }else if (this.length === 1){
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    } else {
      this.length = this.length - 1;
      let val = this.head.val;
      this.head = this.head.next;
      return val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length){
      throw('invalid')
    }
    let currentIdx = 0;
    let currentNode = this.head;
    while(currentIdx !== idx){
      currentNode = currentNode.next;
      currentIdx = currentIdx + 1;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length){
      throw('invalid')
    }
    let currentIdx = 0;
    let currentNode = this.head;
    while(currentIdx !== idx){
      currentNode = currentNode.next;
      currentIdx = currentIdx + 1;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if(idx < 0 || idx > this.length && idx !== 0){
      throw ('invalid')
    }else if(this.length === 0){
      if(idx !== 0){
        throw('invalid')
      }
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }else if(idx === 0){
      this.unshift(val)
    }else if(idx === this.length){
      this.push(val)
    }else {
      let prevNodeIdx = 0;
      let prevNode = this.head;
      while(prevNodeIdx !== idx - 1){
        prevNode = prevNode.next;
        prevNodeIdx = prevNodeIdx + 1;
      }
      let afterNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = afterNode;
      this.length = this.length + 1
    }
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx < 0 || idx >= this.length){
      throw('invalid')
    }else if (idx === 0){
      this.shift()
    }else if (idx === this.length - 1){
      this.pop()
    }else {
      let prevNodeIdx = 0;
      let prevNode = this.head;
      while(prevNodeIdx !== idx - 1){
        prevNode = prevNode.next;
        prevNodeIdx = prevNodeIdx + 1;
      }
      let remNode = prevNode.next;
      let afterNode = remNode.next;
      prevNode.next = afterNode;
      return remNode.val;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0
    }else{
      let current = this.head;
      let total = 0;
      while(current !== null) {
        total = total + current.val;
        current = current.next
      }
      return total / this.length
    }
  }
}

module.exports = LinkedList;
