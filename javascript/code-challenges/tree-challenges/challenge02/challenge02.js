// Write here the code challenge solution
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
postOrder() {
let result = [];
const traversal = (node) => {
if(node.left) traversal(node.left)
if(node.right) traversal(node.right)
result.push(node.value);
}
traversal(this.root);
return result;
}
isSameTree(p,q){
    if (!p && !q) return true;
       if (!p || !q) return false;
       if (p.val !== q.val) return false;
   
   return this.isSameTree(p.left, q.left),this.isSameTree(p.right, q.right);
   }}

module.exports = {Node, BinaryTree};