// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia.
//Una vez lo tengas compruébalo con un console.log.
// ( Mirar abajo en pistas ).
// Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const aprobados = (array) => {
  for (i = 0; i < array.length; i++) {
    let trimestresAprobados = 0;

    if (array[i].T1 == true) {
      trimestresAprobados++;
    }

    if (array[i].T2 == true) {
      trimestresAprobados++;
    }

    if (array[i].T3 == true) {
      trimestresAprobados++;
    }

    if (trimestresAprobados >= 2) {
      array[i].isApproved = true;
    } else {
      array[i].isApproved = false;
    }
  }
};

aprobados(alumns);

console.log(alumns);
