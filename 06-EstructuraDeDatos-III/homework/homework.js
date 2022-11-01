"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.size = function () {
    if (!this.left && !this.right) return 1;

    let count = 1;
    if (this.left) count += this.left.size();
    if (this.right) count += this.right.size();

    return count;
};

BinarySearchTree.prototype.insert = function (value) {
    let nodo = new BinarySearchTree(value);

    if (value < this.value) {
        !this.left ? this.left = nodo : this.left.insert(value);
    } else {
        this.right === null ? this.right = nodo : this.right.insert(value);
    }
};

BinarySearchTree.prototype.contains = function (value) {
    //caso de corte en la recursion
    if (value === this.value) return true;

    // veo si hay algo a la izquierda
    if (this.left) {
        if (this.left.contains(value)) return true;
    }

    // si algo a la derecha tambien se puede hacer asi
    if (this.right?.contains(value)) return true;

    return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order = "in-order") {
    switch (order) {
        case "pre-order": {
            cb(this.value);
            if (this.left) this.left.depthFirstForEach(cb, order);
            if (this.right != null) this.right.depthFirstForEach(cb, order);
            break;
        }
        case "post-order": {
            this.left?.depthFirstForEach(cb, order);
            this.right?.depthFirstForEach(cb, order);
            cb(this.value);
            break;
        }
        default: {
            if (this.left !== null) this.left.depthFirstForEach(cb, order);
            cb(this.value);
            if (this.right) this.right.depthFirstForEach(cb, order);
            break;
        }
    }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
    cb(this.value);
    if (this.left) array.push(this.left);
    if (this.right) array.push(this.right);

    if (array.length > 0) array.shift().breadthFirstForEach(cb, array)

};

//valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
//var myTree = new BinarySearchTree(15);
//console.log(myTree);


//* Deep First Search(en profundidad) -> Pre - order)

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};
