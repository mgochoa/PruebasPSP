function MathFunctions(){
}


MathFunctions.prototype.average = function (array) {
	var total = null;
	array.forEach(function(a){
		total += a;
	});
	return(total /array.length);
};

MathFunctions.prototype.suma = function(a,b){
  return(a+b);
};

module.exports = MathFunctions;
