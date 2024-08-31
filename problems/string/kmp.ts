// Knuth-Morris-Pratt
const kmp = (str: string, pattern: string): number => {
    const n = str.length;
    const m = pattern.length;

    // calculate each character's longest prefix that is also a suffix
    const lps = Array(m).fill(0);
    let len = 0;
    let i = 1;
    while (i < m) {
        // console.log(`len = ${len}, i = ${i}`)
        if (pattern[i] === pattern[len]) {
            // console.log(`pattern[${i}] = ${pattern[i]}, pattern[${len}] = ${pattern[len]}`);
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                // console.log(`pattern[${i}] = ${pattern[i]}, pattern[${len}] = ${pattern[len]}, lps[${len - 1}] = ${lps[len - 1]}`);
                // Key of the algorithm
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    // console.log(lps);

    // finish finding
    i = 0;
    let j = 0;
    while (i < n) {
        if (str[i] === pattern[j]) {
            i++;
            j++;
            if (j == m) {
                return i - j;
            }
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}

export default kmp;
