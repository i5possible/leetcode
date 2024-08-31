// test for two-sum
import twoSum from './two-sum';

describe('twoSum', () => {
    it('should return [0, 1] for nums = [2, 7, 11, 15], target = 9', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    it('should return [1, 2] for nums = [3, 2, 4], target = 6', () => {
        const nums = [3, 2, 4];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    it('should return [0, 1] for nums = [3, 3], target = 6', () => {
        const nums = [3, 3];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });
});