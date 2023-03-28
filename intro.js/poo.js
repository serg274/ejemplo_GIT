/* const miPerro = {
  nombre: "gino",
  edad: 3,
  peso: "35.25",
  raza: "golden",
  "vacunas actualizadas": 3
}
console.log(miPerro);
console.log(`EL PERRO PESA ${miPerro.peso}`);
console.log(`EL PERRO  ${miPerro["vacunas actualizadas"]}`);

//notacion de variables
var resultados = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566",
  juego: "Minecraft",
};

var position = 1;//variable llama a propiedad uno.
console.log(resultados[position]); */
//------------------------------------------------------
/* var mochila = {
  color: "azul",
  tamanio: "mediano",
  contenido: ["botella de agua", "cuaderno", "cartuchera"],
};

console.log(mochila);
console.log(mochila.contenido.shift());
mochila.contenido.shift(); */
//------------------------------------------
// verificar propiedades
/* var cuaderno = {
  color: "verde",
  // categoria: 3,
  precio: 4.56,
};
function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}
console.log(cuaderno.hasOwnProperty("categoria"));
//-----------------------------------------------
//Objetos complejos
var ordenesDePizzas = [
  {
    tipo: "margarita",
    tamaño: "individual",
    precio: 5.67,
    toppings: ["extra queso", "champiñones", "piña"],
    paraLlevar: true,
  },
  {
    tipo: "cuatro quesos",
    tamaño: "familiar",
    precio: 18.34,
    toppings: ["extra queso", "pimentón"],
    paraLlevar: false,
  },
  {
    tipo: "napolitana",
    tamaño: "individual",
    precio: 6.78,
    toppings: [],
    paraLlevar: true,
  },
];
// mostrar los objetos
console.log(ordenesDePizzas);
console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[1]);
// mostrar alguna propiedad de los objetos
console.log(ordenesDePizzas[0].tipo); // notación de puntos
console.log(ordenesDePizzas[0]["tipo"]); // notación de corchetes
console.log(ordenesDePizzas[0].toppings);
console.log(ordenesDePizzas[0].toppings[2]); // piña
// agregar una tercera orden de pizzas

var orden = {
  id:4,
"tipo": "napolitana",
"tamaño": "individual",
"precio": 6.78,
"toppings":[],
"paraLlevar": true
}
// mostrar como queda el arreglo
console.table(ordenesDePizzas);
ordenesDePizzas.push(orden);
console.log(ordenesDePizzas); */

//-------------------------------------------
//objetos anidados:

/* var miReceta = {
  descripcion: "mi postre favorito",
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: "100 grs",
      sal: "1 cucharadita",
      agua: "1 taza",
    },
    cobertura: {
      azucar: "120 grs",
      chocolate: "4 cucharadas",
      mantequilla: "200 grs",
    },
  },
};
// ingreso a propiedades principales del objeto
console.log(miReceta); */
