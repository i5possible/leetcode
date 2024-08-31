export const longestConsecutive = (nums: number[]): number => {
    const map = {};
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!map[num]) {
            let left = map[num - 1] || 0;
            let right = map[num + 1] || 0;
            // join query set
            let currentLength = 1 + left + right;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }

            map[num] = currentLength;
            map[num - left] = currentLength;
            map[num + right] = currentLength;
        }
    }
    return maxLength;
};