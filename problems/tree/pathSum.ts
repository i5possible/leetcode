// https://leetcode.cn/problems/path-sum-iii/?envType=study-plan-v2&envId=top-100-liked
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefix = new Map();
    prefix.set(0, 1);
    return dfs(root, prefix, 0, targetSum);
}

const dfs = (root: TreeNode | null, prefix: Map<number, number>, curr: number, targetSum: number): number => {
    if (root === null) {
        return 0;
    }
    let ret = 0;
    curr += root.val;
    // 则节点 p i+1 到 node 的路径上所有节点的和一定为 targetSum。
    ret = prefix.get(curr - targetSum) || 0; // !!??
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    ret += dfs(root.left, prefix, curr, targetSum);
    ret += dfs(root.right, prefix, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);
    return ret;
}