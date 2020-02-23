let mcd = function(a, b) {
    if (b === 0) return a;
    let r = a % b;
    if (r === 0) return b;
    while (true) {
        a = b;
        b = r;
        r = a % b;
        if (r === 0) return b;
    }
};



let mcdRecursive = function(a, b) {
    if (b === 0) return a;
    let r = a % b;
    if (r === 0) return b;
    return mcdRecursive(b, r);
};
