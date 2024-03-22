// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(array) {
  let objetoVacio = {};

  for (i = 0; i < array.length; i++) {
    const palabra = array[i];
    if (objetoVacio.hasOwnProperty(palabra)) {
      objetoVacio[palabra] += 1;
    } else {
      objetoVacio[palabra] = 1;
    }
  }
  return objetoVacio;
}

const resultado = repeatCounter(counterWords);

console.log(resultado);

// crear un objeto vacio, recorremos el array, y por cada elemento del array vemos si con hasOwnProperty se encuentra si este elemento es una propiedad del objeto vacio que creamos
//si encuentra la propiedad es por que ya añadimos esa propiedad al objeto que creamos, osea que habria que sumarle +1 a esa propiedad por que ya la encontro
//y si no se encuentra es por que no esta en el objeto, con lo cual habria que añadirle al objeto esta propiedad con la clave de 1
