var regression = require("regression");

function MathFunctions() {}
MathFunctions.prototype.linearRegression = function(data) {
    var _this = this;
    var sum = [0, 0, 0, 0, 0];
    var results;
    var gradient;
    var intercept;
    var len = data.length;

    for (var n = 0; n < len; n++) {
        if (data[n][1] !== null) {
            sum[0] += data[n][0];
            sum[1] += data[n][1];
            sum[2] += data[n][0] * data[n][0];
            sum[3] += data[n][0] * data[n][1];
            sum[4] += data[n][1] * data[n][1];
        }
    }

    gradient = (len * sum[3] - sum[0] * sum[1]) / (len * sum[2] - sum[0] * sum[0]);
    intercept = (sum[1] / len) - (gradient * sum[0]) / len;

    results = data.map(function(xyPair) {
        var x = xyPair[0];
        return [
            x, gradient * x + intercept
        ];
    });

    return {
        r2: parseFloat(_this.determinationCoefficient(data, results).toFixed(4)),
        r: Math.sqrt(_this.determinationCoefficient(data,results),2),
        equation: [
            /*parseFloat(gradient.toFixed(4)), parseFloat(intercept.toFixed(2))*/
            gradient,intercept
        ],
        points: results,
        string: 'y = ' + _round(gradient, 2) + 'x + ' + _round(intercept, 2)
    };
};

MathFunctions.prototype.yK = function(intercept, gradient, xK){
 return parseFloat((intercept* xK + gradient).toFixed(3));
}

MathFunctions.prototype.determinationCoefficient = function(observations, predictions) {
    var sum = observations.reduce(function(accum, observation) {
        return accum + observation[1];
    }, 0);
    var mean = sum / observations.length;

    // Sum of squares of differences from the mean in the dependent variable
    var ssyy = observations.reduce(function(accum, observation) {
        var diff = observation[1] - mean;

        return accum + diff * diff;

    }, 0);
    var sse = observations.reduce(function (accum, observation, ix) {
      var prediction = predictions[ix];
      var resid = observation[1] - prediction[1];
      return accum + resid * resid;
    }, 0);

    // If ssyy is zero, r^2 is meaningless, so NaN is an appropriate answer.
    return 1 - (sse / ssyy);
};
function _round(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

module.exports = MathFunctions;
