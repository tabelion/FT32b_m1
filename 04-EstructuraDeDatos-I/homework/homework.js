'use strict'

const { queue } = require("@11ty/eleventy-cache-assets");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
    if (Number.isInteger(n) !== true) throw new Error("Factorial solo con numeros entero");

    // primero colocar una condicion de corte
    if (n <= 1) return 1

    return n * nFactorial(n - 1);
}


//Secuencia: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

function nFibonacci(n) {
    if (n < 0 && n !== NaN) throw new Error("nFibonacci solo con numeros positivos");

    if (n === 0 || n === 1) return n
    return n < 2 ? n : nFibonacci(n - 2) + nFibonacci(n - 1);
}

// console.log(nFibonacci(0));
// console.log(nFibonacci(6));
// console.log(nFibonacci(9));
// console.log(nFibonacci(2));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
/*
function Queue() {
    this.queue = [];
    //this.queueSize = 0;
}

Queue.prototype.enqueue = function (dato) {
    // ingresa en la cola
    this.queue.push(dato);
    // this.queueSize++;
};

Queue.prototype.dequeue = function () {
    return this.queue.shift();
};

Queue.prototype.size = function () {
    return this.queue.length;
};
*/
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(dato) {
        this.queue.push(dato);
    }

    dequeue() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Queue,
    nFactorial,
    nFibonacci
};
