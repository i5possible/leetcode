// https://leetcode.cn/problems/trapping-rain-water/description/

export const trap = (height: number[]): number => {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let sum = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                sum += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                sum += rightMax - height[right];
            }
            right--;
        }
    }

    return sum;
}