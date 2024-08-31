import bf from './bf';
describe('bf', () => {
    it('should return -1 for s = "hello", t = "world"', () => {
        const s = 'hello';
        const t = 'world';
        expect(bf(s, t)).toEqual(-1);
    });

    it('should return 1 for s = "hello", t = "hello"', () => {
        const s = 'hello';
        const t = 'hello';
        expect(bf(s, t)).toEqual(0);
    });

    it('should return 3 for s = "hello", t = "ll"', () => {
        const s = 'hello';
        const t = 'll';
        expect(bf(s, t)).toEqual(2);
    });
})