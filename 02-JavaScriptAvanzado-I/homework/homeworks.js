//! Investiga cuál es la diferencia entre declarar una variable con var y directamente asignarle un valor.

x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    var x = 10;
    console.log('01-x',x);     //TODO 01: 10
    console.log('02-a',a);     //TODO 02: 8
    var f = function(a, b, c) {
        b = a;
        console.log('03-b',b);    //TODO 03: 8
        b = c;
        var x = 5;
    }
    f(a,b,c);
    console.log('04-b',b);     //TODO 04: 9
}

c(8,9,10);
console.log('05-b',b);    //TODO 05: 10
console.log('06-x',x);    //TODO 06: 1

// 01-x 10
// 02-a 8
// 03-b 8
// 04-b 9
// 05-b 10
// 06-x 1