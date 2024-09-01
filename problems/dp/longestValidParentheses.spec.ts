import longestValidParentheses from "./longestValidParentheses";

describe('Longest valid parentheses', () => {
    it('should return 2', () => {
        expect(longestValidParentheses('(()')).toBe(2);
    });

    it('should return 4', () => {
        expect(longestValidParentheses(')()())')).toBe(4);
    });

    it('should return 0', () => {
        expect(longestValidParentheses('')).toBe(0);
    });

    it('should return 2', () => {
        expect(longestValidParentheses('()')).toBe(2);
    });

    it('should return 0', () => {
        expect(longestValidParentheses(')(')).toBe(0);
    });

    it('should return 2', () => {
        expect(longestValidParentheses('(()(')).toBe(2);
    });

    it('should return 2', () => {
        expect(longestValidParentheses(')()')).toBe(2);
    });

    it('should return 4', () => {
        expect(longestValidParentheses('(()))')).toBe(4);
    });

    it('should return 4', () => {
        expect(longestValidParentheses('(()))()')).toBe(4);
    });

    it('should return 4', () => {
        expect(longestValidParentheses('(()))()()')).toBe(4);
    });

    it('should return 4', () => {
        expect(longestValidParentheses('(()))()()(')).toBe(4);
    });

    it('should return 6', () => {
        expect(longestValidParentheses('(()))()()()')).toBe(6);
    });

    it('should return 6', () => {
        expect(longestValidParentheses('(()))()()())')).toBe(6);
    });

    it('should return 6', () => {
        expect(longestValidParentheses('(()))()()())(')).toBe(6);
    });

    it('should return 6', () => {
        expect(longestValidParentheses('(()))()()())()')).toBe(6);
    });

    it('should return 6', () => {
        expect(longestValidParentheses('(()))()()())()(')).toBe(6);
    });

    it('should return 18', () => {
        expect(longestValidParentheses('(((()))()()())()()')).toBe(
            18
        );
    });
});