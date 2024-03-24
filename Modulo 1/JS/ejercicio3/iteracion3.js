// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
// Puedes usar este array:

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

const recorrerPalabras = (array) => {
  for (let palabras of array) {
    console.log(palabras);
  }
};

recorrerPalabras(placesToTravel);
