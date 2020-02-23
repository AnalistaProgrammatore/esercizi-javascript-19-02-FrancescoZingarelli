let deepEqual = function(inputUno, inputDue) {
    if (typeof inputUno !== "object" && typeof inputDue !== "object") {
        if (inputUno !== inputDue) return false;
    }
    if (inputUno == null || inputDue == null) {
        if (inputUno !== inputDue) return false;
    }
    if (typeof inputUno !== typeof inputDue) return false;
    if (typeof inputUno === "object" && typeof inputDue === "object") {
        let chiaviUno = Object.keys(inputUno);
        let chiaviDue = Object.keys(inputDue);
        if (chiaviUno.length !== chiaviDue.length) return false;
        for (let i = 0; i < chiaviUno.length; i++) {
            if (chiaviUno[i] !== chiaviDue[i]) return false;
            if (deepEqual(inputUno[chiaviUno[i]], inputDue[chiaviDue[i]]) === false) return false;
        }
    }
    return true;
};



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
