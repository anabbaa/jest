const num = require("../number");


describe("test numbers", ()=>{
    describe("test return one number", ()=>{
        it("return number 0", ()=>{
            expect(num()).toBe(0);
        });

    })
    describe("test return sum", ()=>{

it("return only a number",()=>{
    expect(num(10)).toBe(10);
    });
    
    it("return number + number", ()=>{
        expect(num(2,3)).toBe(5);
    });
    
    it("return number + number + nmber", ()=>{
        expect(num(3,4,5)).toBe(12);
    });
    it("return number + number + number + number", ()=>{
        expect(num(1,2,3,4)).toBe(10);
    });

    })

})

