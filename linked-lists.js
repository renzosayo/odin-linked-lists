class LinkedList {
  constructor (listHead = null) {
    // changed to 'listSize' from 'size' to prevent blocking size() function
    this.listSize = 0;
    this.listHead = listHead;
  }

  append (value) {
    let newNode = new Node(value);
    if (this.listHead === null) this.listHead = newNode;
    else {
      let temp = this.listHead;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.nextNode = newNode;
    }
    this.listSize += 1;
  }

  prepend (value) {
    let newNode = new Node(value);
    newNode.nextNode = this.listHead;
    this.listHead = newNode;
    this.listSize += 1;
  }

  size () {
    return this.listSize;
  }

  head () {
    return this.listHead;
  }

  tail () {
    let temp = this.listHead;
    while (temp.nextNode !== null) temp = temp.nextNode;
    return temp;
  }

  at (index) {
    let temp = this.listHead;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp.value;
  }

  pop () {
    let temp = this.listHead;
    while (temp.nextNode.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }

  contains (value) {
    let temp = this.listHead;
    while (temp.nextNode !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find (value) {
    let counter = 0;
    let temp = this.listHead;
    while (temp !== null) {
      if (temp.value === value) return counter;
      temp = temp.nextNode;
      counter += 1;
    }
    return null;
  }

  toString () {
    let string = '';
    let temp = this.listHead;
    while (temp !== null) {
      string += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    return string + 'null';
  }
}

class Node {
  constructor (value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
