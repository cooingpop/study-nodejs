var a = "hello in myvar module";
module.exports.a = a;
module.exports = {b : "return literal", c:"bbb"};
module.exports.d = function() {
    return "Return function";
}
function myVar(){
    this.name = "my Instance";
}
module.exports.e = myVar;

function Car(){
    this.color = "Red ";
}
Car.prototype.log = function () {
    console.log( "this Car is "+this.color );
}
module.exports.car = Car;
// module.exports 뒤에 이름을 명시하지 않으면 제일 마지막으로 exports 한 것만 적용

// make module