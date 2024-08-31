// https://leetcode.cn/problems/minimum-window-substring/description

function minWindow(s: string, t: string): string {
    const map = new Map<string, number>();
    for (const c of t) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    let count = map.size;
    let minLen = Number.MAX_SAFE_INTEGER;
    let minStart = 0;
    while (right < s.length) {
        const c = s[right];
        if (map.has(c)) {
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) {
                count--;
            }
        }
        right++;
        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            const c2 = s[left];
            if (map.has(c2)) {
                map.set(c2, map.get(c2) + 1);
                if (map.get(c2) > 0) {
                    count++;
                }
            }
            left++;
        }
    }
    return minLen === Number.MAX_SAFE_INTEGER ? '' : s.substring(minStart, minStart + minLen);
}

export default  minWindow;