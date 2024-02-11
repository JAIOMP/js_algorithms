var convertBinaryToDecimal = function (binaries) {
    var result = 0;
    for (var i = 0; i < binaries.length; i++) {
        result = result * 2 + binaries[i];
    }
    return result;
};
console.log(convertBinaryToDecimal([1, 0, 1, 0, 1, 0]));
