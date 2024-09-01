import majorityElement from "./majorityElement";

describe('Majority element', () => {
    it('should return 3', () => {
        const input = [3, 2, 3];
        const result = majorityElement(input);
        expect(result).toBe(3);
    });

    it('should return 2', () => {
        const input = [2, 2, 1, 1, 1, 2, 2];
        const result = majorityElement(input);
        expect(result).toBe(2);
    });

    it('should return 2', () => {
        const input = [2, 2, 1, 1, 1, 2, 2, 2];
        const result = majorityElement(input);
        expect(result).toBe(2);
    });

    it('should return 2', () => {
        const input = [2, 2, 1, 1, 1, 2, 2, 2, 2];
        const result = majorityElement(input);
        expect(result).toBe(2);
    });

    it('should return 2', () => {
        const input = [2, 2, 1, 1, 1, 2, 2, 2, 2, 2];
        const result = majorityElement(input);
        expect(result).toBe(2);
    });

    it('should return 2', () => {
        const input = [2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2];
        const result = majorityElement(input);
        expect(result).toBe(2);
    });

    it('should return 2', () => {
        const input = [2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2];
        const result = majorityElement(input);
        expect(result).toBe(2);
    });

    it('should return 2', () => {
        const input = [2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2];
        const result = majorityElement(input);
        expect(result).toBe(2);
    });

    it('should return 3', () => {
        const input = [3, 3, 4, 3, 1, 3, 5, 3, 7];
        const result = majorityElement(input);
        expect(result).toBe(3);
    });
});