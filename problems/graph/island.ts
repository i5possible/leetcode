// >= 1: island
// 0: water
const grid: string[][] = [
    ["1","1","1","1","0"],
    ["3","1","0","5","0"],
    ["2","4","0","1","0"],
    ["0","0","1","7","0"]
]

// question: how many islands are there in the grid?

// Plan:
// 1. Iterate through the grid
// 2. If we find a 1, increment the count of islands
// 3. Run a DFS to mark all the connected 1s as visited
// 4. Continue the iteration

const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];

export const dfs = (grid: string[][], i: number, j: number, visited: boolean[][]): number => {
    // 1. out of bounds
    // 2. water
    // 3. visited already
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === "0" || visited[i][j]) {
        return 0;
    }
    let sum = 0;
    visited[i][j] = true;

    sum += parseInt(grid[i][j]);
    for (let d of direction) {
        sum += dfs(grid, i + d[0], j + d[1], visited);
    }
    // console.log(`i: ${i}, j: ${j}, grid[i,j]: ${grid[i][j]}, sum: ${sum}`);
    return sum;
}

export const bfs = (grid: string[][], i: number, j: number, visited: boolean[][]): number => {
    const queue = [[i, j]];
    let sum = 0;
    while (queue.length > 0) {
        const [i, j] = queue.shift();
        // console.log(`i: ${i}, j: ${j}, sum: ${sum}`);
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === "0" || visited[i][j]) {
            continue;
        }
        visited[i][j] = true;
        sum += parseInt(grid[i][j]);
        for (let d of direction) {
            queue.push([i + d[0], j + d[1]]);
        }
    }
    return sum;
}