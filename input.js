/*
- if you want to check for something you did not make a a test for it type npm tes -- --coverafe
-it will generate a folder coverage you can go to it and see report file open it then press files
to show a complete report for each file
- if you want to type directly coverage feathure add to jason file jest then object 
collectCoverage true
- you can also added anothe rproperty to this object coverageReporters and its value will be an 
array and it will generate reports for certainf files which you aded to this array
- you cann define certain directory by adding another property which is coverageDirectory
*/
function filterName (name){
    if (name === undefined){
        return name = "unknown";
    }
    if(name.startsWith(" ") || name.endsWith(" ")){
        return name.trim();
    }
    if(name.length > 10){
        return  name.substring(0 ,10);

    }
    if(name.startsWith("_") || name.endsWith("_")){
        return name.substring(1, name.length -1);

    }
    if(name === "Hell"){
        throw new Error("this name is not allowed");
    }
    return name;
};
module.exports = filterName;