// Write your test here
const {Node, BinaryTree} = require('./challenge02.js');

describe('Binary Tree', () => {
    it('test preOrder', () => {
        let tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        
        expect(tree.preOrder()).toEqual([1,2,3]);
    });
    it('test inOrder', () => {
        let tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        
        expect(tree.inOrder()).toEqual([2,1,3]);
    });
    it('test postOrder', () => {
        let tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        
        expect(tree.postOrder()).toEqual([2,3,1]);
    });
    it('test isSameTree', () => {
        let p = new BinaryTree();
        p.root = new Node(1);
        p.root.left = new Node(2);
        p.root.right = new Node(3);
        
        let q = new BinaryTree();
        q.root = new Node(1);
        q.root.left = new Node(2);
        q.root.right = new Node(3);
        
        expect(p.isSameTree(p,q)).toEqual(true);
        });
});