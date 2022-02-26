function noOfElements(x, y, z) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= y && x[i] <= z) {
            count++;
        }
    } 
    return count;
}

module.exports = noOfElements
