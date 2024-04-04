// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const mapeoUsers = users.map((e) => {
  return e.name;
});

console.log(mapeoUsers);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const usersTwo = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const mapeoDos = usersTwo.map((e) => {
  if (e.name.includes("A")) {
    return (e.name = "Anacleto");
  } else {
    return e.name;
  }
});

console.log(mapeoDos);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const mapeoCities = cities.map((e) => {
  if (e.isVisited == true) {
    return e.name + ` (Visitado)`;
  } else {
    return e.name;
  }
});

console.log(mapeoCities);
