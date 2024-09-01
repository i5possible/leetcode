import numSquares from "./numSquares";

describe('Num squares', () => {
    it('should return 3', () => {
        expect(numSquares(12)).toBe(3);
    });

    it('should return 2', () => {
        expect(numSquares(13)).toBe(2);
    });

    it('should return 1', () => {
        expect(numSquares(1)).toBe(1);
    });

    it('should return 2', () => {
        expect(numSquares(2)).toBe(2);
    });

    it('should return 3', () => {
        expect(numSquares(3)).toBe(3);
    });

    it('should return 1', () => {
        expect(numSquares(4)).toBe(1);
    });

    it('should return 2', () => {
        expect(numSquares(5)).toBe(2);
    });

    it('should return 1', () => {
        expect(numSquares(6)).toBe(3);
    });

    it('should return 2', () => {
        expect(numSquares(7)).toBe(4);
    });

    it('should return 1', () => {
        expect(numSquares(8)).toBe(2);
    });

    it('should return 2', () => {
        expect(numSquares(9)).toBe(1);
    });

    it('should return 3', () => {
        expect(numSquares(10)).toBe(2);
    });

    it('should return 2', () => {
        expect(numSquares(11)).toBe(3);
    });

    it('should return 1', () => {
        expect(numSquares(16)).toBe(1);
    });

    it('should return 2', () => {
        expect(numSquares(17)).toBe(2);
    });

    it('should return 3', () => {
        expect(numSquares(18)).toBe(2);
    });

    it('should return 4', () => {
        expect(numSquares(19)).toBe(3);
    });

    it('should return 2', () => {
        expect(numSquares(20)).toBe(2);
    });

    it('should return 3', () => {
        expect(numSquares(21)).toBe(3);
    });

    it('should return 3', () => {
        expect(numSquares(22)).toBe(3);
    });
})