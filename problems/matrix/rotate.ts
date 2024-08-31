// https://leetcode.cn/problems/rotate-image/description
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length;
    let m = Math.ceil(n/2);
    for(let i = 0; i < m; i++) {
        for (let j = i; j < n - i - 1; j++) {
            const current = matrix[i][j];
            console.log(`i: ${i}, j:${j}`);
            matrix[i][j] = matrix[n-j-1][i];
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            matrix[j][n-i-1] = current;
        }
    }
};

export default rotate;