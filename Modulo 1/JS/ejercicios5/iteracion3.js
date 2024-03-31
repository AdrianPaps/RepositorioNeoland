// Iteración #3: Spread Operator
// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList1 = [32, 54, 21, 64, 75, 43];

const arrayCopia = [...pointsList1];

console.log(arrayCopia);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copiaJuguetes1 = { ...toy1 };

console.log(copiaJuguetes1);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const arrayDosListas = [...pointsList, ...pointsLis2];

console.log(arrayDosListas);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const fusionJuguetes = { ...toy, ...toyUpdate };

console.log(fusionJuguetes);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const copiaColor = [...colors];

const arrayEditado = (array) => {
  const arrayVacio = [];
  for (i = 0; i < array.length; i++) {
    if (i !== 2) {
      arrayVacio.push(array[i]);
    }
  }
  return arrayVacio;
};

console.log(arrayEditado(copiaColor));
