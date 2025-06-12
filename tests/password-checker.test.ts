import {calculatePasswordStrength} from "../src/password-checker";

describe("Test password checker function", () => {
    test('Length: 0 symbols, Symbol type: none, Score: 0', () => {
        expect(calculatePasswordStrength('')).toBe('Very Weak');
    })
    test('Length: 7 symbols, Symbol type: digits, Score: 1', () => {
        expect(calculatePasswordStrength('1111111')).toBe('Very Weak');
    })
    test('Length: 8 symbols, Symbol type: digits, Score: 2', () => {
        expect(calculatePasswordStrength('11111111')).toBe('Very Weak');
    })
    test('Length: 9 symbols, Symbol type: digits, Score: 2', () => {
        expect(calculatePasswordStrength('111111111')).toBe('Very Weak');
    })
    test('Length: 11 symbols, Symbol type: digits, Score: 2', () => {
        expect(calculatePasswordStrength('11111111111')).toBe('Very Weak');
    })
    test('Length: 12 symbols, Symbol type: digits, Score: 3', () => {
        expect(calculatePasswordStrength('111111111111')).toBe('Weak');
    })
    test('Length: 13 symbols, Symbol type: digits, Score: 3', () => {
        expect(calculatePasswordStrength('1111111111111')).toBe('Weak');
    })
    test('Length: 13 symbols, Symbol type: digits + lowercase letter, Score: 4', () => {
        expect(calculatePasswordStrength('111111111111a')).toBe('Moderate');
    })
    test('Length: 13 symbols, Symbol type: digits + uppercase letter, Score: 4', () => {
        expect(calculatePasswordStrength('111111111111A')).toBe('Moderate');
    })
    test('Length: 13 symbols, Symbol type: digits + special character, Score: 4', () => {
        expect(calculatePasswordStrength('111111111111%')).toBe('Moderate');
    })
    test('Length: 13 symbols, Symbol type: digits + lowercase letter + uppercase letter, Score: 5', () => {
        expect(calculatePasswordStrength('11111111111aA')).toBe('Strong');
    })
    test('Length: 13 symbols, Symbol type: digits + lowercase letter + uppercase letter + special character, Score: 6', () => {
        expect(calculatePasswordStrength('11111111111aA')).toBe('Strong');
    })
})