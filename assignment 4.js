// Problem 1 cubeNumber maker
function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Invalid Number"
    }else{
        let cubeNumberResult = number * number * number;
        return cubeNumberResult;
    }
}
console.log(cubeNumber(4))

// Problem 2 “matchFinder()”
function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Please Insert String Only";
    }else{
        let matchFinderResult = string1.includes(string2);
        return matchFinderResult;
    }
}
console.log(matchFinder("123", "1"));

//Problem 3 sortMaker()

function sortMaker(arr) {
    let reversedArray = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]<0){
            return "Invalid Input"
        }else if(arr[0] === arr[1]){
            return "equal"
        }else{
            reversedArray.unshift(arr[i]);
        }
    }
    return reversedArray;
}
console.log(sortMaker([4,-2]));

// problem 4 

function findAddress(obj) {
    let address = obj.street +", "+ obj.house +", "+ obj.society;
    let { street, house, society } = obj;

    if(!street || !house || !society){
        if(!street){
            return "__, "+ obj.house +", "+ obj.society;
        }else if(!house){
            return obj.street +", __"+", "+ obj.society;
        }else if(!society){
            return obj.street +", "+ obj.house +", __";
        }
    }else{
     return address;
    }
}


console.log(findAddress({street:17670, house: "175A", society:'“Ear7thPerfect”'}))

// problem 5

function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "Array is empty"
    }else{
        let changeArrayAddition = 0;

        for(let i = 0; i < changeArray.length; i++){
            changeArrayAddition += changeArray[i]
        }
        if(changeArrayAddition<=10){
            return false;
        }else{
            return true;
        }
    }
}

console.log(canPay([20], 10))