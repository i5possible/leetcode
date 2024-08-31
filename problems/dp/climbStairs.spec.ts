import climbStairs from "./climbStairs";

describe(('Climb stairs'), () => {
    it('should return 3', () => {
        expect(climbStairs(3)).toBe(3);
    });

    it('should return 5', () => {
        expect(climbStairs(4)).toBe(5);
    });

    it('should return 1836311903', () => {
        expect(climbStairs(45)).toBe(1836311903);
    });
});