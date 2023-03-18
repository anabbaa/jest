/*
press f in terminal thow only failed test press f again to go back to all tests
press output to show the same results in a better way
- you can use only for test or describe to test only this
- and you can use skip also for a test or a describe to skip only this
- beforeall before each it make some thing before test and run before any other testing
-afterall aftereach it is opposite the above
*/
// function num(num1, num2, num3, num4){
//     return (num1 || 0) + (num2 || null) + (num3 || null) + (num4 || null);

// };module.exports = num;

// another solution by reduce

function num (...args){
    // return args.reduce(a,b => a + b , 0);
    return args.reduce((a, b)=> a + b , 0)
}

module.exports = num;