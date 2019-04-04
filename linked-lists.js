'use strict';

class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(newValue, beforeTarget) {
    if (!this.head) {
      this.insertFirst(newValue);
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== beforeTarget) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Target not found');
      return;
    }
    previousNode.next = new _Node(newValue, previousNode.next);
  }
  insertAfter(newValue, afterTarget) {
    if (!this.head) {
      this.insertFirst(newValue);
    }
    let currNode = this.head;
    while (currNode.next !== null && currNode.value !== afterTarget) {
      currNode = currNode.next;
    }
    if (currNode.next === null) {
      console.log('Target not found');
      return;
    }
    let newNode = new _Node(newValue, currNode.next);
    currNode.next = newNode;
  }
  insertAt(newValue, position) {
    let count = 1;
    let currNode = this.head;
    while (count < position) {
      if (currNode.next === null) {
        console.log('Could not find that position');
        return;
      }
      count++;
      currNode = currNode.next;
    }
    currNode.next = new _Node(newValue, currNode.next);
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  display(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, 'Helo');
  lastVal(SLL);
  // reverseList(SLL);
  console.log(display(SLL));
  thirdFromEnd(SLL);
  middleVal(SLL);

  console.log(cycle(SLL));
}


function display(linkedList) {
  let currentNode = linkedList.head;
  let result = [];
  while (currentNode.next !== null) {
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  result.push(currentNode.value);
  return result;
}

function size(linkedList) {
  let currentNode = linkedList.head;
  let count = 0;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    count++;
  }
  count++;
  return count;
}

function isEmpty(linkedList) {
  if (!linkedList.head) {
    return true;
  }
  return false;
}

function findPrevious(linkedList, str) {
  if (!linkedList.head) {
    return 'value doesnt exist';
  }
  let currNode = linkedList.head;
  let previousNode = linkedList.head;

  while (currNode !== null && currNode.value !== str) {
    // Save the previous node
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    return 'Target not found';
  }
  return previousNode.value;
}

function lastVal(linkedList) {
  let currentNode = linkedList.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

// WhatDoesThisProgramDo() is a function that replaces the first instance of a duplicate with the next value in the list.

function reverseList(ll) {
  let currentNode = ll.head;
  let previousNode = null;

  while (currentNode.next !== null) {
    let tempPrevious = previousNode;
    let tempCurrent = currentNode;
    previousNode = currentNode;
    currentNode = currentNode.next;
    tempCurrent.next = tempPrevious;
  }
  currentNode.next = previousNode;
  ll.head = currentNode;
  return ll;
}

function thirdFromEnd(ll) {
  let currentNode = ll.head;
  let previousNode = null;
  let twoBack = null;

  while (currentNode.next !== null) {
    twoBack = previousNode;
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  return twoBack.value;
}

function middleVal(linkedList) {
  let currentNode = linkedList.head;
  let count = 0;
  let middleVar = null;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    count++;
  }
  count++;
  middleVar = count / 2;
  currentNode = linkedList.head;
  while (middleVar > 0) {
    currentNode = currentNode.next;
    middleVar--;
  }
  return currentNode.value;
}

function cycle(CycleList) {
  let usedVals = [];
  let currentNode = CycleList.head;
  while (currentNode.next !== null) {
    usedVals.push(currentNode.value);
    for (let i = 0; i < usedVals.length; i++) {
      if (usedVals[i] === currentNode.next.value) {
        return true;
      }
    }
    currentNode = currentNode.next;
  }
  return false;
}


class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    const insertedNode = new _Node(item, this.head, null);
    if(!this.head){
      this.head = insertedNode;
      this.tail = insertedNode;
    } else {
      this.head.prev = insertedNode;
      this.head = insertedNode;
    }
  }
  
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      const insertedNode = new _Node(item, null, this.tail);
      this.tail.next = insertedNode;
      this.tail = insertedNode;
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // If the node to be removed is tail, make the previos node tail
    if (this.tail.value === item) {
      this.tail = this.tail.prev;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    let nextNode = currNode.next;
    previousNode.next = currNode.next;
    nextNode.prev = previousNode;
  }
  insertBefore(newValue, beforeTarget) {
    if (!this.head) {
      this.insertFirst(newValue);
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== beforeTarget) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Target not found');
      return;
    }
    const insertedNode = new _Node(newValue, currNode, previousNode);
    previousNode.next = insertedNode;
    currNode.prev = insertedNode;
  }
  insertAfter(newValue, afterTarget) {
    if (!this.head) {
      this.insertFirst(newValue);
    }
    let currNode = this.head;
    while (currNode.next !== null && currNode.value !== afterTarget) {
      currNode = currNode.next;
    }
    if (currNode.next === null) {
      console.log('Target not found');
      return;
    }
    let newNode = new _Node(newValue, currNode.next, currNode);
    let oldNextNode = currNode.next;
    currNode.next = newNode;
    oldNextNode.prev = newNode;
  }
  insertAt(newValue, position) {
    let count = 1;
    let currNode = this.head;
    while (count < position) {
      if (currNode.next === null) {
        console.log('Could not find that position');
        return;
      }
      count++;
      currNode = currNode.next;
    }
    const insertedNode = new _Node(newValue, currNode.next, currNode);
    let oldNextNode = currNode.next;
    currNode.next = insertedNode;
    oldNextNode.prev = insertedNode;
  }
}

function mainDLL(){
  let DLL = new doublyLinkedList();
  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');  
  display(DLL);
  reverseDLL(DLL);
  display(DLL);
}

function reverseDLL(dll){
  let currentNode = dll.head;
  let tempNode = null;
  dll.tail = currentNode;

  while(currentNode !== null){
    tempNode = currentNode.prev;
    currentNode.prev = currentNode.next;
    currentNode.next = tempNode;
    currentNode = currentNode.prev;
  }

  if(tempNode !== null){
    dll.head = tempNode.prev;
  }
}

mainDLL();