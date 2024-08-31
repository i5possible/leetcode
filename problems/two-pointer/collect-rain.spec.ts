import {trap} from "./collect-rain";

describe('Collect rain', () => {
    it('should collect rain', () => {
        const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        expect(trap(height)).toBe(6);
    })

    it('should collect rain 2', () => {
        const height = [4, 2, 0, 3, 2, 5];
        expect(trap(height)).toBe(9);
    })
})
