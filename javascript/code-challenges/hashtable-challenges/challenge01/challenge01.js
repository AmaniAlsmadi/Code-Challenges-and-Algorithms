'use strict';

class Node {
    constructor (value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    }}
    
     class BinaryTree {
    constructor ( root = null ) {
    this.root = root;
    }

    preOrder() {
      let result = [];
      const traversal = (node) => {    
      result.push(node.value);
      if(node.left) traversal(node.left)      
      if(node.right) traversal(node.right)
      }
      traversal(this.root);
      return result;
      }}

    class hashTableArray {
      constructor() {
        this.storage = new Array();
      }
    
     set(key, value) {
      if (!this.storage[key]) this.storage[key] = [value];
    this.storage[key] = [...this.storage[key], value];
  }

    twoSum (root, k) {
      let set = new Set();
      const traverse = node => {
        if (!node) return false;
        if (set.has(k - node.value))return true;
        else set.add(node.value);
        
        return traverse(node.left) || traverse(node.right);
      };
      return traverse(root);

    }
     
}
module.exports = { Node, BinaryTree , hashTableArray};