const say = require("../say");


test("text Message", ()=>{
    expect(say()).toBe("Hello Jest");
});