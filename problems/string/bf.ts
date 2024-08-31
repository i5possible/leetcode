const bruteForce = (text: string, pattern: string): number => {
    const n = text.length;
    const m = pattern.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === m) {
            return i;
        }
    }
    return -1;
}

export default bruteForce;