"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
    this._length = 0;
    this.head = null;
};

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value);
    // si la lista esta vacia lo agrega sino busca el final de la lista 
    if (this.head === null) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    this._length++;
}

LinkedList.prototype.remove = function () {
    //lista vacia
    if (this.head === null) return null;

    let current = this.head;
    var result = current.value;

    // 1 solo nodo
    if (current.next === null) {
        this.head = null;
    } else {
        // si tengo mas de un elemento
        while (current.next.next) {
            current = current.next;
        }
        result = current.next.value;
        current.next = null;
    }
    this._length--;
    return result;
}

LinkedList.prototype.search = function (valueOrCb) {
    //lista vacia
    if (!this.head) return null;

    //? let nodoNro = 1;
    var current = this.head;
    // le hago recorrer la lista al puntero
    while (current) {
        // si era una funcion
        if (typeof valueOrCb === "function") {
            if (valueOrCb(current.value) === true) return current.value;
        }
        // si es dato
        if (current.value === valueOrCb) {
            //? return `encontre el valor ${valueOrCb} en el orden ${nodoNro}  `;
            return valueOrCb;
        }
        //? nodoNro++;
        current = current.next;
    }
    return null;
}


//let newNodo = new Node('prueba');
let linkedList = new LinkedList();
// tiene metodos `add`, `remove`, y `search`', function () 
console.log(linkedList);
linkedList.add('56');
linkedList.add('77');
linkedList.add('hola');
linkedList.add('35');
console.log(linkedList);
console.log('busca', linkedList.search('hola'));
console.log(linkedList);
console.log(linkedList.remove());
//linkedList.search('function');
console.log(linkedList);
//console.log(newNodo);

// piezan head como null', function
// expect(linkedList.hasOwnProperty('head')).toBe(true);
// expect(linkedList.head).toBeFalsy();
// expect(linkedList.remove()).toBeFalsy();




/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable(slots) {
    this.numBuckets = slots || 35;
    this.buckets = new Array(this.numBuckets)
};

HashTable.prototype.hash = function (string) {
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        sum += string.charCodeAt(i);
    };

    return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
    if (typeof key !== 'string') {
        throw TypeError('Keys must be strings');
    }
    var index = this.hash(key);

    if (this.buckets[index] === undefined) {
        // vamos a crear una substructura, en este caso un objeto
        this.buckets[index] = {};
    }

    this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
    var index = this.hash(key);
    return this.buckets[index][key];  // si no encuentra devuelve undefined
};
// repasar como aceder a elemento de un objeto

HashTable.prototype.hasKey = function (key) {
    //! slot o indice o casillero o index o buckets
    var slot = this.hash(key);
    return this.buckets[slot].hasOwnProperty(key); // buscamos si tiene esa propiedad
};

console.log('foo'.charCodeAt(1));
var newHT = new HashTable(35);
console.log(newHT.hash("this is a key"));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    Node,
    LinkedList,
    HashTable,
};
