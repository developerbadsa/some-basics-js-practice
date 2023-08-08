// Problem 1 cubeNumber maker
function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Invalid Number"
    }else{
        let cubeNumberResult = number * number * number;
        return cubeNumberResult;
    }
}
console.log(cubeNumber(3))

// Problem 2 “matchFinder()”
function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Please Insert String Only";
    }else{
        let matchFinderResult = string1.includes(string2);
        return matchFinderResult;
    }
}