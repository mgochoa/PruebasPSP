function MathFunctions(){
}

MathFunctions.prototype.suma = function(a,b){
  return(a+b);
};
MathFunctions.prototype.average = function (array) {
	var total = null;
	array.forEach(function(a){
		total += a;
	});
	return(total /array.length);
};



MathFunctions.prototype.averageLl= function (ll){
	try{
		var total=0;
		for(i=1;i<=ll._length;i++){
			total += ll.searchNodeAt(i).data;
		}
		return (total/ll._length);

	}catch(err){
		console.info(err);
		console.error('Resultado no esperado');

	}


};

module.exports = MathFunctions;
