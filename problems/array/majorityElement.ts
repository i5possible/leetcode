function majorityElement1(nums: number[]): number {
    let map = {};
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    let half = Math.floor(nums.length / 2);
    for (let entry of Object.entries(map)) {
        let [key, value] = entry;
        if (Number(value) > half) {
            return Number(key);
        }
    }
}

function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }
    return candidate;
}
export default majorityElement;