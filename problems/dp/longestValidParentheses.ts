// https://leetcode.cn/problems/longest-valid-parentheses/description

const dpSolution = (s: string): number => {
    let max = 0;
    let dp = new Array(s.length).fill(0);
    for (let i = 1; i < s.length; i++) {
        // '(' is always invalid
        if (s[i] === ')') {
            // immediate match
            if (s[i - 1] === '(') {
                // i < 2 means it's the first valid pair
                // i >= 2 means there is a valid pair before the current pair
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
                // s[i - 1] === ')'
                // dp[i - 1] is the length of the valid pair before the current pair
                // i - dp[i - 1] is the index of the character before the valid pair before the current pair
                // if the previous character is '(', then it's a valid pair
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                // dp[i - 1]: the one before the current valid pair
                // dp[i - dp[i - 1] - 2]: the one before the valid pair before the current valid pair
                // 2: the current valid pair
                dp[i] = dp[i - 1] + ((i - dp[i - 1] >= 2) ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            max = Math.max(max, dp[i]);
        }
    }
    return max;
}

const stackSolution = (s: string): number => {
    let max = 0;
    let stack = [-1];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
}

function longestValidParentheses(s: string): number {
    return dpSolution(s);
}

export default longestValidParentheses;