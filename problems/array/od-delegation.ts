/*
员工工号连续，且从1开始； 从工号1-k中选择员工派去x国（需要nx人）、y国（需要ny人）； 工号为x倍数的不去x国，工号为y倍数的不去y国； 找到最小的k，使得可以将编号1-k中的员工分配给x国、y国，且满足两国需求；

输入描述：
四个整数x, y, nx, ny;
2 < x < y < 30000，且x、y均为质数
1 < nx, ny < 10^9
nx + ny <= 10^9

输出描述：
满足条件的最小的k
 */

/*
题目分析：
1. 对 x 来说，n % x=0 不计入，其中 n % xy=0 也不计入, n % y=0 但 n % xy!=0 是 x 独有的
2. 对 y 来说，n % y 不计入，其中 n % xy 也不计入， n % x=0 但 n % xy!=0 是 y 独有的
3. 剩余部分是 x 和 y 共有的
4. 需要保证 nx <= Ox + Common, ny <= Oy + Common, nx + ny <= Ox + Oy + Common
 */

const gcd = (a: number, b: number): number => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

const lcm = (a: number, b: number): number => {
    return a * b / gcd(a, b);
}

// 1. 二分法查找
export const delegation1 = (input: number[]): number => {
    let left = 1;
    let right = 10000000000;
    let [x, y, nx, ny] = input;
    let lcmXY = lcm(x, y);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let onlyX = Math.floor(mid / y) - Math.floor(mid / lcmXY);
        let onlyY = Math.floor(mid / x) - Math.floor(mid / lcmXY);
        let common = mid - Math.floor(mid / x) - Math.floor(mid / y) + Math.floor(mid / lcmXY);
        if (nx <= onlyX + common && ny <= onlyY + common && nx + ny <= onlyX + onlyY + common) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

// 2. 尝试分类计算
// Not working as expected, the best result we can get is +=2
export const delegation2 = (input: number[]): number => {
    let [x, y, nx, ny] = input;
    let minX = Math.floor(nx / (1 - 1 / x));
    let onlyYIfMinX = Math.floor(minX / x) - Math.floor(minX / (x * y));
    let minY = Math.floor(ny / (1 - 1 / y));
    let onlyXIfMinY = Math.floor(minY / y - Math.floor(minY / (x * y)));

    // 检查 onlyX 与 nx 的关系
    if (onlyXIfMinY > nx) {
        return minY % y === 0 ? minY - 1 : minY;
    } else if (onlyXIfMinY === nx) {
        return minY;
    }

    // 检查 onlyY 与 ny 的关系
    if (onlyYIfMinX > ny) {
        return minX % x === 0 ? minX - 1 : minX;
    } else if (onlyYIfMinX === ny) {
        return minX;
    }

    // 找到根据 nx 与 ny 计算出最小 k 的结果中较大的一个，如 nx
    // 此时，仅有 n % lcp=0 的部分不计入，剩余部分都计入，增加的部分每 xy 个计入 xy-1, 不足的直接计入
    let temp = Math.max(minX, minY);

    let lack;
    if (minX >= minY) {
        lack = ny - onlyYIfMinX;
    } else {
        lack = nx - onlyXIfMinY
    }
    let complement = Math.floor(lack / (x * y - 1)) * x * y + lack % (x * y - 1);
    // console.log(`minX: ${minX}, minY: ${minY}, temp: ${temp}, lack: ${lack}, complement: ${complement}`);
    return temp + complement;
}

const delegation = (input: number[]): number => {
    return delegation1(input);
}

export default delegation;