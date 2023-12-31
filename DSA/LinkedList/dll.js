class Node {
  constructor(data) {
    this.value = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
}

function appendToDoublyLinkedList(dll, data) {
  const newNode = new Node(data);
  if (!dll.head) {
    dll.head = newNode;
  } else {
    let current = dll.head;
    while (current.next) {
      current = current.next;
    }
    newNode.prev = current;
    current.next = newNode;
  }
}

function printDoublyLinkedList(dll) {
  let current = dll.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function searchInDoublyLinkedList(dll, data) {
  let current = dll.head;
  while (current) {
    if (current.value === data) {
      return "Found";
    }
    current = current.next;
  }
  return "Not Found";
}

function deleteAtHeadDoublyLinkedList(dll) {
  if (!dll.head) return;
  dll.head = dll.head.next;
  if (dll.head) {
    dll.head.prev = null;
  }
}

function deleteAtTailDoublyLinkedList(dll) {
  if (!dll.head || !dll.head.next) return null;
  let current = dll.head;
  while (current.next.next) {
    current = current.next;
  }
  current.next = null;
}

function deleteAtKDoublyLinkedList(dll, k) {
  if (!dll.head) return null;
  if (k === 1) {
    dll.head = dll.head.next;
    if (dll.head) {
      dll.head.prev = null;
    }
    return;
  } else {
    let current = dll.head;
    let count = 0;
    while (current) {
      count++;
      if (count === k) {
        current.prev.next = current.next;
        if (current.next) {
          current.next.prev = current.prev;
        }
        break;
      }
      current = current.next;
    }
  }
}

function deleteValDoublyLinkedList(dll, val) {
  if (!dll.head) return null;
  if (val === dll.head.value) {
    dll.head = dll.head.next;
    if (dll.head) {
      dll.head.prev = null;
    }
    return;
  } else {
    let current = dll.head;
    while (current) {
      if (current.value === val) {
        current.prev.next = current.next;
        if (current.next) {
          current.next.prev = current.prev;
        }
        break;
      }
      current = current.next;
    }
  }
}

function insertAtHeadDoublyLinkedList(dll, data) {
  const newNode = new Node(data);
  newNode.next = dll.head;
  if (dll.head) {
    dll.head.prev = newNode;
  }
  dll.head = newNode;
}

function insertAtLastDoublyLinkedList(dll, data) {
  const newNode = new Node(data);
  if (!dll.head) {
    dll.head = newNode;
    return;
  } else {
    let current = dll.head;
    while (current.next) {
      current = current.next;
    }
    newNode.prev = current;
    current.next = newNode;
  }
}

function insertAtKDoublyLinkedList(dll, data, k) {
  const newNode = new Node(data);

  if (!dll.head) {
    dll.head = newNode;
    return;
  }

  if (k === 1) {
    newNode.next = dll.head;
    dll.head.prev = newNode;
    dll.head = newNode;
    return;
  }

  let current = dll.head;
  let count = 0;

  while (current) {
    count++;
    if (count === k) {
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
      break;
    }
    current = current.next;
  }
}

function insertBeforeValDoublyLinkedList(dll, data, val) {
  const newNode = new Node(data);
  if (!dll.head) {
    dll.head = newNode;
    return;
  } else {
    let current = dll.head;
    while (current) {
      if (current.value === val) {
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        break;
      }
      current = current.next;
    }
  }
}

function arrayToDoublyLinkedList(data) {
  const dll = new DoublyLinkedList();
  for (let i = 0; i < data.length; i++) {
    appendToDoublyLinkedList(dll, data[i]);
  }
  return dll;
}

function mainDoublyLinkedList() {
  let dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  printDoublyLinkedList(dll);

  console.log("**Search for 3**");
  console.log(searchInDoublyLinkedList(dll, 3));

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete at head**");
  deleteAtHeadDoublyLinkedList(dll);
  printDoublyLinkedList(dll);

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete at tail**");
  deleteAtTailDoublyLinkedList(dll);
  printDoublyLinkedList(dll);

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete at K**");
  deleteAtKDoublyLinkedList(dll, 3);
  printDoublyLinkedList(dll);

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete by value**");
  deleteValDoublyLinkedList(dll, 1);
  printDoublyLinkedList(dll);

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert at head**");
  insertAtHeadDoublyLinkedList(dll, -1);
  printDoublyLinkedList(dll);

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert at last**");
  insertAtLastDoublyLinkedList(dll, 6);
  printDoublyLinkedList(dll);

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert at K**");
  insertAtKDoublyLinkedList(dll, 0, 2);
  printDoublyLinkedList(dll);

  dll = arrayToDoublyLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert before value**");
  insertBeforeValDoublyLinkedList(dll, 4.5, 5);
  printDoublyLinkedList(dll);
}

mainDoublyLinkedList();
