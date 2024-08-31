import Graph from './graph'
describe('Graph', () => {
    describe('Adjacency Matrix', () => {
        it('should create adjacency matrix', () => {
            const vertices = [{ id: 0 }, { id: 1 }, { id: 2 }];
            const edges = [
                { from: 0, to: 1, weight: 1 },
                { from: 1, to: 2, weight: 2 },
                { from: 2, to: 0, weight: 3 },
            ];
            const graph = new Graph(vertices, edges);
            const matrix = graph.getAdjacencyMatrix();
            expect(matrix[0][0]).toBe(0);
            expect(matrix[0][1]).toBe(1);
            expect(matrix[0][2]).toBe(0);
            expect(matrix[1][0]).toBe(0);
            expect(matrix[1][1]).toBe(0);
            expect(matrix[1][2]).toBe(2);
            expect(matrix[2][0]).toBe(3);
            expect(matrix[2][1]).toBe(0);
            expect(matrix[2][2]).toBe(0);
        });
    });

    describe('Adjacency List', () => {
        it('should create adjacency list', () => {
            const vertices = [{ id: 0 }, { id: 1 }, { id: 2 }];
            const edges = [
                { from: 0, to: 1, weight: 1 },
                { from: 1, to: 2, weight: 2 },
                { from: 2, to: 0, weight: 3 },
            ];
            const graph = new Graph(vertices, edges);
            const list = graph.getAdjacencyList();
            expect(list[0]).toEqual([1]);
            expect(list[1]).toEqual([2]);
            expect(list[2]).toEqual([0]);
        });
    });

    describe('In Degree', () => {
        it('should calculate in degree', () => {
            const vertices = [{id: 0}, {id: 1}, {id: 2}];
            const edges = [
                {from: 0, to: 1, weight: 1},
                {from: 1, to: 2, weight: 2},
                {from: 2, to: 0, weight: 3},
            ];
            const graph = new Graph(vertices, edges);
            expect(graph.getInDegree(0)).toBe(1);
            expect(graph.getInDegree(1)).toBe(1);
            expect(graph.getInDegree(2)).toBe(1);
        });
    });

    describe('Out Degree', () => {
        it('should calculate out degree', () => {
            const vertices = [{id: 0}, {id: 1}, {id: 2}];
            const edges = [
                {from: 0, to: 1, weight: 1},
                {from: 1, to: 2, weight: 2},
                {from: 2, to: 0, weight: 3},
            ];
            const graph = new Graph(vertices, edges);
            expect(graph.getOutDegree(0)).toBe(1);
            expect(graph.getOutDegree(1)).toBe(1);
            expect(graph.getOutDegree(2)).toBe(1);
        });
    });

    describe('From Adjacency Matrix', () => {
        it('should create graph from adjacency matrix', () => {
            const matrix = [
                [0, 1, 0],
                [0, 0, 2],
                [3, 0, 0],
            ];
            const graph = Graph.fromAdjacencyMatrix(matrix);
            const list = graph.getAdjacencyList();
            expect(list[0]).toEqual([1]);
            expect(list[1]).toEqual([2]);
            expect(list[2]).toEqual([0]);
        });
    });

    describe('From Adjacency List', () => {
        it('should create graph from adjacency list', () => {
            const list = {
                0: [1],
                1: [2],
                2: [0],
            };
            const graph = Graph.fromAdjacencyList(list);
            const matrix = graph.getAdjacencyMatrix();
            expect(matrix[0][0]).toBe(0);
            expect(matrix[0][1]).toBe(1);
            expect(matrix[0][2]).toBe(0);
            expect(matrix[1][0]).toBe(0);
            expect(matrix[1][1]).toBe(0);
            expect(matrix[1][2]).toBe(1);
            expect(matrix[2][0]).toBe(1);
            expect(matrix[2][1]).toBe(0);
            expect(matrix[2][2]).toBe(0);
        });
    });
});