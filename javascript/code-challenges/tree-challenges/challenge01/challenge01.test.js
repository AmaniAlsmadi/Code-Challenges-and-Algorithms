// Write your test here
const {Node, BinaryTree} = require('./challenge01.js');

let tree = null;

describe('Binary Tree', () => {
    beforeAll(() => {
        let one = new Node(3);
        let two = new Node(9);
        let three = new Node(20);
        let four = new Node(15);
        let five = new Node(7);
        one.left = two;
        one.right = three;
        three.left = four;
        three.right = five;
        tree = new BinaryTree(one);
    });
it('Test preOrder', () => {
        expect(tree.preOrder()).toEqual([3, 9, 20, 15, 7]);
    });
it('Test inOrder', () => {
        expect(tree.inOrder()).toEqual([9, 3, 15, 20, 7]);
    });
it('Test constructTree', () => {
        let preOrder = [3, 9, 20, 15, 7];
        let inOrder = [9, 3, 15, 20, 7];
        expect(tree.constructTree(preOrder, inOrder)).toEqual(tree.root);
    })
});