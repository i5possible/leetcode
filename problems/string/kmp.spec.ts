// kmp tests

import kmp from './kmp';

describe('kmp', () => {
    it('should return 0 for str = "ababcababaad", pattern = "ababa"', () => {
        expect(kmp('ababcababaad', 'ababa')).toBe(5);
    });

    it('should return 2 for str = "hello", pattern = "ll"', () => {
        expect(kmp('hello', 'll')).toBe(2);
    });

    it('should return -1 for str = "hello", pattern = "world"', () => {
        expect(kmp('hello', 'world')).toBe(-1);
    });

    it('should return 0 for str = "hello", pattern = "hello"', () => {
        expect(kmp('hello', 'hello')).toBe(0);
    });
});