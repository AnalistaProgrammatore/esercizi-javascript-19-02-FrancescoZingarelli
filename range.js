let range = function(start, end, step = 1) {
    let rangeArray = [];
    if(step > 0) {
        for (let i = start; i <= end; i = i + step) {
            rangeArray.push(i);
        };
    } else {
        for (let i = start; i >= end; i = i + step) {
            rangeArray.push(i);
        };
    };
    return rangeArray;
};



let sum = function(inputArray) {
    let result = 0;
    for (element of inputArray) {
        result = result + element;
    };
    return result;
};



console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
