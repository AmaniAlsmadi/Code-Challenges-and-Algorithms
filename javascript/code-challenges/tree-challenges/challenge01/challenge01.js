// Write here the code challenge solution
'use struct';

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
const traversal = (node) => {    result.push(node.value);
if(node.left) traversal(node.left)      
if(node.right) traversal(node.right)
}
traversal(this.root);
return result;
}

inOrder() {
let result = [];
const traversal = (node) => {
if(node.left) traversal(node.left)
result.push(node.value);
if(node.right) traversal(node.right)
}
traversal(this.root);
return result;
}

constructTree(preOrder, inOrder){
if (!preOrder.length || !inOrder.length) return null;

 let root = new Node(preOrder[0]);
 let rootIdx = inOrder.indexOf(preOrder[0]);
  root.left = this.constructTree(preOrder.slice(1, rootIdx + 1), inOrder.slice(0, rootIdx));
  root.right = this.constructTree(preOrder.slice(rootIdx + 1), inOrder.slice(rootIdx + 1));
  return root;
}
}

module.exports = {Node, BinaryTree};
