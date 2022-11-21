// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var imprimirSumaNumeros = 0
    for (var i = 0; i <= 10; i++){
      imprimirSumaNumeros = imprimirSumaNumeros + i
    }
    return imprimirSumaNumeros
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var encuentraPares = new Array();
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      encuentraPares.push(array[i]);
    }
  }
  return encuentraPares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var elevaAlCuadrado = [];
  for (var i = 0; i < array.length; i++) {
    
    elevaAlCuadrado.push(Math.pow(array[i], 2));
  }
  return elevaAlCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var sumaArray = 0;
  for (var i = 0; i < array.length; i++) {
    sumaArray = sumaArray + array[i];
  }
  return sumaArray;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var numeroDigitos = num.toString().replace('.'|'-', '').length;
  return numeroDigitos;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
