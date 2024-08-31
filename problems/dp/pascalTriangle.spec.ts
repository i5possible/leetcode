import generate from "./pascalTriangle";

describe('Pascal triangle', () => {
    it('should return pascal triangle', () => {
        expect(generate(5)).toEqual([
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ]);
    });
});