// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divNuevo = document.createElement("div");

const imprimirDiv = () => {
  document.body.appendChild(divNuevo);
};

imprimirDiv();

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divNuevoTwo = document.createElement("div");
const parrafoDiv = document.createElement("p");

const divMasP = () => {
  document.body.append(divNuevoTwo);
  divNuevoTwo.append(parrafoDiv);
};

divMasP();
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divTres = document.createElement("div");

const seisP = () => {
  for (i = 1; i <= 6; i++) {
    let parrafos = document.createElement("p");

    document.body.append(divTres);
    divTres.append(parrafos);
  }
};

seisP();

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pintarPTexto = () => {
  const pTexto = document.createElement("p");
  document.body.append(pTexto);
  pTexto.textContent = "Soy Dinamico!";
};

pintarPTexto();

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Insert = document.querySelector(".fn-insert-here");

h2Insert.textContent = "Wubba Lubba dub du";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const remover = document.querySelectorAll(".fn-remove-me");

remover.forEach((e) => {
  e.remove();
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const pEnMedio = () => {
  const divs = document.querySelector(".enMedio");
  const parrafoMedio = document.createElement("p");
  parrafoMedio.textContent = "Voy en medio";

  divs.append(parrafoMedio);
};

pEnMedio();

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const pDentro = () => {
  const insertar = document.querySelectorAll(".fn-insert-here");

  insertar.forEach((e) => {
    const parrafoDentro = document.createElement("p");
    parrafoDentro.textContent = "Voy dentro!";
    e.appendChild(parrafoDentro);
  });
};

pDentro();
