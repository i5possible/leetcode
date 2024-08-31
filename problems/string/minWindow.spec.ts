import minWindow from "./minWindow";

describe('Min window', () => {
    it('should return BANC', () => {
        const s = 'ADOBECODEBANC', t = 'ABC';
        expect(minWindow(s, t)).toBe('BANC');
    })

    it('should return A', () => {
        const s = 'A', t = 'A';
        expect(minWindow(s, t)).toBe('A');
    })

    it('should return empty string', () => {
        const s = 'a', t = 'aa';
        expect(minWindow(s, t)).toBe('');
    })
});