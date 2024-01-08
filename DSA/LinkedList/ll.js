class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

function appendToLinkedList(linkedList, data) {
  const newNode = new Node(data);

  if (!linkedList.head) {
    linkedList.head = newNode;
  } else {
    let current = linkedList.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

function printLinkedList(linkedList) {
  let current = linkedList.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function searchInLinkedList(linkedList, data) {
  let current = linkedList.head;
  while (current) {
    if (current.value === data) {
      return "Found";
    }
    current = current.next;
  }
  return "Not Found";
}

function deleteAtHead(linkedList) {
  if (!linkedList.head) return;
  let temp = linkedList.head;
  linkedList.head = temp.next;
  temp = null;
  return;
}

function deleteAtTail(linkedList) {
  if (!linkedList.head || !linkedList.head.next) return null;
  let current = linkedList.head;
  while (current.next.next) {
    current = current.next;
  }
  current.next = null;
}

function deleteAtK(linkedList, k) {
  if (!linkedList.head) return null;
  if (k == 1) {
    linkedList.head = linkedList.head.next;
    return;
  } else {
    let current = linkedList.head;
    let prev = null;
    let count = 0;
    while (current != null) {
      count++;
      if (count == k) {
        prev.next = current.next;
        break;
      }
      prev = current;
      current = current.next;
    }
  }
}

function deleteVal(linkedList, val) {
  if (!linkedList.head) return null;
  if (val == linkedList.head.value) {
    linkedList.head = linkedList.head.next;
    return;
  } else {
    let current = linkedList.head;
    let prev = null;
    while (current != null) {
      if (current.value == val) {
        prev.next = current.next;
        break;
      }
      prev = current;
      current = current.next;
    }
  }
}

function insertAtHead(linkedList, data) {
  const newNode = new Node(data);
  newNode.next = linkedList.head;
  linkedList.head = newNode;
}

function insertAtLast(linkedList, data) {
  const newNode = new Node(data);
  if (!linkedList.head) {
    linkedList.head = newNode;
    return;
  } else {
    let current = linkedList.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

function insertAtK(linkedList, data, k) {
  const newNode = new Node(data);

  if (!linkedList.head) {
    linkedList.head = newNode;
    return;
  }

  if (k === 1) {
    newNode.next = linkedList.head;
    linkedList.head = newNode;
    return;
  }

  let current = linkedList.head;
  let prev = null;
  let count = 0;

  while (current !== null) {
    count++;
    if (count === k) {
      newNode.next = current;
      prev.next = newNode;
      break;
    }
    prev = current;
    current = current.next;
  }
}

function insertBeforeVal(linkedList, data, val) {
  const newNode = new Node(data);
  if (!linkedList.head) {
    linkedList.head = newNode;
    return;
  } else {
    let current = linkedList.head;
    let prev = null;
    while (current != null) {
      if (current.value == val) {
        prev.next = newNode;
        newNode.next = current;
        break;
      }
      prev = current;
      current = current.next;
    }
  }
}

function arrayToLinkedList(data) {
  const linkedList = new LinkedList();
  for (let i = 0; i < data.length; i++) {
    appendToLinkedList(linkedList, data[i]);
  }
  return linkedList;
}

function main() {
  let linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  printLinkedList(linkedList);

  console.log("**Search for 3**");
  console.log(searchInLinkedList(linkedList, 3));

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete at head**");
  deleteAtHead(linkedList);
  printLinkedList(linkedList);

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete at tail**");
  deleteAtTail(linkedList);
  printLinkedList(linkedList);

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete at K**");
  deleteAtK(linkedList, 3);
  printLinkedList(linkedList);

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Delete by value**");
  deleteVal(linkedList, 1);
  printLinkedList(linkedList);

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert at head**");
  insertAtHead(linkedList, -1);
  printLinkedList(linkedList);

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert at last**");
  insertAtLast(linkedList, 6);
  printLinkedList(linkedList);

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert at K**");
  insertAtK(linkedList, 0, 2);
  printLinkedList(linkedList);

  linkedList = arrayToLinkedList([1, 2, 3, 4, 5]);
  console.log("**Insert before value**");
  insertBeforeVal(linkedList, 4.5, 5);
  printLinkedList(linkedList);
}

main();
