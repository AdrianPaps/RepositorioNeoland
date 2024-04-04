// **Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (array) => {
  let palabraLarga = "";

  for (i = 0; i < array.length; i++) {
    if (array[i].length > palabraLarga.length) {
      palabraLarga = array[i];
    }
  }
  return palabraLarga;
};

console.log(findLongestWord(avengers));
