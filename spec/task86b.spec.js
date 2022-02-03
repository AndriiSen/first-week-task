const task86b = require("../modules/task86b");



describe("task86b.js", () => {
    it('shuld return sum of integers of number', () => {
        expect(task86b(23)).toBe(5);
    });
    it('shuld return sum of integers of number', () => {
        expect(task86b(555)).toBe(15);
    });
    it('shuld return sum of integers of number', () => {
        expect(task86b(23)).not.toBe(6);
    });
});