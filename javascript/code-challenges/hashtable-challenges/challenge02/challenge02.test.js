// Write your test here

const { firstRepeated } = require("./challenge02");

describe("Test first repeated", () => {
    it("It should return the first repeated word in a string", () => {
        expect(firstRepeated("ASAC is a department at LTUC. ASAC teaches programming in LTUC.")).toStrictEqual("ASAC");
        expect(firstRepeated("I am learning programming at ASAC")).toStrictEqual("No Repetition");
        expect(firstRepeated("")).toStrictEqual("No Repetition");
    });
}
);