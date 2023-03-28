//--PROGRAMACION ORIENTADA A OBJETOS son solo para arreglos[]

//el operador RES son los tres puntitos.
// se usa en la DECLARACION {se le puede poner cualquir nombre}
/* function miFuncion(...args){
console.log(args);
}

//llamamos a la funtion.
miFuncion(1);
miFuncion(1, 2, 3, 4);
miFuncion([1, 2, 3], [4, 5, 6]); // se agregan como arreglos anidados del arreglo principal */
//-----------------------------------------------------
//-----------OPERADOR SPREAD en la llamada------es solo para arreglos[]
/* const numeros = [1, 2, 3];
function sumar(x, y, z) {
  return x + y + z;
}
// Queremos hacer esto:
// sumar(numeros);
// Pero hasta acá se aceptaría así
// sumar(numeros[0], numeros[1], numeros[2]);
console.log(sumar(...numeros)); */
//---------------------------------------------------

//----------sintacsis de desestructuraccion

/* const usuarios = {
  johnDoe: {
    edad: 27,
    correo: "johnDoe@gmail.com",
  },
  ryanGosling: {
    edad: 26,
    correo: "rgosling@gmail.com",
  },
};
const {
  johnDoe: { edad: edadJohnDoe, correo: correoJohnDoe },
} = usuarios;

const {
  ryanGosling: { edad: edadRyan, correo: correoRyan },
} = usuarios;

console.log(edadJohnDoe, correoJohnDoe);
console.log(edadRyan, correoRyan); */
//---------------------------------------------------------
//---------operador RES ...
/* function f() {
  return [1, 2, 3];
}
//-----cada como significa un espacio que se va a saltar.
const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
 */
//-----------------------------------------------------------------
//--------------clase---------------------------------------

/* class Player {
  // constructor de atributos
  constructor(nombre, colorSombrero) {
    this._nombre = nombre;
    this._colorSombrero = colorSombrero;
  }
  // métodos
  saltar() {}
  correr() {}
  saludar() {
    return `Hola soy ${this._nombre} y tengo el sombrero color ${this._colorSombrero}`;
  }
  // GET - consultar
  get nombre() {
    return this._nombre;
  }
  // SET
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
} */

//----------------------------------------
//----------------------Ejercicio -----------------------
/*  A CORREGIR !!!!!!
class empleado {
  constructor(
    nombre,
    apellido,
    dni,
    fechaDeNacimiento,
    edad,
    antiguedad
  ) {
    (this._nombre = "nombre"),
      (this._apellido = "apellido"),
      (this._dni = "DNI"),
      (this._fechaDeNacimiento = "fecha de nacimiento"),
      (this._edad = "edad"),
      (this._genero = "genero"),
      (this._antiguedad = "antiguedad");
  }
  //metodo
  seJubila() {
    if (this._edad >= 60) {
      return `El empleado ${this._nombre} ${this._apellido} ya puede jubilarse.`;
    } else {
      return `El empleado ${this._nombre} ${this._apellido} aún no puede jubilarse.`;
    }
  }

  //get
  get nombre() {
    return this._nombre;
  }
  //set
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}


//crear a empleado1
let empleado1 = new empleado();
//llamo a GET:
console.log(empleado1._nombre);
//Llamo a SET:
empleado1._nombre = 'Nico';
empleado1._edad = 39;
//llamo a connsole.log
console.log(empleado1._nombre);


//crear empleado2
let empleado2 = new empleado();
//llamo a get
console.log(empleado2._apellido)
//llamo a set 2
empleado2._apellido = 'sergio';
//lo llamo por console.log
console.log(empleado2._apellido)

const empleado3 = new empleado(
  "Juan",
  "Pérez",
  "12345678",
  "1980-01-01",
  41,
  10
);
console.log(empleado3.edad);

//----------------------------------------
// Modificar la antigüedad del empleado
// empleado1.antiguedad = 12;
// console.log(empleado1.antiguedad); // 12

// Verificar si el empleado se puede jubilar
// console.log(empleado1.seJubila()); // "El empleado Juan Pérez aún no puede jubilarse."
//---------------------------------------------------------
// Crear un empleado apto para jubilarse
/* const empleado1 = new empleado("Juan", "Pérez", "12345678", "1960-01-01", 63, 20);

// Verificar si el empleado se puede jubilar
console.log(empleado1.seJubila()); // "El empleado Juan Pérez ya puede jubilarse."

// Crear un empleado no apto para jubilarse
const empleado2 = new empleado("María", "García", "87654321", "1980-01-01", 43, 10);

// Verificar si el empleado se puede jubilar
console.log(empleado2.seJubila()); // "El empleado María García aún no puede jubilarse." */

//------------------------------------------------------------------------------
class Empleado {
  constructor(nombre, apellido, dni, fechaNacimiento, edad, antiguedad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._dni = dni;
    this._fechaNacimiento = fechaNacimiento;
    this._edad = edad;
    this._antiguedad = antiguedad;
    
    /* 
    // lo paso un compañero porque se puede calcular en el constructor.
    get edad() {
    const fechaNacimiento = new Date(this._fechaDeNac);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }; */
  }

  // Getters y setters
  get nombre() {
    return this._nombre;
  }
//set
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  // Método seJubila
  seJubila() {
    if (this._edad >= 60) {
      return `El empleado ${this._nombre} ${this._apellido} ya puede jubilarse.`;
    } else {
      return `El empleado ${this._nombre} ${this._apellido} aún no puede jubilarse.`;
    }
  }
}
//--------------------------------------------------------------

// Crear un empleado apto para jubilarse
const empleado1 = new Empleado("Juan", "Pérez", "12345678", "1960-01-01", 63, 20);

// Verificar si el empleado se puede jubilar
console.log(empleado1.seJubila()); // "El empleado Juan Pérez ya puede jubilarse."

// Crear un empleado no apto para jubilarse
const empleado2 = new Empleado("María", "García", "87654321", "1980-01-01", 43, 10);

// Verificar si el empleado se puede jubilar
console.log(empleado2.seJubila()); // "El empleado María García aún no puede jubilarse."
//------------------------------------------------
//----------------------------------------------------------------------
/* 
//funcion para el metodo seJubila.
let edad = parseInt(prompt("Ingrese edad: "));
let genero = prompt("Ingrese género (M para masculino, F para femenino): ");

function seJubila(edad, genero) {
  

seJubila(edad, genero);
 */
