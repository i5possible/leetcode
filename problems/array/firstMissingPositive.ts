function firstMissingPositive(nums: number[]): number {
    const n = nums.length;
    let map: boolean[] = Array.from({length: n}, _ => true);
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0 && nums[i] <= n) {
            map[nums[i] - 1] = false;
        }
    }
    for (let i = 0; i < n; i++) {
        if (map[i]) {
            return i + 1;
        }
    }
    return n + 1;
};

export default firstMissingPositive;