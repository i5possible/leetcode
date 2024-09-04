function findAnagrams(s, p) {
    const result = [];
    const sLen = s.length;
    const pLen = p.length;

    if (sLen < pLen) return result;

    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    for (let i = 0; i < pLen; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i <= sLen - pLen; i++) {
        if (i > 0) {
            sCount[s.charCodeAt(i - 1) - 97]--;
            sCount[s.charCodeAt(i + pLen - 1) - 97]++;
        }

        if (arraysAreEqual(pCount, sCount)) {
            result.push(i);
        }
    }

    return result;
}

function arraysAreEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

export default findAnagrams;