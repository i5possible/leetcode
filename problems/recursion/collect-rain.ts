// https://leetcode.cn/problems/trapping-rain-water/description/

export const trap = (height: number[], leftValue: number, rightValue: number, left?: number, right?: number): number => {
    if (left === undefined) {
        left = 0;
    }
    if (right === undefined) {
        right = height.length - 1;
    }
    // console.log(`left: ${left}, right: ${right}`)
    if (left >= right - 1) {
        return 0;
    }
    let maxValue = 0;
    let maxIndex = 0;
    for (let i = left; i <= right; i++) {
        if (height[i] > maxValue) {
            maxValue = height[i];
            maxIndex = i;
        }
    }
    // console.log(`maxValue: ${maxValue}, maxIndex: ${maxIndex}`);

    let sum = 0;
    if (leftValue !== 0 && rightValue !== 0) {
        const min = Math.min(leftValue, rightValue);
        for (let i = left + 1; i < right; i++) {
            if (height[i] < min) {
                sum += min - height[i];
            }
        }
    } else if (leftValue !== 0) {
        const min = Math.min(leftValue, maxValue);
        for (let i = left; i < maxIndex; i++) {
            if (height[i] < min) {
                sum += min - height[i];
            }
        }
        sum += trap(height, maxValue, rightValue, maxIndex + 1, right);
    }
    if (rightValue !== 0) {
        const min = Math.min(rightValue, maxValue);
        for (let i = maxIndex + 1; i <= right; i++) {
            if (height[i] < min) {
                sum += min - height[i];
            }
        }
        sum += trap(height, leftValue, maxValue, left, maxIndex - 1);
    }
    if (leftValue === 0 && rightValue === 0) {
        sum += trap(height, leftValue, maxValue, left, maxIndex - 1) + trap(height, maxValue, rightValue, maxIndex + 1, right);
    }
    // console.log(`left: ${left}, right: ${right}, maxValue: ${maxValue}, maxIndex: ${maxIndex}, leftValue:${leftValue}, rightValue: ${rightValue}, sum: ${sum}`);
    return sum;
}