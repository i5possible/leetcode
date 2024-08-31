import {bfs, dfs} from "./island";

const grid: string[][] = [
    ["1", "1", "1", "1", "0"],
    ["3", "1", "0", "5", "0"],
    ["2", "4", "0", "1", "0"],
    ["0", "0", "1", "7", "0"]
]

describe('Island traversal', () => {
    it('BFS traversal', () => {
        const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));
        const result = bfs(grid, 0, 0, visited);
        expect(result).toBe(28);
    });

    it('DFS traversal', () => {
        const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));
        const result = dfs(grid, 0, 0, visited);
        expect(result).toBe(28);
    })
});