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

// rolling array
function climbStairs2(n: number): number {
    let p = 0, q = 0, r = 1;
    // f(0) = 1, f(1) = 1, f(2) = 2
    // f(n) = f(n-1) + f(n-2)
    for (let i = 1; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
}

function climbStairs(n: number): number {
    return climbStairs2(n);
    // return dp(n);
}

export default climbStairs;
