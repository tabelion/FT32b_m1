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

//! ===============================================
// ej 02 javascript
baz = 2;
console.log('e2 bar',bar);
console.log('e2 baz',baz);
foo();
function foo() {
    console.log('e2 ','Hola!');
}
var bar = 1;    // no rompe pero no lleva el valor arriba porque esta declarado

// baz = 2;     // si lo pongo aca a 'baz' da error por eso lo coloco arriba
//* e2 bar undefined
//* e2 baz 2
//* e2  Hola!
//! ===============================================
// ej 03 javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log('e3 inst',instructor);   // el valor es Franco pero usando var

//! ===============================================
// ej 04 javascript
var instructor = "Tony";
console.log(instructor);    // Tony
// funcion autoinvocada se ejecuta en el mismo tiempo que se esta invocando
(function() {
    if(true) {
        var instructor = "Franco";
        console.log('e4 inst',instructor);    //Franco
    }
})();
console.log('e4-2 inst',instructor);    // Tony

//! ===============================================
// ej 05 javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log('e5 inst',instructor);       // Flash
    console.log('e5 pm',pm);       
}
console.log('e5-2 inst',instructor);
console.log('e5-2 pm',pm);

// The Flash
// Reverse Flash
// The Flash
// Franco

//! ===============================================
// ### Coerción de Datos
// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

// ej 06 javascript
console.log(6 / "3");   
// 2
console.log("2" * "3");     
// 6
console.log(4 + 5 + "px");
// 9px
console.log("$" + 4 + 5);
// $45
console.log("4" - 2);
// 2
console.log("4px" - 2);
// NaN
console.log(7 / 0);
// Infinity
console.log({}[0]);
// undefined
console.log(parseInt("09"));
// 9
console.log(5 && 2);     //  como el 5 es true sigue y muestra el 2 
// 2
console.log(2 && 5);    // como el 2 es true sigue y muestra el 5
// 5
console.log(5 || 0);     // como el 0 es false devuelve  5
// 5
console.log(0 || 5);    // como el 0 es false devuelve el 5
// 5
console.log([3]+[3]-[10]);    // al sumar lo convierte en string y lo suma 33 y restar lo convierte en numero y lo resta 33 - 10 = 23
// 23
console.log(3>2>1);     //  como 3 es mayor que 2 es true = 1 entonces 1 o true no es mayor que uno 
// false
console.log([] == ![]);
// true

//! ===============================================
// > Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).
// ### Hoisting
// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

// ej 07 javascript
function test() {
    console.log('e7 a',a);         // undefined  porque esta definido abajo
    console.log('e7 foo()',foo());     // 2
    
    var a = 1;
    function foo() {
        return 2;
    }
}

test();

//! ===============================================
// Y el de este código? :
// ej 08  javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

console.log('e8 a',getFood(false));    // undefined  porque no entra

console.log('e8 b',getFood(true));     // dFriskies  


//! ===============================================
// ### This
// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

// ej 09 javascript
var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log('e9 a',obj.prop.getFullname());   // Aurelio De Rosa

var test = obj.prop.getFullname;        

console.log('e9 b',test());                    // undefined


//! ===============================================
// ### Event loop
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

// Ej 10 javascript
function printing() {
   console.log(1);
    setTimeout(function () {
        console.log('e10 a',2);
    }, 1000);

    setTimeout(function () {
        console.log('e10 b',3);
    }, 0);
   console.log('e10 c',4);
}

printing();     // 1  4 3 2
/*  FIN  */