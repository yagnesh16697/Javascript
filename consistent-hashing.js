const crypto = require("crypto");

class StorageNode {
  constructor(name, host) {
    this.name = name;
    this.host = host;
  }

  putFile(path) {
    // Implementation for putting a file on the node
    console.log(`File ${path} stored on node ${this.name}`);
  }

  fetchFile(path) {
    // Implementation for fetching a file from the node
    console.log(`File ${path} fetched from node ${this.name}`);
  }
}

class ConsistentHashing {
  constructor(totalSlots) {
    this.totalSlots = totalSlots;
    this.nodes = [];
    this.keys = [];
  }

  hashFn(key) {
    const hash = crypto.createHash("sha256").update(key, "utf-8").digest("hex");
    return parseInt(hash, 16) % this.totalSlots;
  }

  addNode(node) {
    if (this.keys.length === this.totalSlots) {
      throw new Error("Hash space is full");
    }

    const key = this.hashFn(node.host);
    const index = this.keys.findIndex((k) => k > key);

    if (index > 0 && this.keys[index - 1] === key) {
      throw new Error("Collision occurred");
    }

    this.nodes.splice(index, 0, node);
    this.keys.splice(index, 0, key);

    return key;
  }

  removeNode(node) {
    if (this.keys.length === 0) {
      throw new Error("Hash space is empty");
    }

    const key = this.hashFn(node.host);
    const index = this.keys.findIndex((k) => k === key);

    if (index === -1) {
      throw new Error("Node does not exist");
    }

    this.keys.splice(index, 1);
    this.nodes.splice(index, 1);

    return key;
  }

  assign(item) {
    const key = this.hashFn(item);
    const index = this.keys.findIndex((k) => k > key) % this.keys.length;

    return this.nodes[index];
  }
}

// Example usage
const consistentHashing = new ConsistentHashing(5);

const nodes = [
  new StorageNode("A", "10.131.213.12"),
  new StorageNode("B", "10.131.217.11"),
  new StorageNode("C", "10.131.142.46"),
  new StorageNode("D", "10.131.114.17"),
  new StorageNode("E", "10.131.189.18"),
];

nodes.forEach((node) => consistentHashing.addNode(node));

const fileToUpload = "example.txt";
const assignedNode = consistentHashing.assign(fileToUpload);
assignedNode.putFile(fileToUpload);
