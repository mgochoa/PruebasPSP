function MathFunctions(){
}

MathFunctions.prototype.greet = function(){
    return "Hello World";
};


/*MathFunctions.prototype.average = function () {

};*/

MathFunctions.prototype.suma = function(a,b){
  return(a+b);
};

module.exports = MathFunctions;
