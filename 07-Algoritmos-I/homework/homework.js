'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let array = [1]; // el 1 va estar siempre
    var primo = 2;    // el proximo seria el 2  

    while (num > 1) {
        if (num % primo === 0) {
            array.push(primo);
            num = num / primo;
        } else {
            primo++;
        }
    }
    return array;
}

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    //? =========================
    //vuelta 1 = [5,1,4,2,8] -- [1,2,4,5,8]
    //vuelta 2 = [1,4,2,5,8] -- [1,2,4,5,8]
    // -> va enviando todos los mayores al final  // swap = intercambio
    //complejidad lineal
    //? Tu código:
    //var canti = array.length;
    let canti = array.length - 1;

    //for (var i = 0; i < canti; i++) {
    for (let i = 0; i < canti; i++) {
        //console.log(i,array[i]);

        //for (var j = 0; j < canti -1 - i; j++) {
        for (let j = 0; j < canti; j++) {
            //console.log(j,array[j]);

            if (array[j] > array[j + 1]) {
                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}


function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    //? Tu código:
    for (let i = 0; i < array.length; i++) {
        let j = i - 1;
        let auxiliar = array[i];

        while (j >= 0 && array[j] > auxiliar) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = auxiliar;

    }
    //console.log(array)
    return array;
}


function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    //? Tu código:
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        //cambio los valores
        if (i !== min) {
            let aux = array[i];
            array[i] = array[min];
            array[min] = aux;
        }
    }

    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};
