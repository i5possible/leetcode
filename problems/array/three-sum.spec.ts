// tests for three-sum

import threeSum from './three-sum';

describe('threeSum', () => {
    it('should return [-1, 0, 1] for nums = [-1, 0, 1, 2, -4]', () => {
        const nums = [-1, 0, 1, 2, -1, -4];
        expect(threeSum(nums, 0)).toContainEqual([-1, 0, 1]);
    });

    it('should return [] for nums = []', () => {
        const nums = [];
        expect(threeSum(nums, 0)).toEqual([]);
    });
});