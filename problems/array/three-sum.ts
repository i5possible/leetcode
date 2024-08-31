
const threeSum = (nums: number[], target: number): number[][] => {
    const result = [];
    if (nums.length < 3) {
        return result;
    }
    const map = new Map<number, number>;
    map.set(nums[0], 0);
    for (let i = 1; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - nums[i] - nums[j];
            if (nums[i] === nums[j] || nums[j] === complement || nums[i] === complement) {
                continue;
            }
            if (map.has(complement) ) {
                result.push([nums[i], nums[j], complement].sort((a, b) => a - b));
            }
        }
        map.set(nums[i], i);
    }

    return result;
}

export default threeSum;