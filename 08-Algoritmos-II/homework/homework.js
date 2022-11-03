'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante

    //? elige un pipbot al azar (puede ser el numero que tenemos en el medio) pone los mas chicos a la izquierda y los valores mayores a la derecha
    // Tu código:
    if (array.length === 0) return array;    //[];

    let left = [];
    let right = [];
    let pivot = array[0];

    //? para recursion necesito un caso base y llamada a la
    for (let i = 1; i < array.length; i++) {

        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }

        //console.log(i,'->',left,'|',pivot,'|',right)
    }
    left = quickSort(left);
    right = quickSort(right);
    //return left.concat(pivot).concat(right);
    return [].concat(left, pivot, right);
}

// =============================================

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    //! half o middle = mitad
    // Tu código:
    let half = Math.floor(array.length / 2);

    if (array.length < 2) return array;

    let left = array.splice(0, half); // splice le saca los elemento al array
    let right = array; //.splice(half);    //.splice(half, array.length);
    //console.log(left,right);
    //? llamo a la recursividad
    return merge(mergeSort(left), mergeSort(right));
}

// merge recibe 2 elemento y lo va ordenando
function merge(left, right) {
    let array = [];

    //usamos un while cuando no sabemos cuando termina
    while (left.length && right.length) {
        // compara los elementos left[i] < right[j]
        if (left[0] < right[0]) {
            array.push(left[0]);
            left.shift();
        } else {
            array.push(right[0]);
            right.shift();
        }
    }
    return (array).concat(left).concat(right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};
