import rob from "./rob";

describe(('Rob'), () => {
    it('should return 4', () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    it('should return 12', () => {
        expect(rob([2, 7, 9, 3, 1])).toBe(12);
    });

});