const arr = require("../all");

describe("check array",()=>{
    it("check if aray contains 6 elements", ()=>{
        expect(arr.length).toBe(6);
    });

    it("check if array contains 6 elements using another matcher", ()=>{
        expect(arr).toHaveLength(6);
    });
    it("check array contains element", ()=>{
        expect(arr).toContain(1);
    })
    it("check if array do not have element", ()=>{
        expect(arr).not.toContain(7);
    })
    it("check if array do not have 0 with loop", ()=>{
        for (let i =0; i < arr.length; i++ ){
            expect(arr[i]).not.toBe(0);

        }
    });
    it("check if array has no index is a streng", ()=>{
        for (let i =0; i < arr.length; i++){
            expect(isNaN(arr[i])).toBe(false);
        }
    });
    it("checks if array do not have ibdex as a streng with a matcher", ()=>{
        for (let i =0; i< arr.length; i++){
            expect(isNaN(arr[i])).toBeFalsy();
        };
    });
    it("check if array did not have index as a streng with another matcher", ()=>{
        for (let i=0; i< arr.length; i++)
        expect(isNaN(arr[i])).not.toBeTruthy();
    });
    it("check if array first element is greater than 1", ()=>{
        expect(arr[0]).toBeGreaterThan(0);

    });
    it("checks if array first element greater thant or equal a number", ()=>{
        expect(arr[0]).toBeGreaterThanOrEqual(1);
    });
    it("checks if array first element less than a number", ()=>{
        expect(arr[0]).toBeLessThan(4);

    });
    it("checks if array first element less than or equal a number", ()=>{
        expect(arr[0]).toBeLessThanOrEqual(1);
    })
    it("checks for undefined", ()=>{
        let i;
        expect(i).toBeUndefined();
    })
    it("checks if a streng have info", ()=>{
        let i = "i love javaScript";
        expect(i).toMatch(/javaScript/)
    });
    it("checks object", ()=>{
        let i = {
            name: "ahmed",
            job: "teacher"
        }
        expect(i).toHaveProperty("name", "ahmed")
    })
    expect.extend({
        toBeLargerThan(received, target){
            const pass = received > target;
            if(pass){
                return{
                    message: ()=> `expexted ${received} to be larger than ${target}`,
                    pass: true
                };
            }
                else{
                    return{
                        message: () => `error`,
                        pass: false
                    };
                }

            }

        });
        it("test my matcher", ()=>{
            expect(10).toBeLargerThan(2);
                });
                expect.extend({
                    toBeBetween(received, start, end){
                        const pass = received > start && received < end;
                        if (pass){
                            return{
                                message: ()=> `${received} is reall between ${start} and ${end}`,
                                pass: true

                            };
                        }
                        else{
                            return{
                                message: ()=> `you have entred wrong values`,
                                pass: false
                            };
                        }

                    }
                });
                it("check years", ()=>{
                    expect(1990).toBeBetween(1988, 2000);
                })
                //anything did not accept null or undefined
                it("test anything", ()=>{
                    let x;
                    expect("asd").toEqual(expect.anything());
                });
                //any checks constructor
                it("check method any", ()=>{
                    expect("asd").toEqual(expect.any(String));

                });
                it("checks array", ()=>{
                    let arr = [1,2,3];
                    //this checks any index in the array
                    expect(arr).toEqual(expect.arrayContaining([1]));
                })

});


