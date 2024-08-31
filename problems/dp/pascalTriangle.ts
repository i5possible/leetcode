let map = {};

const dp = (row: number, index: number): number => {
    if (row === 1 || index === 1 || index === row) {
        return 1;
    }
    if (map[`${row}-${index}`]) {
        return map[`${row}-${index}`];
    }
    const result = dp(row - 1, index - 1) + dp(row - 1, index);
    map[`${row}-${index}`] = result;
    return result;
}

function generate(numRows: number): number[][] {
    let result = [];
    for (let i = 1; i <= numRows; i++) {
        let current = [];
        for (let j = 1; j <= i; j++) {
            current.push(dp(i, j));
        }
        result.push(current);
    }
    map = {};
    return result;
}

export default generate;