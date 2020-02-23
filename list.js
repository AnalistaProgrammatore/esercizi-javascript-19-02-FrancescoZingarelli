let arrayToList = function(inputArray) {
    let arrayToListR = function(key, value) {
        if (key === inputArray.length - 1)  {
            return {value, rest: null}
        } else 
        return {value, rest: arrayToListR(key + 1, inputArray[key +1])};
    }
    return arrayToListR(0, inputArray[0]);
};



let listToArray = function(list) {
    let listToArrayR = function({value, rest}) {
        if (rest === null) {
            return [value];
        } else {
            return [value].concat(listToArrayR(rest));
        }
    };
    return listToArrayR(list);
};



let prepend = function(value, rest) {
    newList = {value, rest};
    return newList;
};



let nth = function(list, numero) {
    let nthR = function({value, rest}, position) {
        if (position === numero) {
            return value;
        } else {
            list = {rest};
            return nthR(rest, position + 1);
        }
    };
    return nthR(list, 0);
};



console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

console.log(JSON.stringify(arrayToList([1, 2, 3, 4])));
// (se faccio un array più lungo di tre elementi non me li mostra in vscode se non faccio JSON.stringify)
