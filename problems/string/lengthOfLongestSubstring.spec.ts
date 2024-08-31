import {lengthOfLongestSubstring} from "./lengthOfLongestSubstring";

describe('Length of longest substring', () => {
    it('should return 3', () => {
        const s = 'abcabcbb';
        expect(lengthOfLongestSubstring(s)).toBe(3);
    })

    it('should return 1', () => {
        const s = 'bbbbb';
        expect(lengthOfLongestSubstring(s)).toBe(1);
    })

    it('should return 3', () => {
        const s = 'pwwkew';
        expect(lengthOfLongestSubstring(s)).toBe(3);
    })

    it('should return 0', () => {
        const s = '';
        expect(lengthOfLongestSubstring(s)).toBe(0);
    })

    it('should return 1', () => {
        const s = 'a';
        expect(lengthOfLongestSubstring(s)).toBe(1);
    })

    it('should return 3', () => {
        const s = 'dvdf';
        expect(lengthOfLongestSubstring(s)).toBe(3);
    })
});