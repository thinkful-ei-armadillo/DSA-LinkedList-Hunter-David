'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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
  ifExists(SLL);
  findPrevious(SLL, 'Helo');
  lastVal(SLL);
}

main();

function display(linkedList) {
  let currentNode = linkedList.head;
  while (currentNode.next !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}

function size(linkedList) {
  let currentNode = linkedList.head;
  let count = 0;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    count++;
  }
  count++;
  console.log(count);
}

function ifExists(linkedList) {
  if (!linkedList.head) {
    console.log('no list exists');
  }
  console.log('there is a list');
}

function findPrevious(linkedList, str) {
  if (!linkedList.head) {
    console.log('value doesnt exist');
  }
  let currNode = linkedList.head;
  let previousNode = linkedList.head;

  while (currNode !== null && currNode.value !== str) {
    // Save the previous node
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log('Target not found');
    return;
  }
  console.log(previousNode.value);
}

function lastVal(linkedList) {
  let currentNode = linkedList.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}

// WhatDoesThisProgramDo() is a function that replaces duplicates with the next value
