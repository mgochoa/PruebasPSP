function MathFunctions() {}

MathFunctions.prototype.suma = function(a, b) {
    return (a + b);
};
MathFunctions.prototype.average = function(array) {
    var total = null;
    array.forEach(function(a) {
        total += a;
    });
    return parseFloat((total / array.length).toFixed(2));
};

MathFunctions.prototype.averageLl = function(ll) {
    try {
        var total = 0;
        for (i = 1; i <= ll._length; i++) {
            total += ll.searchNodeAt(i).data;
        }
        return parseFloat((total / ll._length).toFixed(2));

    } catch (err) {
        console.info(err);
        console.error('Resultado no esperado');

    };
};

MathFunctions.prototype.standardDeviation = function(array) {
    var total = null;
    var avg = this.average(array);

    array.forEach(function(a) {
        total += Math.pow(a - avg, 2);
    });

    return parseFloat(Math.sqrt(total / (array.length-1)).toFixed(2));

};

MathFunctions.prototype.standardDeviationLl = function(ll) {
    try {
        var total = 0;
        var avg = this.averageLl(ll);
        for (i = 1; i <= ll._length; i++) {
            total += Math.pow(ll.searchNodeAt(i).data-avg,2);
        }
        return parseFloat( Math.sqrt(total / (ll._length-1)).toFixed(2)) ;

    } catch (err) {
        console.info(err);
        console.error('Resultado no esperado');

    };

};

module.exports = MathFunctions;
