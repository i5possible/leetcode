import delegation from "./od-delegation";

describe('Od delegation', () => {
    it('should return 5', () => {
        const input = [2, 3, 3, 1];
        const result = delegation(input);
        expect(result).toBe(5);
    });

    it('should return 4', () => {
        const input = [2, 5, 2, 2];
        const result = delegation(input);
        expect(result).toBe(4);
    });

    it('should return 7', () => {
        const input = [2, 5, 4, 3];
        const result = delegation(input);
        expect(result).toBe(7);
    });

    it('should return 18', () => {
        const input = [3, 4, 8, 9];
        const result = delegation(input);
        expect(result).toBe(18);
    });

    it('should return 149', () => {
        const input = [3, 4, 100, 38];
        const result = delegation(input);
        expect(result).toBe(149);
    });

    it('should return 150', () => {
        const input = [3, 4, 100, 39];
        const result = delegation(input);
        expect(result).toBe(150);
    });

    it('should return 133', () => {
        const input = [3, 4, 22, 100];
        const result = delegation(input);
        expect(result).toBe(133);
    });

    it('should return 134', () => {
        const input = [3, 4, 23, 100];
        const result = delegation(input);
        expect(result).toBe(134);
    });

    it('should return 100232558', () => {
        const input = [177, 431, 2000, 100000000];
        const result = delegation(input);
        expect(result).toBe(100232558);
    });
})