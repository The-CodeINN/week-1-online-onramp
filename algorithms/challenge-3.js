function isDivisbleByN(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % n === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports = isDivisbleByN
