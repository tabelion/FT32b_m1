'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    /* 180 / 2 = 90  0
        90 / 2 = 45
        45 / 3 = 15
        15 / 3 =  5
         5 / 5 =  1
         1  el arreglo = [ 1, 2, 2, 3, 3, 5]
        = 1*2=2, 2*2=4, 4*3=12, 12*3=36, 36*5=180
    */
    // Tu código:
    let array = [1]; // el 1 va estar siempre
    var primo = 2;    // el proximo seria el 2  

    while (num > 1) {
        //console.log(num, primo);
        if (num % primo === 0) {
            array.push(primo);
            num = num / primo;
        } else {
            primo++;
        }
    }
    return array;
}
//* complejidad 0(n)
// console.log(factorear(180));

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
        //console.log(i, array[i]);

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
// switch  = cambio
// swap = intercambio
//console.log(bubbleSort([5, 1, 4, 2, 8]));

function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante

    // busco un dato y lo voy retrocediendo comparando y lo inserto donde corresponde cuando encuntro alguno mayor 
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

    //!primero busca el menor va al inicio luego vuelve a buscar el menor va al inicio y empieza a buscar donde ubicarse
    //? Tu código:
    for (let i = 0; i < array.length; i++) {
        let min = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        //!swap = intercambio, cambio los valores
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
