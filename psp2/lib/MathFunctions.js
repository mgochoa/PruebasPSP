function MathFunctions() {}

MathFunctions.prototype.RST = function(array) {
    var average = null;
    var variance = null;
    var standarDeviation = null;
    average = this.arrayAverage(array);
    if (average)
        variance = this.getVariance(array, average);
    if (variance)
        standarDeviation = Math.sqrt(variance);
    var lr = this.logarithmicRanges(average, standarDeviation);
    var nr = this.normalizeRanges(lr);
    return {average: average, variance: variance, standarDeviation: standarDeviation, lr: lr, nr: nr};

}

MathFunctions.prototype.arrayAverage = function(array) {
    array = this.arraygGetLn(array);
    return (array.reduce(summatory, 0) / array.length);
};
MathFunctions.prototype.arraygGetLn = function(array) {
    return (array.map(getLn));
};
MathFunctions.prototype.getVariance = function(array, average) {
    array = this.arraygGetLn(array);

    array.forEach(function(item, index, arr) {
        arr[index] = minusAveragePow(item, average)
    });
    return (array.reduce(summatory, 0) / (array.length - 1));
}
MathFunctions.prototype.logarithmicRanges = function(average, standarDeviation) {
    return {
        vs: average - (2 * standarDeviation),
        s: average - standarDeviation,
        m: average,
        l: average + standarDeviation,
        vl: average + (2 * standarDeviation)
    }
};
MathFunctions.prototype.normalizeRanges = function(ranges) {
    var obj = {};
    for (var property in ranges) {
        obj[property] = (Math.pow(Math.E, ranges[property]));
    }
    return obj;

}

function summatory(a, b) {
    return a + b;
}
function getLn(value) {
    return Math.log(value);
}
function minusAveragePow(n, average) {
    return (Math.pow((n - average), 2));
}

module.exports = MathFunctions;
