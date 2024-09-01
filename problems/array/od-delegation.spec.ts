import delegation, {delegation1, delegation2} from "./od-delegation";

describe('Od delegation', () => {
    it('should return 5', () => {
        const input = [2, 3, 3, 1];
        const result = delegation(input);
        expect(result).toBe(5);
    });

    it('should return 4', () => {
        const input = [2, 5, 2, 2];
        const result = delegation(input);
        expect(result).toBe(4);
    });

    it('should return 7', () => {
        const input = [2, 5, 4, 3];
        const result = delegation(input);
        expect(result).toBe(7);
    });

    it('should return 18', () => {
        const input = [3, 4, 8, 9];
        const result = delegation(input);
        expect(result).toBe(18);
    });

    it('should return 149', () => {
        const input = [3, 4, 100, 38];
        const result = delegation(input);
        expect(result).toBe(150);
    });

    it('should return 150', () => {
        const input = [3, 4, 100, 39];
        const result = delegation(input);
        expect(result).toBe(151);
    });

    it('should return 163', () => {
        const input = [3, 4, 100, 50];
        const result = delegation(input);
        expect(result).toBe(163);
    });

    it('should return 207', () => {
        const input = [3, 4, 100, 90];
        const result = delegation(input);
        expect(result).toBe(207);
    });

    it('should return 133', () => {
        const input = [3, 4, 22, 100];
        const result = delegation(input);
        expect(result).toBe(133);
    });

    it('should return 134', () => {
        const input = [3, 4, 23, 100];
        const result = delegation(input);
        expect(result).toBe(134);
    });

    it('should return 100232558', () => {
        const input = [177, 431, 2000, 100000000];
        const result = delegation(input);
        expect(result).toBe(100232558);
    });

    it('should return 1783979038', () => {
        const input = [2, 3, 862079849, 624569351];
        const result = delegation(input);
        expect(result).toBe(1783979039);
    });

    xit('should return 993', () => {
        const input = [2, 3, 468, 361];
        const result = delegation(input);
        expect(result).toBe(993);
    });

    const generatePrimesUnder30000 = () => {
        let primes = [];
        let isPrime = Array(30000).fill(true);
        isPrime[0] = isPrime[1] = false;
        for (let i = 2; i < 30000; i++) {
            if (isPrime[i]) {
                primes.push(i);
                for (let j = i * i; j < 30000; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        return primes;
    }

    xit('match with binary search', () => {
        // 0 < x < y < 30000
        // 1 < nx, ny < 10^9
        let primesUnder30000 = generatePrimesUnder30000();
        // console.log(`primes under 30000: ${primesUnder30000.length}`);
        for (let i = 0; i < primesUnder30000.length - 1; i++) {
            console.log(`progress: ${i}/${primesUnder30000.length}`);
            for (let j = i + 1; j < 100; j++) {
                let yIndex = Math.floor(Math.random() * (primesUnder30000.length - i)) + 1;
                for (let k = 0; k < 100; k++) {
                    let nx = Math.floor(Math.random() * 1000000000) + 1;
                    let ny = Math.floor(Math.random() * 1000000000) + 1;
                    let input = [primesUnder30000[i], primesUnder30000[yIndex], nx, ny];
                    let result1 = delegation1(input);
                    let result2 = delegation2(input);
                    try {
                        expect(Math.abs(result1 - result2)).toBeLessThanOrEqual(2);
                    } catch (e) {
                        console.log(`input: ${input}, result1: ${result1}, result2: ${result2}`)
                        throw e;
                    }
                }
            }
        }
    })
})