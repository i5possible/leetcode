import firstMissingPositive from "./firstMissingPositive";

describe('First missing positive', () => {
    it('should return 3', () => {
        const nums = [1, 2, 0];
        expect(firstMissingPositive(nums)).toBe(3);
    })

    it('should return 2', () => {
        const nums = [3, 4, -1, 1];
        expect(firstMissingPositive(nums)).toBe(2);
    })

    it('should return 1', () => {
        const nums = [7, 8, 9, 11, 12];
        expect(firstMissingPositive(nums)).toBe(1);
    })

    it('should return 1', () => {
        const nums = [1, 2, 3];
        expect(firstMissingPositive(nums)).toBe(4);
    })
})