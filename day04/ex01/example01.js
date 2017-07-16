console.log("hello node js");
var myvar = require('./example01_myvar');
console.log(myvar.a);   
console.log(myvar.b);
console.log(myvar);
var setFunction = myvar.d();

console.log(setFunction);

var setVar = new myvar.e();
console.log(setVar.name);
 

var myCar =  Object.create(myvar.car.prototype);
myvar.car.call(myCar);
myCar.log();

