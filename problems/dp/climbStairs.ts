let map = {};

function dp(n: number): number {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (map[n]) {
        return map[n];
    }
    let sum = 0;
    let result = dp(n-1) + dp(n-2);
    map[n] = result;
    return result;
}

function climbStairs(n: number): number {
    return dp(n);
}

export default climbStairs;
