class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating BST
const createBST = (values) => {
  let root = null;
  for (const value of values) {
    root = insertIntoBST(root, value);
  }
  return root;
};

// Inserting values in BST
const insertIntoBST = (root, value) => {
  if (!root) {
    return new TreeNode(value);
  }
  if (value < root.value) {
    root.left = insertIntoBST(root.left, value);
  } else if (value > root.value) {
    root.right = insertIntoBST(root.right, value);
  } else {
    return root;
  }
};

//Search in BST
const searchBST = (root, value) => {
  if (!root) return null;
  while (root) {
    if (value < root.value) {
      root = root.left;
    } else if (value > root.value) {
      root = root.right;
    } else {
      return "Found";
    }
  }
  return "Not Found";
};

//Delete in BST
const deleteInBST = (root, value, parent = null) => {
  while (root) {
    if (value < root.value) {
      parent = root;
      root = root.left;
    } else if (value > root.value) {
      parent = root;
      root = root.right;
    } else {
      /* Case 1: Two children
       * Find smallest value in right subtree
       */
      if (root.left && root.right) {
        root.value = findMin(root.right);
        deleteInBST(root.right, root.value, root);
      }
    }
  }
};

const simulateBST = () => {
  const values = [10, 5, 15, 2, 5, 13, 22, 1, 14];
  const bst = createBST(values);
};
