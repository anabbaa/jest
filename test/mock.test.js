const mock = require("../mock");



it("mock", ()=>{
    const mock = jest.fn((name) => `Hello ${name}`);
    expect(mock("ahmed")).toBe("Hello ahmed");
    expect(mock("saed")).toBe("Hello saed");
    expect(mock("Ali")).toBe("Hello Ali");
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(3);
    expect(mock).toHaveBeenCalledWith("Ali");
    expect(mock).toHaveBeenLastCalledWith("Ali");
});