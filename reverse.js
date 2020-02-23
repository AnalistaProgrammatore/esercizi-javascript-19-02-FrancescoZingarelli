// IO L'HO FATTO COSI', CHE CREDO SIA IMPERATIVA, LA VERSIONE DICHIARATIVA MO VEDIAMO SE RIESCO A FARLA

let reverseArray = function(inputArray) {
    let outputArray = [];
    for (let i = 0 ; i < inputArray.length; i++) {
        outputArray.push(inputArray[inputArray.length - 1 - i]);
    };
    return outputArray;
};



let reverseArrayInPlace = function(inputArray) {
    let arrayLength = inputArray.length;
    let outputArray = [];
    for (let i = 0; i < arrayLength; i++) {
        outputArray[i] = inputArray[arrayLength -1 -i];
    };
    for (let i = 0; i < arrayLength; i++) {
        inputArray[i] = outputArray[i];
    };
};



console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
