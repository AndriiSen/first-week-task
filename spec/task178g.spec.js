const task178g = require("../modules/task178g");

describe("task178g.js", () => {
    it('shuld return quantity of numbers that match the condition', () => {
        expect(task178g([4,1,2,5,3,6,4,7])).toBe(4);
    });
    it('shuld return quantity of numbers that match the condition', () => {
        expect(task178g([4,1,2,5,3,6,4,7])).not.toBe(5);
    });
});