const breadthFirst = require('./challenge01');

describe('breadthFirst', () => {
    it('should return a list of nodes in the graph, in the order they were visited.', () => {
        let graph = [
        [0, 1, 0, 0, 0, 0],
        [1, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 1, 0],
        ];
        let root = 3;
        expect(breadthFirst(graph, root)).toEqual({0: 2, 1: 1, 2: 2, 3: 0, 4: 1, 5: 2});
    });
    });
