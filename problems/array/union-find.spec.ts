import {longestConsecutive} from "./union-find";

describe('Union find', () => {
    it('should find the longest consecutive sequence', () => {
        const nums = [100, 4, 200, 1, 3, 2];
        expect(longestConsecutive(nums)).toBe(4);
    })

    it('should find the longest consecutive sequence 2', () => {
        const nums = [0,3,7,2,5,8,4,6,0,1];
        expect(longestConsecutive(nums)).toBe(9);
    })

    it('should find the longest consecutive sequence 3', () => {
        const nums = [0,3,7,2,5,8,4,6,0,1,9,10,11,12];
        expect(longestConsecutive(nums)).toBe(13);
    })
})