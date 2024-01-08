/*
Avarage Time Complexity: O(log(n))
Worst Time Complexity: O(n)

Space Complexity: O(log(n))
Space Complexity: O(n)
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const insertIntoBST = (root, value) => {
  if (!root) {
    return new TreeNode(value);
  }

  if (value < root.value) {
    root.left = insertIntoBST(root.left, value);
  } else {
    root.right = insertIntoBST(root.right, value);
  }

  return root;
};

const createBST = (values) => {
  let root = null;

  for (const value of values) {
    root = insertIntoBST(root, value);
  }

  return root;
};

const findClosestValueBSTHelper = (tree, target, closest) => {
  // Base Case
  if (!tree) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueBSTHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueBSTHelper(tree.right, target, closest);
  } else {
    return closest;
  }
};

const findClosestValueBST = (tree, target) => {
  return findClosestValueBSTHelper(tree, target, Number.MAX_SAFE_INTEGER);
};

const findClosestValueBSTIterative = (tree, target) => {
  let closest = Number.MAX_SAFE_INTEGER;
  let currentNode = tree;
  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
};

const testFindClosestValueBST = () => {
  const values = [10, 5, 15, 2, 5, 13, 22, 1, 14];
  const target = 12;

  const bst = createBST(values);

  const closestValue = findClosestValueBSTIterative(bst, target);

  console.log(`Closest value to ${target} in the BST is: ${closestValue}`);
};

testFindClosestValueBST();
