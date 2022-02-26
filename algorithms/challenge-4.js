function highestSum(x, y) {
    let sumX = 0;
    let sumY = 0;
    for (let i = 0; i < x.length; i++) {
        sumX += x[i];
    }
    for (let i = 0; i < y.length; i++) {
        sumY += y[i];
    }
    if (sumX > sumY) {
        return sumX;
    } else {
        return sumY;
    }
}

module.exports = highestSum