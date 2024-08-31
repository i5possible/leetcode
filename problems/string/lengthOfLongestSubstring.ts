export const lengthOfLongestSubstring = (s: string): number => {
    const map = new Map<string, number>();
    let left = 0;
    let max = 0;
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right])! + 1, left);
        }
        map.set(s[right], right);
        max = Math.max(max, right - left + 1);
    }
    return max;
}