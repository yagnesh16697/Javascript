class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print(headPtr) {
    let current = headPtr;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

function arrayToLinkedList(array) {
  const linkedList = new LinkedList();
  for (const element of array) {
    linkedList.append(element);
  }
  return linkedList;
}

const arr = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(arr);

linkedList.print(linkedList.head);
