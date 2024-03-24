// Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

const objetoPalabras = (array) => {
  for (let datos in array) {
    console.log(`los datos ${datos} del alienigena son: ${array[datos]}`);
  }
};

objetoPalabras(alien);
