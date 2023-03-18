const input = require("../input");

describe("test input", ()=>{
    it("check name empty", ()=>{
        expect(input()).toBe("unknown");
    });

    it("check spaces", ()=>{
        expect(input("  ahmed  ")).toBe("ahmed");
    })
    it("test long input", ()=>{
        expect(input("ahmedahmedahmed")).toBe("ahmedahmed");
    });
    it("check special characters", ()=>{
        expect(input("_ahmed_")).toBe("ahmed");

    });
});