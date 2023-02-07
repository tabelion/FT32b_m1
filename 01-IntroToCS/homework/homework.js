'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    // ! let num = "11101";
    let canti = num.length - 1;
    let calcu = 0;
    
    for (let i = 0; i <= canti; i++) {
        calcu += num[i] * Math.pow(2,canti-i) ;
    }
    return calcu;
}

function DecimalABinario(num) {
    // tu codigo aca
    let calcu = num;
    let resul = "";
  
    while (calcu > 0) {
        resul = calcu % 2 + resul;
        calcu = Math.floor(calcu / 2);
    }
    //return  "1" + resul;  
    return  resul;  
}
//console.log(DecimalABinario(7));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}