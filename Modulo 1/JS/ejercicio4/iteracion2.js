// Iteración #2: Mix Fors
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const sumaPromedio = (array) => {
  totalVolumenes = 0;
  totalSonidos = 0;

  for (usuarios of array) {
    for (sonidos in usuarios.favoritesSounds) {
      totalVolumenes += usuarios.favoritesSounds[sonidos].volume;
      totalSonidos++;
    }
  }
  const promedioVolumenes = totalVolumenes / totalSonidos;
  return promedioVolumenes;
};

console.log(sumaPromedio(users));
