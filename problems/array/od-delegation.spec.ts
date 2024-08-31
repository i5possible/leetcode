import delegation from "./od-delegation";

describe('Od delegation', () => {
    it('should return 5', () => {
        const input = [2,3,3,1];
        const result = delegation(input);
        expect(result).toBe(5);
    });

    it('should return 7', () => {
        const input = [2, 5, 4, 3];
        const result = delegation(input);
        expect(result).toBe(7);
    });

    it('should return 18', () => {
        const input = [3,4,8,9];
        const result = delegation(input);
        expect(result).toBe(18);
    });

    it('should return 100232558', () => {
        const input = [177, 431, 2000, 100000000];
        const result = delegation(input);
        expect(result).toBe(100232558);
    });
})