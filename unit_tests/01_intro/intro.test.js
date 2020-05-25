const {sum, nativeNull} = require('./intro');

describe('Sum Function', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4);
        expect(sum(1, 3)).toEqual(4);
    })

    test('should return value correctly comparing to other', () => {
        expect(sum(2, 4)).toBeGreaterThan(5);
        expect(sum(2, 4)).toBeGreaterThanOrEqual(6);
        expect(sum(2, 4)).toBeLessThan(7);
        expect(sum(2, 4)).toBeLessThanOrEqual(6);
    })

    test('should sum 2 float values correctly', () => {
        expect(sum(0.2, 0.1)).toBeCloseTo(0.3);
    })
})

describe('Native Null Function', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        // expect(nativeNull()).toBeNaN();
        expect(nativeNull()).toBeFalsy() // undefined, null, '';
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})
